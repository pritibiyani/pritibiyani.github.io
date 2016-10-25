---
title: Using JSON schema as specification, contract and validate your API. 
layout: post
published: false
category: programming
tags: [api, json, automation]
social_media_share: 
feature_image:
---

You might have encountered a situation where you need to be dependent on API being developed by other team and your team continues development depending on shared contract between both the teams. And the one fine day, when you try to integrate end to end, boom! You will find surprises! You will get to hear, "*Ohh, this was supposed to be Integer, but it's a string now*! " or, "*This supposed to be an array and not an object!* " and many more ... :hushed:

Sooner you realize that checking this manually is getting worst and worst and this is what happened in one of my recent project. 

To deal with this situation, you can go with one of following option depending on your project needs: 

1. Check for specific values in API for a scenario  
 This would be helpful in a situation where one need to check multiple api calls adn validate the end result.<br> 
 For eg. This one is classic example. In case of transferring amount from account A to B, the api test will check if the amount in end result is correct for both accounts. <br>
 For different languages, there are many libraries available to check rest API. For java, one can go with [rest-assured](http://rest-assured.io/), for Ruby, can use [rest-client](https://github.com/rest-client/rest-client).
     
2. Check for a semantic and structure of the the API   
 In a situation where you are just concern about contract and not values, then you can go with this one. <br> 
 For eg. On a page, you want to show list of books with details such as title, author name, price and many such properties. In this case, you would just go through a JSON and pick up needed details. Moreover, you will not bother about values. <br>
 This was what exact situation for us and blog post will address the option we went ahead with.

    Lets take one example:
   
   <script src="https://gist.github.com/pritibiyani/f86c55fca4fbf4e5835a7c670bc16022.js"></script>
   
   This is what agreed shared contract between two teams for one of the book in a collection. 
   <br>As a consumer, you want to make sure following conditions are satisfied or not:  
   
   - price should be always float type and not zero. 
   - Additionally, author, title and price are mandatory fields.
   - If published date is present, it should follow standard date-time format.
  
  There are ways of achieving above conditions, we can access a particular field in a json and perform the check for semantic or can check for presence of absence of the values. But as this list grows, you know how messy and ugly it becomes! :expressionless:
   
   Similarly, lets say you are an API provider and you want to let your API consumers know basic structure and semantics of to be developed API, so that they can build on top of that.    
   
   If you had, above two problems then you must use JSON schema. 

> I'm consumer of API and I don't want to test API manually <br>
>  - Use JSON Schema! 

> I'm API provider, and along with unit test, I want to check whether my API adheres to contract, what to do? <br>
>  - Use JSON Schema! 

> We are working in a distributed team and development goes hand in hand, how to share contract? <br>
>  - Use JSON Schema! 

<br>

+ **What is JSON Schema and how would it be useful to check for contract?**
//Image



In simple terms, JSON schema is contract for your JSON document. Schema is nothing but a way to define structure and semantics. JSON schema exactly does the same. It defines rules for your contract and can validate JSON documents against schema. <p>
   
   For the structure defined above, the schema would look like following: 
<script src="https://gist.github.com/pritibiyani/b26cccedadbf59d6b95ca82b8cd23950.js"></script>

Lets go through this schema: <br>

 - $schema keyword <br>
 The root level of schema contains this `$schema`, which signifies the location and version of schema of the schema you will be using. This should be present at top level of the schema, unlike we specify doctype tag in html.

- type <br> 
    It specifies the type of the root object. It will be always object. Supported different types are object, array, String, number, integer, boolean.

- properties, type <br> 
    Then as we go next, we will find these keywords a lot. Properties is used alternatively for Json Object. The root level `properties` tag contains main chunk for a given JSON document.
 
<br>   
You must have noticed it's pretty easy to follow the schema and we can relate to actual json. Remember, the conditions we wanted to have as a consumer? Let's see how these are being enforced by the schema. Given, as we are little familiar with Json schema, it should be easy to follow those.  <br>


- price should be always float type and not zero. <br>
If we take a look at following snippet. we see price's type as `number`, which says that this field can only accept float values. Additionally there are two fields `minimum` and `exclusiveMinimum`. `minimum` says that is can have minimum value as 0 (x >= 0 ) and additional constraint, `exclusiveMinimum` is boolean. When its true, it indicates that range excludes minimum value and then our condition becomes (x > 0). 

{% highlight javascript %}
    "price": {
	 "type": "number",
	 "minimum": 0,
	 "exclusiveMinimum": true
	}
{% endhighlight  %}
 
-  Author, title and price are mandatory fields. <br>
 The following code snippet is self explanatory. It says, that only price, title and author are mandatory fields. 
 
 {% highlight javascript %}
  "required": 
  [
     "author",
     "title",
     "price"
   ]
 {% endhighlight  %}
 
- publishedOn if present, should follow date-time format. <br> 
{% highlight javascript %}
    "publishedOn": {
      "type": "string",
      "format": "date-time"
    }
{% endhighlight  %}

The type is `string`. The `format` keyword allows to validate certain kind of a strings. For example, date or email. As of now in version 4 of json schema, supported formats are: email, date, ipV4 & ipV6 address, uri and hostname. 

+ **How to use this in your favourite language?**

 I have written (this)[https://github.com/pritibiyani/JsonSchemaDemo] sample code in Ruby which validates the provided schema against the JSON document. If there are any errors in validating schema against JSON, the library gives error in very neat manner. Remember, if there is error at top level, it will not go inside. 
 {% highlight javascript %}
 
 [
  "The property '#/' did not contain a required property of 'author' in schema file:///Users/Priti/projects/Ruby_Projects/jsonSchema/schema/book_schema.json",  "The property '#/' did not contain a required property of 'price' in schema file:///Users/Priti/projects/Ruby_Projects/jsonSchema/schema/book_schema.json"
 ]

 {% endhightlight %}
 
 As per what I have observed, the validation is carried out in following order: required properties and then it traverse inside the properties to check against specified rules. This is performed in this order, as the cursor digs more deeper. You can play around more and check errors for Invalid JSON document.   
 
 
 Well, if Ruby is not your favourite language, then there are other languages libraries available which will help you to build schema and validate document against those. Check (here)[http://json-schema.org/implementations.html] for your preferred language and its corresponding stable library. 
     
You might be wondering, how to create this schema? It will be error prone, if we have to do that manually. Well, there are again libraries, which will create schema provided JSON document. (jsonschema.net)[http://jsonschema.net/#/] is online tool which help you to create basic schema provided JSON document. The additional constrains and rules, you can add as per the requirements.   
 
+ **How to check in editor** 
    
    If you are using any JetBrains IDE, there is inbuilt plugin which can be used to validate JSON against schema. You can follow, following screenshot to set up one for you.   
    <p>
    <div class ="fade">
      <div><img src="/assets/images/json_schema_slider/json_schema_00.png" ></div>
      <div><img src="/assets/images/json_schema_slider/json_schema_01.png"></div>
      <div><img src="/assets/images/json_schema_slider/json_schema_02.png"></div>
      <div><img src="/assets/images/json_schema_slider/json_schema_03.png"></div>
      <div><img src="/assets/images/json_schema_slider/json_schema_04.png"></div>
      <div><img src="/assets/images/json_schema_slider/json_schema_05.png"></div>
    </div>
        <br/>
        <figcaption align="middle"> using inbuilt plugin for validation of schema and JSON document </figcaption>
    </p>
    
    You can follow (this link)[https://www.jetbrains.com/help/webstorm/2016.1/json-schema.html] to check more about setting up in editor. The drawback of this inbuilt plugin is, if schema is updated, it does not reflect on the fly. So use it with care.  


+ **Summary**
 
 This blog post was to explain what simple json schema looks like. You can explore more into documentation and design schema as per your need. The schema helps in multiple way. It acts as contract between two teams, serves as a specification, simple to read and easy to follow and you can use it for validation once your APIs are ready. 
    
+ **Reference links for schema**
  
    1. [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema/)
    2. [JSON Schema](http://json-schema.org/)
    3. [Heroku app built on top of json-validator java library](https://json-schema-validator.herokuapp.com/)


     
     
     


   
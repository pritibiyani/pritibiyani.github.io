---
title: JSON Schema - as a specification, contract and validation! 
layout: post
published: false
category: programming
tags: [api, json, automation, projectExperience]
social_media_share: Using JSON schema as a specification, contract and validation and make your life easy when you are validating #json #api #jsonSchema
feature_image: https://pritibiyani.github.io//assets/images/horrible_json.jpg
---

We all have been in a situation where we depend on other team/pair for APIs. And then when we try to consume those, the dialogues we get to here, 
"*Ohh, this was supposed to be Integer, but it's a string now*! " or, "*This supposed to be an array and not an object!*" and many such more ... :hushed:

This can happen because of expectation mismatch or poor sharing mechanism of contract. The new cropping API issues will surprise you more than yesterday and list will keep on growing! And one fine day, you will find yourself in a loop of checking more API issues and fixes. You will surely get dream of getting stuck in middle of horrible JSONs! :scream:

<p align="middle">
    <img src="/assets/images/horrible_json.jpg" alt="Horrible JSON everywhere" class="img-responsive img-thumbnail">
    	    <figcaption align="center">Image from: <a href = "https://memegenerator.net/instance/72656608">https://memegenerator.net/</a></figcaption>

</p>

 
To tackle this situation, you need to start in very early phase. You can follow 2-step process to make your life easy when dealing with API:

1. **Check for semantic and structure of API**  
 Check for type of a field, mandatory fields, allowed values for a particular fields, some additional constraints like nonzero, Integer etc., specific requirement for a particular string (value should be correct email or value should follow particular date format). 

2. **Journey based assertion**  
 If API is satisfying above condition, then go ahead to check for a journey.<br> 
 For eg. This one is classic example. In case of transferring amount from account A to B, the api test will check if the amount in end result is correct for both accounts. <br>
 For different languages, there are many libraries available to check rest API. For java, one can go with [rest-assured](http://rest-assured.io/), for Ruby, can use [rest-client](https://github.com/rest-client/rest-client).
     
    This blog post addresses how to check semantic and structure of the API. Let's take one example:
   
   <script src="https://gist.github.com/pritibiyani/f86c55fca4fbf4e5835a7c670bc16022.js"></script>
   
   This is a contract between two teams for one of the book in a list. 
   <br>As a consumer, you want to make sure following conditions are satisfied or not for book object:  
   
   - Price should be always of float type and nonzero. 
   - Author, title and price are mandatory fields.
   - If published date is present, it should follow standard date-time format.
  
  There are ways of achieving above conditions, we can access a particular field in a json and perform the check for type of a value or can check for presence of a particular field. But as this list grows, you know how messy and ugly it becomes! :expressionless:
   
   Similarly, let's say you are an API provider and you want to let your consumers know about basic structure and rules of to be developed API, so that they can build on top of that.    
   
   If you had, above two problems then you must use JSON schema. 

> I'm consumer of API and I don't want to test API manually <br>
>  - Use JSON Schema! 

> I'm API provider, and along with unit test, I want to check whether my API adheres to contract, what to do? <br>
>  - Use JSON Schema! 

> We are working in a distributed team and development goes hand in hand, how to share contract? <br>
>  - Use JSON Schema! 

<br>

+ **What is JSON Schema and how would it be useful to check for contract?**

<p align="middle">
    <img src="/assets/images/schema_definition.png" alt="Schema" class="img-responsive img-thumbnail">

</p>

In simple terms, JSON schema is contract for your JSON document. It defines rules for your contract and can validate JSON documents against schema. 
   
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


- Price should be always of float type and nonzero. <br>
If we take a look at following snippet, we see type of price as `number`, which means that this field can only accept float values. Additionally there are two fields `minimum` and `exclusiveMinimum`. `minimum` indicates that is can have minimum value as 0 (x >= 0 ). Another constraint, `exclusiveMinimum` is boolean. When its true, it indicates that range excludes minimum value and then our condition becomes (x > 0). 

{% highlight javascript %}
    "price": {
	 "type": "number",
	 "minimum": 0,
	 "exclusiveMinimum": true
	}
{% endhighlight  %}
 
-  Author, title and price are mandatory fields. <br>
 The following code snippet is self explanatory. It interprets that only price, title and author are mandatory fields. 
 
 {% highlight javascript %}
  "required": 
  [
     "author",
     "title",
     "price" ]
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

 I have written [Simple JSON schema demo](https://github.com/pritibiyani/JsonSchemaDemo) - a sample code in Ruby which validates the provided schema against the JSON document. If there are any errors in validating schema against JSON, the library gives error in readable and user friendly format. Remember, if there is error at top level, it will not go inside. 
 {% highlight javascript %}
 [
  "The property '#/' did not contain a required property of 'author' in 
  schema file:///~/jsonSchema/schema/book_schema.json", 
   
   "The property '#/' did not contain a required property of 'price' in 
   schema file:///~/jsonSchema/schema/book_schema.json"
 ]
 {% endhighlight %}
 
 As per what I have observed, the validation is carried out in following order: required properties and then it traverse inside the properties to check against specified rules. This is performed in this order, as the cursor digs more deeper. You can play around more and check errors for Invalid JSON document.   
 
 
 Well, if Ruby is not your favourite language, then there are other languages libraries available which will help you to build schema and validate document against those. Check [here](http://json-schema.org/implementations.html) for your preferred language and its corresponding stable library. 
     
You might be wondering, *how to create this schema?* <br> 
It will be error prone, if we have to do that manually. Well, there are again libraries, which will create schema provided JSON document. [jsonschema.net](http://jsonschema.net/#/) is online tool which help you to create basic schema provided JSON document. You can add additional constrains and rules as per the requirements.   
 
+ **How to check in editor** 
    
    If you are using any JetBrains IDE, there is built-in plugin which can be used to validate JSON against schema. You can follow, following screenshot to set up one for you.   
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
        <figcaption align="middle"> Using built-in plugin for validation of schema and JSON document </figcaption>
    </p>
    
    <br>To know in details, you can follow [this link](https://www.jetbrains.com/help/webstorm/2016.1/json-schema.html). The drawback of this built-in plugin is, if schema is updated, it does not reflect on the fly. So use it with care.  


+ **Summary**
 
 This blog post purpose was to make you introduce to JSON schema and how to use them. You can explore more into documentation and design schema as per your need. 
 
 > The schema helps in multiple way. It acts as contract between two teams, serves as a specification, simple to read and easy to follow and you can use it for validation once your APIs are ready. 
    
+ **Reference links for schema**
  
    1. [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema/)
    2. [JSON Schema](http://json-schema.org/)
    3. [Heroku app built on top of json-validator java library](https://json-schema-validator.herokuapp.com/)
    4. [Simple JSON schema demo in Ruby](https://github.com/pritibiyani/JsonSchemaDemo)


     
     
     


   
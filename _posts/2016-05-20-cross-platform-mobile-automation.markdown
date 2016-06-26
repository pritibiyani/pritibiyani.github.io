---
layout: post
title: Cross Platform Mobile Automation
published: false
category: 
tags: [automation, mobile]
social_media_share: "Building cross platform mobile automation framework #mobile #automation #crossPlatform"
feature_image:
---

Mobile devices are becoming important platform for customers and it plays crucial role when it comes for organisation's digital strategy. And when it's mobile, there are bunch of variations present; iOS, android, iPad, windows, blackberry, mobile web and so on!  With such rapid development going on around these many platforms, we need to have refined end to end high level functional tests for these number of platforms. If such is a case, we would like to have some mechanism in place where we write once and get free for others, unlike Java. The blog post talks about the exact problem and solution we came up with!


**Cross platform tests**

"Cross platform" refers to idea that means, same test(scenario) can be executed on multiple platforms. This does not have anything to do with your app is pure native/hybrid or combination of both.  
 One can decide to go for writing cross platform tests, if: 
 
 1. Similar functionality is present across the different platforms.
 2. Test suite is covering high level end to end flows. (Minimal number of tests are present at UI layer.)  
 
 <p align="middle">
     <img src="/assets/images/cross_platform_test_execution.jpg" alt="Cross Platform automation tests">
     <figcaption align="middle"> Cross Platform automation tests  </figcaption>
 </p>
 <br/>

When any automation suite we go for writing, we have following expectation and cross platform automation is not an exception for this.
 
 1. It should take very **minimal time** to add any new tests. 
 2. It should be very easy accommodate any new **changes** and hence maintenance. 
 3. It should be very simple and allow us **to reuse the code.** 
    
Well, [Page Object Pattern](http://martinfowler.com/bliki/PageObject.html) is natural fit for any application which has workflow and it satisfies above expectations if used in proper way. But how can we have one test which will work for all platforms? And well, we are not the first one to face this problem. People have already faced this problem and came up with solutions like:

1. [Cross platform best practices by Calabash](https://github.com/calabash/x-platform-example)
2. [Strategy pattern](http://www.3pillarglobal.com/insights/design-patterns-in-automation-testing)
3. [Screen object pattern](https://rubygemtsl.com/2014/01/06/designing-maintainable-calabash-tests-using-screen-objects-2/)

These are some of the ways people have tried to write their automation suite. But if we look at all these examples, scenario and step definition(in context with [Cucumber features](https://github.com/cucumber/cucumber/wiki)) are common and rest of the part is specific to each platform implementation.
 
 <p align="middle">
     <img src="/assets/images/different_page_for_different_platform.jpg" alt="Different pages for different platform">
     <figcaption align="middle"> Different Pages for different platform </figcaption>
 </p>
 <br/> 
 
 The problem with this approaches is, we are not able to reuse the code as much as possible. Whenever any new test we need to implement, we will need to duplicate same service for respective page object and thus, violating [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). 
 
 Surely, we saw problem with this approach and the root cause of this was different pages being used for different platforms. Solution we came up with is, **"One page to test them all!"**

 <p align="middle">
     <img src="/assets/images/same_page_for_all_platform.jpg" alt="Same page for different platform">
     <figcaption align="middle"> One Page for all platforms! </figcaption>
 </p>
 <br/>
The challenge with this approach was, how we can have one page being all different platforms and their behavior is different. We solved these challenges in an iterative way taking one challenge at a time. If we consider android, iOS and mobile web platforms, following are the challenges:

1. Locating UI elements mechanism is different  
 As each platform eco-system is different itself, mechanism for identifying each locator is different.
 
2. Different UI interaction  
 UI gesture for each platform is different and so does an API varies provided for same ui interaction.
 
3. Different Automation Tools  
 Currently there is no single tool which can be used for all platforms.

4. Different UI navigation patterns  
 Each platform recommends some style guide and UI varies from platform to platform.

We solved above problems one by one and keeping basic automation expectations in mind. 

+ Locators for each platform   
 It's just way of specifying for each platform is different., where I see platform as key and locator as it's value. Simply as follows, if in Ruby:
 
     {% highlight ruby %}
        {
       web: "#Food Items:"
       droid: "* id:'FoodItems'"
       ios: "* title:'Food Items'"
     }
     {% endhighlight %}

+ Different UI interaction   
 Platform specific behaviour will change for each of the ui component on the device. Entering text for textbox will vary for the platform. Well, again it's just way of specifying the element on the page for different platforms. We have solved specifying locator for each platform already; all we need is an abstraction for each of the UI component.
     
     {% highlight ruby %}
          t = Textbox.new ({
                               web: "#username",
                               droid: "* id:'username'",
                               ios: "* id:'user_name'"
                           })
     {% endhighlight %}
    
 Eventually there will be other elements like checkbox, button, table, dialog and so on. We can define different behavior as per each component and common behavior for all this can be extracted out to element class. 
    
 <p align="middle">
         <img src="/assets/images/element_abstraction.png" alt="Same page for different platform">
         <figcaption align="middle"> Element abstraction </figcaption>
 </p>
 
 
+ Different automation tools   
 Currently there is no single API which exposes a common API for all these platforms. Although the name seems similar on each of the API, underneath actions are different. This can be solved by defining a module which will do all UI actions and whose responsibility will be defining a common interface for different platform. 
 
 With this design in place, our page objects will be platform agnostic and any change in the corresponding API upgrade will not affect the behavior of page objects. 
      
 <p align="middle">
     <img src="/assets/images/driver_abstraction.png" alt="Same page for different platform">
     <figcaption align="middle"> Driver - All UI actions will be delegated to platform specific driver </figcaption>
 </p>

+ Different UI Navigation patterns   
 A classic example of this being Navigation drawer on android, tab bar on ios and menu bar on web. This can be solved by defining abstraction for menu representation and delegating UI actions to common API module. You can look at the implementation [here](https://github.com/CrossPlatformPageObject/cross-platform-single-page-example/tree/master/app/pages/menu).       
     
Here we go with one page for all platform, end to end implementation will look like: 
 <p align="middle">
     <img src="/assets/images/complete_implementation.jpg" alt="Same page for different platform">
     <figcaption align="middle"> All glued together!  </figcaption>
 </p>
     
+ Abstracting wait and transition

   We saw that set of actions are getting repeated when we are navigating from one page to another page. 
   
    1. Click on button.
    2. Wait for next page to load. 
    3. Return the next page when loading is complete. 

    <br/>And whenever we repeat, there is an opportunity of abstracting it. Here, all we need to do is identify the correct class, where we can have this responsibility. We definitely can't put it in driver as it is responsible for interaction. If we go one level higher, element seem to be correct place for this. Again every element click action does not lead to transition and what we can have in this case is another element type, Transition Aware element! 
     
    This element in addition to locator will have knowledge of transition it can lead to. Transition can be of two type, success and error and each can very well have multiple transition in itself. Considering all these requirements, we can specify like this:  
       
  {% highlight ruby %}
          @button = TransitionElement.new( 
          {  		
               :web   => '#continue_button', 
               :ios   => "* marked:'Order'", 
               :droid => "* marked:'Order Food'" 
          },           
          { 		
              :to =>    [ UserDetails, PurchaseSummary]   # represent success transition
              :error => [ UserDetailsErrorDialog ] 
          })
     {% endhighlight %}
     
**Example**
    
In any case, at functional UI layer test, your automaton should change only in two of the cases:
 
1. Any change any UI elements. (Element locator change)
2. Any change in the existing flow. (Transition change)
    
If we want to accommodate these changes in our current framework, it's a change at single place for all the platforms. 
      
Let's take an example for this. With help my colleagues, I have developed small app for each platform, a Food app. It lists food items and one can order food for by cash or or by paying in advance.
 

  
  
If we create page objects for this, flow for ordering food will be: 

1. Food list page  << add_food_to_card >> 
2. Cart  << checkout >>  
3. User details << submit user details >>
4. Choosing form of payment << Cash / Credit Cart>>
5. Redirecting to Purchase summary if Cash option is selected.

use case for   
  
----------
2. Change things locator: Introduce abstraction. 
1. Simple page object. 
3. What makes automation cluttered and not stable : Transitions.
5. 

In detail, if you want to have a look at challenge and solution, you can have a look [here]()
Let's take one example and try to solve the problem.
one example. and how internally things happen 

Use cases: 
1. Adding new page
2. Updating existing one. 

Design aspect:
1. We want to keep things separate which from things which are goign to change. 
2. Abstractions and oop design
3. Clear responsibility driven way. 



Handling wait! 
Screenshot and example. 
How to run nee to add in wiki. with setup needed. 

How this will help in different scenarios:
 
1. Adding new page. 
2. Modifications in page. 
3. Adding new flavour of the app. 
4. Adding new platform. 
We added different flavour of app and how to test that?


    
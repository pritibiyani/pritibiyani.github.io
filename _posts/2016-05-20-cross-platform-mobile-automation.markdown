---
layout: post
title: Cross Platform Mobile Automation
published: true
category: programming
tags: [automation, mobile]
social_media_share: "Building cross platform mobile automation framework #mobile #automation #crossPlatform"
feature_image: /assets/images/complete_implementation.jpg
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

+ **Locators for each platform**   
 It's just way of specifying for each platform is different., where I see platform as key and locator as it's value. Simply as follows, if in Ruby:
 
     {% highlight ruby %}
        {
       web: "#Food Items:"
       droid: "* id:'FoodItems'"
       ios: "* title:'Food Items'"
     }
     {% endhighlight %}

+ **Different UI interaction**   
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
 
 
+ **Different automation tools**   
 Currently there is no single API which exposes a common API for all these platforms. Although the name seems similar on each of the API, underneath actions are different. This can be solved by defining a module which will do all UI actions and whose responsibility will be defining a common interface for different platform. 
 
 With this design in place, our page objects will be platform agnostic and any change in the corresponding API upgrade will not affect the behavior of page objects. 
      
 <p align="middle">
     <img src="/assets/images/driver_abstraction.png" alt="Same page for different platform">
     <figcaption align="middle"> Driver - All UI actions will be delegated to platform specific driver </figcaption>
 </p>

+ **Different UI Navigation patterns**   
 A classic example of this being Navigation drawer on android, tab bar on ios and menu bar on web. This can be solved by defining abstraction for menu representation and delegating UI actions to common API module. We can have menu as page and menuItems can be a special element type. You can look at the implementation [here](https://github.com/CrossPlatformPageObject/cross-platform-single-page-example/tree/master/app/pages/menu).       

 So even if UI elements are different and UI gestures are different, we can define a similar component as an abstraction which will represent all the platform. 
 For example, 
 
 1. Tab bar layout  
  We can model this in different ways, either we can have each tab as a page and base page will have functionality to navigate to each of the tab or it can be special type of element, where click on each tab will be a transition element.
  
2. Dialog  
 There are different types of dialog: alert, confirmation, prompt etc. If there are standard dialogs and the behavior is consistent, we can define dialog as element, where any user action on that dialog will be different transition. If dialogs are doing more than just being information, then we can model dialog as different page itself.
 
+ **Abstracting wait and transition**

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

**One page for all in action**     
Here we go with one page for all platform, end to end implementation will look like: 
 <p align="middle">
     <img src="/assets/images/complete_implementation.jpg" alt="Same page for different platform">
     <figcaption align="middle"> All glued together!  </figcaption>
 </p>
     
     
**Accommodating change in Functional test**
    
We have solved all the  concerns we had when we started to think about one page for all platforms. Let's see how it's easy to incorporate any change in this approach. In any case, at functional UI layer test, your automation should change only in two of the cases:
 
1. Any change any UI elements. (Element locator change)
2. Any change in the existing flow. (Transition change)
    
_"If we want to accommodate these changes in our current framework, it's a change at single place for all the platforms!"_
   
<br>      
<hr>
1. Github project  
 For demonstration of automation framework, created sample Food app for all platforms, you can find those [here](https://github.com/CrossPlatformPageObject).
 Refer Automation framework for this food app [here](https://github.com/CrossPlatformPageObject/cross-platform-single-page-example).    

2. Talk  
 We have given talk at multiple places, find the talk [here](https://www.youtube.com/watch?v=b1On2xlURcY) and similar [experience summary](http://pritibiyani.github.io/blog/speaking-at-vodqa-banglore) for very first talk.
 
3. Slides  
 I presented at Selenium conference on the very similar topic. Find slides [here](https://speakerdeck.com/pritibiyani/one-page-to-test-them-all-an-automation-framework-for-cross-platform).

    
#####[Aroj](https://www.linkedin.com/pub/aroj-george/b/573/74b) and I paired to build this framework for cross platforms.  


    
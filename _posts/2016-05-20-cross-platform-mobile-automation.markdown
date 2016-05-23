---
layout: post
title: Cross Platform Mobile Automation
published: true
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
     <img src="/assets/images/cross_platform_test_execution.jpeg" alt="Cross Platform automation tests">
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

1. Different Automation Tools  
 Currently there is no single tool which can be used for all platforms.

2. Different UI interaction  
 UI gesture for each platform is different and so does an API varies provided for same ui interaction.

3. Locating UI elements mechanism is different  
 As each platform eco-system is different itself, mechanism for identifying each locator is different.

4. Different UI navigation patterns  
 Each platform recommends some style guide and UI varies from platform to platform.

Let's take an example for this. With help my colleagues, I have developed small app for each platform, a Food app. It lists food items and one can order food for by cash or or by paying in advance. 

If we create page objects for this, flow for ordering food will be: 

<<Diagram will help here. >>

1. Food list page  << add_food_to_card >> 
2. Cart  << checkout >>  
3. User details << take user details >>
4. Choosing form of payment
5. Redirecting    
  
<<slider of images will be good>>  
This si  

2. Change things locator: Introduce abstraction. 
1. Simple page object. 
3. What makes automation cluttered and not stable : Transitions.
4. Navigation pattern | Abstraction | Simple modelling for it. 
5. 

In detail, if you want to have a look at challenge and solution, you can have a look [here](The challenges and solution to each problem, you can view it [here](https://github.com/CrossPlatformPageObject/cross-platform-single-page-example/blob/master/README.md#challenges-in-implementating-single-page-for-different-platforms).
Let's take one example and try to solve the problem.
one example. and how internally things happen 

Use cases: 
1. Adding new page
2. Updating existing one. 

Design aspect:
1. We want to keep things seperate which from things which are goign to change. 
2. Abstractions and oop design
3. Clear responsbiloty driven way. 



Handling wait! 
Screenshot and example. 
How to run nee to add in wiki. with setup needed. 

We added different flavour of app and how to test that?



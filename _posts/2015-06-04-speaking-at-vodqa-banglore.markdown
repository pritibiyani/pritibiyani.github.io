---
layout: post
title: Speaking at vodQA Bangalore!
published: true
categories:
---
[vodQA](https://www.facebook.com/groups/vodqa/) is an event for people who are equally passionate about software testing and continuously strive to be better at it! This time theme was "[Push the Envelope!](http://info.thoughtworks.com/registration-vodqa-bangalore-2015.html)"

[Aroj](https://www.linkedin.com/pub/aroj-george/b/573/74b) and I presented our talk "***One page to test them all***  - _A cross platform mobile automation framework!_"

<p align="middle">
    <img src="/assets/vodqa_bangalore.jpg" alt="vodQA Bangalore"  border="1">
   <figcaption align="right">Created collage from: <a href = "http://www.fotor.com/features/collage.html">Footer.com</a></figcaption>
</p>



**What was our talk about?**

We are working on a project, is a mobile app for iOS, Android and Mobile web. This app is for famous airline in USA.

 1. App is mixture of pure native screens as well as webviews.
 2. Each platform has its own tools for UI automation ([Calabash](https://github.com/calabash/calabash-android) for android, [Calabash Cucumber](https://github.com/calabash/calabash-ios) for ios and [Watir](http://watir.com/) for Mobile web)
 3. Each platform behavior is different. (touch on droid/ios, click on web)
 4. Different UX interaction pattern. (Navigation drawer for droid, tab bar in iOS and Nav bar in mobile web)

 Though above things vary for our app, each screen on different platform exposes similar functionality. In spite of above variations, we wanted to have single Page object for our automation suite, keeping flavour of the famous [Page object pattern](http://martinfowler.com/bliki/PageObject.html), which will enable us to add automation quickly for all, instead of spending equal amount of time for all 3 platforms and we came up with generic framework to test!

 _What we did? How did it save time to add automation for 3 platforms? What is our learning?_ ... and this is what our talk about!

**Role play in presentation**

We were not sure how to present this and still deliver the intent in a proper way! And [Aroj](https://twitter.com/arojp) came up with this idea of role play!

We presented a talk as if we are pairing. While Pairing, we think different approaches, discuss pros and cons of each and finally decide to go with one of the approach! Same we did as part of our presentation!


**Check out our talk here:**

<div class="video">
    <figure>
        <iframe width="640" height="480" src="//www.youtube.com/embed/b1On2xlURcY?rel=0" frameborder="0" allowfullscreen></iframe>
    </figure>
</div>


**Check out our slides here:**

<div>
<object width="425" height="354" id="player">
<param name="movie" value="http://www.authorstream.com/player.swf?fb=0&nb=1&ct=5&ap=0&pl=as&c=dfdfdf&p=2509881_635690261162401250&fi=1" />
<param name="allowFullScreenInteractive" value="true" />
<param name="allowScriptAccess" value="always"/>
<embed src="http://www.authorstream.com/player.swf?fb=0&nb=1&ct=5&ap=0&pl=as&c=dfdfdf&p=2509881_635690261162401250&fi=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowFullScreenInteractive="true" width="425" height="354"></embed>
</object>
</div>







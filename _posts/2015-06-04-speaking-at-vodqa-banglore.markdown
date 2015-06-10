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

 Though above things vary for our app, each screen on different platform exposes similar functionality. There is example provided by [calabash-x-platform](https://github.com/calabash/x-platform-example) and they have suggested to use different page object for each platform, but you can reuse feature file, step definition.

 In spite of above mentioned variations, we wanted to have single page object for our automation suite, keeping flavour of the famous [Page object pattern](http://martinfowler.com/bliki/PageObject.html), which will enable us to add automation quickly for all, instead of spending equal amount of time for all 3 platform!

  In short we wanted to have common feature file, common step definition and common page object as well!

 _What we did? How did it save time to add automation for 3 platforms? What is our learning?_ ... and this is what our talk about!

**Role play in presentation**

We were not sure how to present this and still deliver the intent in a proper way! And [Aroj](https://twitter.com/arojp) came up with this idea of role play!

We presented a talk as if we are pairing. While pairing, we think different approaches, discuss pros and cons of each and finally decide to go with one of the approach! Same we did as part of our presentation!


**Check out our talk here:**

<div class="video">
    <figure>
        <iframe width="730" height="480" src="//www.youtube.com/embed/b1On2xlURcY?rel=0" frameborder="0" allowfullscreen></iframe>
    </figure>
</div>


**Check out our slides here:**

<script async class="speakerdeck-embed" data-id="49370aadf70d401fa016ea09507661bd" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js">
</script>




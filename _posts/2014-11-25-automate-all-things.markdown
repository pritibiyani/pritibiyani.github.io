---
layout: post
title:  "Automate all the things!"
date:   2014-11-25 13:30:04
categories: agile testing automation qa
---

In agile world, there is a theme of [ruthless automation](https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=ruthless automation). But in my opinion, we don't push this principle nearly enough. In my last project, there were quite a few missed opportunities in terms of automation. Let me share my story of how I automated some chores that are otherwise taken for granted, and was thereby able to push the envelope further.

The project I was working on was a rich content website which demanded a complex interactive content with high availability. This marketing site has global presence in the world.

The architecture of the complete project can be divided into two major chunks: Content Creation and Content Delivery.

<p align="middle">
    <img src="/assets/project_overview.png" alt="Automate All Things" width = "400">
    	    <figcaption align="middle"> Project Architecture </figcaption>

</p>

Content creation was done using various tools ([CMS]( http://en.wikipedia.org/wiki/Content_management_system)). This was distributed among different organizations.
To support different formats of contents, we had an adapter layer for data transformation in between.
As being marketing site, content creation was major task and routine work.

Business/content creator wanted data to be previewed before publishing and hence we had preview and live slice in Delivery stack.
With every new feature, to test all these platforms we had different production like environments(SIT, Integration, UAT etc) in place.

To have sample pages, we had sample data set up on some of the environments.



What follows are a few situations that I came across, where I tried to automate some drudgery:

**1. Setting up data, again and again!**

This was one thing I never looked forward to. Every time a new feature was released, I had to set up the test data on multiple environments. Though I could use REST plugins for browser (like POSTMAN), it was difficult to track all that test data for a feature.
 Also, we had provision on each environment to clear the data. With cleaning of data, I needed to set up data again. In addition to this, it was becoming very difficult to upload multiple variations of same data.

I wrote a small [script](http://bit.do/gist_post_data_to_env) which will upload data to specified environment. It solved above mentioned problems with bulk upload and tracking.

<p align="middle">
    <img src="/assets/post_to_diff_env.png" alt="Post to different environment" width = "400">
</p>
<br/>


**2. Different data formats!**

During production support, when something went wrong, business people often wanted some pointers on what could be the issue, and the issues were often data issues. So much so that we even had a team hoodie with tagline <i>'It's a DATA Issue!'</i>.

Typically content creators used to create data using different tools and data formats varied across these tools. They always preferred data in spreadsheets. Getting the data in consumable format for content creators, manually fetching JSON data from the system and formatting the data for Excel was a tedious task. A small script to convert data between formats was all I needed.

<p align = "middle">
        <img src="/assets/content_creator.png" alt="Business/Content Creator" width="300" style="float: left">
	    <img src="/assets/support_people.png" alt="Support People" width="300">
</p>


**3. Debugging with preview and live stacks**

Preview and live stacks played a vital role in content creation. Certain parameters along with date used to drive the the transition from preview to live stack.
	With big launches, huge data creation used to happen and apparently content creators used to face many issues with data being shown on preview stack and not on live stack.

While debugging, to reach a certain conclusion I needed to inspect the JSON data.
Manually going through each parameter within every response was time consuming. I used to miss some of the important publish driven parameters. Also, date format was not readable and I used to convert it using online tools.


<p align="middle">
    <img src="/assets/Preview_Live_Debugging.png" alt="Automate All Things" width = "400" height="300">
    <figcaption align="middle"> Preview Live Content Debugging </figcaption>
</p>

I made a note of repetitive steps and wrote a script for the same. Refer [gist](http://bit.do/gist_extract_publish_driven_parameters) for the script.

These were just some of my experiences. But you get the idea. Don’t you?

<p align="middle">
    <img src="/assets/automation.png" alt ="XKCD" width = "400" height="350">
    <br/>
    An obligatory <a href="http://xkcd.com/1319">XKCD</a>
</p>

Quite a few of us are usually little hesitant to try out these kind of things because we want to quickly finish the task at hand. But in my experience, a little extra time spent on automating the stuff we do over and over, can save a lot of time and effort in the long run.

**To summarize, here are the takeaways:**

1. <u> When you repeat, Think! </u>

    If you are doing same thing over and over again, stop and think "Do I really need to repeat the same steps again?" That could be a good candidate for automation.

2. <u>Don’t try to automate everything at once!</u>

    When you are writing some script, take baby steps. Think, “what is the minimalistic thing I want right away!”. Keep building on top of it whenever tasks get complicated.

3. <u> Be patient! </u>

     You will struggle to find what you need, be patient and keep working till you get it right! Don’t give up, there will be light at the end of the long tunnel. ;)

4. <u> Automate all the things! </u>

    Well, it's fun! You reduce the time you spend on repetitive tasks, speed up things and learn along side! :)

<p align="middle">
    <img src="/assets/automate_all_the_things.png" alt="Automate all the things" width = "400">
</p>


Thanks to [Rahul Kavale](https://twitter.com/yphalcombinator), [Shirish](https://twitter.com/_Garbage_), [Rahul](https://twitter.com/missingfaktor), Bhumika and [Vishnu](https://twitter.com/vishnu_narang) for valuable time and early feedback. :) 









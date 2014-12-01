---
layout: post
title:  "Automate All Things!"
date:   2014-11-25 13:30:04
categories: agile testing
---

<p align="middle">
    <img src="/assets/automate-all-the-things.png" alt="Automate All Things" width = "400">
</p>

In agile world, there is a theme of  <a href="https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=ruthless automation">"ruthless automation"</a>. But in my opinion, we don't push this principle nearly enough. In my last project, there were quite a few missed opportunities in terms of automation. Let me share my story of how I automated some chores that are otherwise taken for granted, and was thereby able to push the envelope further.

Before I start with my experience, here are few things about project:

Project I had worked on was rich content website which demanded a complex interactive content with high availability. This marketing site has global presence in world.

The architecture of the complete project can be divided into two major chunks: Content Creation and Content Delivery.

<p align="middle">
    <img src="/assets/project_overview.png" alt="Automate All Things" width = "400">
</p>

Content creation was done using various tools(CMS)[1]. This was distributed among different organizations.
To support different formats of contents, we had adapter layer in between.
As being marketing site, Content creation was major task and routine work.

Business/Content Creator wanted data to preview before publishing and hence we had Preview and Live stack in Delivery stack.
With every new feature, to test all these platforms we had different production like environments(SIT,Integration,UAT etc) in place.

To have sample pages, we had dummy data set up on some of the environments.

**1. Setting up data, again and again!**

This was the one thing I hated doing. Every time a new feature was released, I had to setup the test data on 'M' environments. Though I could use REST plugins for browser (like POSTMAN), it was difficult to track all that test data for a feature.
 Also, we had provision on each environment to clear the data via pipeline. With cleaning of data, I needed to set up data again!
It was very difficult to upload multiple variations of same data.

I wrote small script which will upload data to specified environment.It solved problem of bulk upload and I was able to track what data is present on which environment.

<p align="middle">
    <img src="/assets/post_to_diff_env.png" alt="Post to different environment" width = "400">
    <figcaption align="middle">'M' Environments, 'N' JSONS </figcaption>
</p>


**2. Different data formats!**

While doing production support, when something goes wrong, business people often wanted some pointers on what data might be wrong. As content creator used to create data in different formats, they used to prefer same format rather than JSON.
  To get the data in consumable format for content creators, manually fetching JSON data from the system and formatting the data for excel was a tedious task and not scalable. To solve this problem, I knew just one answer - Automate! A small script to convert data between formats was all I needed.

<p align = "middle">
        <img src="/assets/content_creator.png" alt="Business/Content Creator" width="300" style="float: left">
	    <img src="/assets/support_people.png" alt="Support People" width="300">
	    <figcaption align="middle"> Content Creator </figcaption>
</p>


**3. Debugging branches**

Preview and Publish stack played a vital role in Content Creation. Certain parameters along with Date used to drive the the transition from Preview to Live stack.
	With big launches, huge data creation used to happen and apparently content creators used to face many issues with data being shown on Preview Stack and not on Live Stack.

While debugging, to reach to certain conclusion I needed to check the state of JSON data.
Manually going through each parameter within every response was time consuming. I used to miss some of the important publish driven parameters. Also, date format was not readable and I used to convert that using online tools.

I realized repetitive steps and wrote script for the same.
These were just some of my experiences. But you get the idea. Don’t you?

Quite a few of us are usually little hesitant to try out these kind of things because we want to quickly finish the task at hand. But in my experiences, a little extra time spent on automating the stuff we do over and over, can save a lot of time and effort in the long run.

**To summarise, here are the take aways:**

1. <u> When you repeat, Think! </u>

    If you are doing same thing over and over again, stop, and think. Do I really need to repeat the same steps again? This might be a good candidate for automation.

2. <u>Don’t try to automate everything at once!</u>

    When you are writing some script, take baby steps. Think, “what is the minimalistic thing I want right away!”. Keep building on top of it whenever tasks get complicated.

3. <u> Be patient! </u>

     You will struggle to find what you need, be patient and keep working till you get it right! Don’t give up, there will be light at the end of the long tunnel. ;)

4. <u> Automate Everything! </u>

    Well, its fun! You reduce the time you spend on repetitive tasks, speed up task and learn along side! :)

<p align="middle">
    An obligatory <a href="http://xkcd.com/1319">XKCD</a>
    <br/>
    <img src="/assets/automation.png" alt ="XKCD">
</p>

[1]: http://en.wikipedia.org/wiki/Content_management_system




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

**1. Setting up data, again and again!**

This was one thing I hated doing.  Each new feature release would mean setting up the test data on every environment with appropriate variations. Though I could easily use REST plugins for browser (like POSTMAN), it was difficult to track all that test data. Bulk upload and variations of the data was almost impossible to keep track of.
After some days of frustration, I spent some time writing a small script to do all this tiring work for me. That was the first time, when I first discovered the joy of automation beyond my project test suite.

<p align="middle">
    <img src="/assets/post_to_diff_env.png" alt="Post to different environment" width = "400">
    <figcaption align="middle">'M' Environments, 'N' JSONS </figcaption>
</p>


**2. Different data formats!**

While doing production support, when something goes wrong, content creators often wanted some pointers on what data might be wrong. Unfortunately, they edited contents in excel, while the system understood only JSON. To get the data in consumable format for content creators, manually fetching JSON data from the system and formatting the data for excel was a tedious task and not scalable. To solve this problem, I knew just one answer - Automate! A small script to convert data between formats was all I needed.


<p align = "middle">
        <img src="/assets/content_creator.png" alt="Business/Content Creator" width="300" style="float: left">
	    <img src="/assets/support_people.png" alt="Support People" width="300">
	    <figcaption align="middle">THINK </figcaption>
</p>


**3. Debugging branches**

The presence of a parameter in the API response decides next debugging steps. Manually going through each parameter within every response was time consuming and after some time, it was getting very difficult to track all the parameters for debugging. Again, a script to automate this debugging came to my rescue.

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



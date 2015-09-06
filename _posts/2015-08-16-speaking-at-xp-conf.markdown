---
layout: post
title: Speaking at XP Conf, Bangalore!
published: false
categories: Conference, Presentation
---

This time occasion was of [XP-conf](http://xpconference.in/) in Bangalore. This was very first time XP-conf was being held in India.

 The purpose for this conference is delivering value from clean code to continuous value delivery, increase awareness about good coding practices from coding design and testing of software development, a platform where novice can learn from experts about XP practices! This platform, which will act as a catalyst for organizations who want to adapt agile methodologies and practices.

 Theme for conference was "Clean Code"! We could grab the opportunity of presenting over here because of our colleague [Shirish Padalkar](https://about.me/shirishpadalkar). He has submitted abstract and as he could not present one, we got chance! :sweat_smile: [Yahya](https://twitter.com/meetykp) and I paired for this talk!

This was two day conference. Our talk was on second day. The day started with stand up, where speakers has given chance for marketing their talk!

<p align="middle">
    <img src="/assets/Xp_conf_1.jpg" alt="vodQA Bangalore"  border="1">
   <figcaption align="right">Created collage from: <a href = "http://www.fotor.com/features/collage.html">Footer.com</a></figcaption>
</p>


 And I think we did pretty good marketing!

 The topic was __Who Will test your tests ?__

 We all know advantage of writing tests and we do write different types of tests at different level. Initially they slow down us, but sooner they give us confidence and help us in faster development, we can take risk of doing major refactoring! If anything goes wrong in our application, we come to know because of test suites failing in our CI. When something goes wrong, some of the team member who must have broken the build, would go and check the failure and fix it.

 This is okay till it's a valid failure! Suddenly one day, out of no clue and no reason your test starts failing! With habit someone would go and check the cause of failure, and it will turn out to be just a random. Obviously, re-running the test would be first solution, if it's timeout then increasing timeout would be another, and then if these don't work, fingers will be pointed to poor agent on which test is running! With this, no one will trust failing tests and test suite will start giving us hard time instead of giving us confidence!

  and this was our topic! We talked about:

1.  What are these flaky tests? a.k.a Non deterministic tests!

2.  What is their nature? How they are harmful in any project?

3.  What are possible reasons of being your build flaky?

4.  How can we mitigate this randomness?

5.  Some strategies to resolve this flakiness if your team is already plagued with the disease of "flakiness".

6.  Something to think about how we can avoid this at first place! Some techniques like [Poka Yoke](http://techie-notebook.blogspot.com/2012/07/poka-yoke-applying-mistake-proofing-to.html) How we can write such a beautiful code, which will not allow our build to be flaky! :relaxed:

**Check out our slides here:**
<script async class="speakerdeck-embed" data-id="4d03d3254e374d25b877ff236b1b00b4" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js">
</script>

<br/>
The talk went pretty well. We were waiting for feedback and when we were just about to leave, organizers asked crowd 'which talk you liked the most?' and it was ours! The best feedback is people's choice award! :innocent:

<br/>

<p align="middle">
    <img src="/assets/Xp_conf_2.jpg" alt="vodQA Bangalore"  border="1">
   <figcaption align="right">Created collage from: <a href = "http://www.fotor.com/features/collage.html">Footer.com</a></figcaption>
</p>












---
layout: post
title: Speaking at XP Conf, Bangalore!
published: true
social_media_share: "Find out about talk given, Who will test your tests? #test @meetkyp"
tags: Conference, Presentation
---

This time occasion was of [XP-conf](http://xpconference.in/) in Bangalore. This was very first time XP-conf was being held in India.

<h3> What's conference about? </h3>
 The purpose for this conference is delivering value from clean code to continuous value delivery, increase awareness about good coding practices from coding design and testing of software development, a platform where novice can learn from experts about XP practices! This platform, which will act as a catalyst for organizations who want to adapt agile methodologies and practices.

 Theme for conference was "Clean Code"! We could grab the opportunity of presenting over here because of our colleague [Shirish Padalkar](https://about.me/shirishpadalkar). [Yahya](https://twitter.com/meetykp) and I paired for this talk.

This was two day conference. Our talk was on second day. The day started with stand up, where speakers has given chance for marketing their talk.

<p align="middle">
    <img src="/assets/Xp_conf_1.jpg" alt="vodQA Bangalore"  border="1">
   <figcaption align="right">Created collage from: <a href = "http://www.fotor.com/features/collage.html">Footer.com</a></figcaption>
</p>


 And I think we did pretty good marketing!

<h3> D Day! </h3>

 We all know advantage of writing tests and we do write different types of tests at different level. Initially they slow down us, but sooner they give us confidence and help us in faster development, we can take risk of doing major refactoring! If anything goes wrong in our application, we come to know because of test suites failing in our CI. When something goes wrong, some of the team member who must have broken the build, would go and check the failure and fix it.

 This is okay till it's a valid failure! Suddenly one day, out of no clue and no reason your test starts failing! With habit someone would go and check the cause of failure, and it will turn out to be just a random. Obviously, re-running the test would be first solution, if it's timeout then increasing timeout would be another, and then if these don't work, fingers will be pointed to poor agent on which test is running! With this, no one will trust failing tests and test suite will start giving us hard time instead of giving us confidence!

  and this was our topic, **Who will test your tests?** We talked about:

1.  **What are these flaky tests? a.k.a [Non deterministic tests!](http://martinfowler.com/articles/nonDeterminism.html)**

    The tests which sometimes pass and sometimes fail. Their failure seems to be random and they act like a boy who cried for a wolf!

2.  **How these tests are harmful in a project?**

    When every run of the test suite gives you the possibility to yield a different result, the test is almost completely worthless. When the suite shows you a bug, you have a high chance that you cannot reproduce it, and when you try to fix the bug, you cannot prove that your fix works. Indeed we end up wasting lot of time!
    These tests are more harmful in nature as they pollute the team culture. Earlier when test would have failed, someone would go and check for the failure, but with random nature, everyone stop believing RED and GREEN builds! This is also known as [Broken Window theory](https://en.wikipedia.org/wiki/Broken_windows_theory).

3.  **What are reasons for being your build flaky?**

    At high level flakiness reasons are:

    - Infrastructure problem (Agent issues / Input-Output)

    - Badly written production code (Synchronization, Concurrency, Asynchronous waiting, Improper handling of resources)

      If you can't write test, then your code design is wrong. On top of that you still keep on adding tests ignoring the fact how hard it is, it is going to give you hard time!
        Bad design is the smell, if you don't fix it, it is on the verge of getting this flakiness disease!

    - Poorly written Test code (Along with reasons similar to production code; External system calls in test, Time dependent tests, Test order dependency)

     We explained each cause with psuedo code and care to be taken for them. (<a href="#slides">Refer slides.</a>)

4.  **How can we mitigate this randomness?**

    Here for every problem has one hidden solution, _write proper code!_ Handle each and every resource in code properly. Treat your test code as production code itself.

5.  **What should we do, we already have a "flakiness"?**

    Some strategies to resolve this flakiness if your team is already plagued with the disease of "flakiness".

    You can attack from all dimensions simultaneously. The very first solution would be changing mindset, "_Stop calling your build flaky!_" Try to fix infrastructure issues and at the same time quarantine the plagued tests and keep your test suite healthy. Have some strategy to fix these quarantined tests.

6.  **And of course saying, "_Prevention is better than cure!_ "**

    Something to think about, how we can avoid this at first place! Some techniques like [Poka Yoke](http://techie-notebook.blogspot.com/2012/07/poka-yoke-applying-mistake-proofing-to.html). How we can write such a beautiful code, which will not allow our build to be flaky! :relaxed:

    For example, may be you are dealing with some resource in your application and your static code analysis will warn you about handling code improperly.
    or it will not at all compile in case you have used Time.now in test code. In short, things which will prevent you from causing the randomness!

<b id="slides">Check out our slides here :</b>
<script async class="speakerdeck-embed" data-id="4d03d3254e374d25b877ff236b1b00b4" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js">
</script>

<br/>
<h3> Some <i>aha</i> moment! </h3>

* The talk went pretty well. We were waiting for feedback and when we were just about to leave, organizers asked crowd '_which talk you liked the most?_' and it was ours! The best feedback is **people's choice** award! :innocent:

* As soon as Yahya finished with first slide, people started clapping! It was such an impact! This was an unexpected reaction :innocent:

<br/>

<p align="middle">
    <img src="/assets/Xp_conf_2.jpg" alt="vodQA Bangalore"  border="1">
   <figcaption align="right">Created collage from: <a href = "http://www.fotor.com/features/collage.html">Footer.com</a></figcaption>
</p>



<h3> and after all this ... </h3>
Thanks a lot [Shirish Padalkar](https://about.me/shirishpadalkar) for opening up opportunity to us, giving us feedback time to time and [Yahya](https://twitter.com/meetykp), surely I learnt a lot while pairing !

 And A big thank you to XP conference team for giving us chance instead of our colleague and all the people who attended this talk!

#####Thanks to [Aroj](https://www.linkedin.com/pub/aroj-george/b/573/74b), who gave me idea to write about this experience.











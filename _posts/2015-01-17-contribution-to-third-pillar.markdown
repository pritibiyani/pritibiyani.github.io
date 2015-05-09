---
layout: post
title: contribution to third pillar!
published: true
tags: agile testing automation qa build_pipelines
categories: work
---

This is something very old, but still this will stand as my first official project in ThoughtWorks.

Why official?

1. We did pair!
2. We attended calls! Here it helped me to understand how open source project works!
3. I understood how it's important to understand the domain, specially when it's banking!
4. Refactoring!

Well, This was [Mifos X](http://www.openmf.org/) project. This project was being run in ThoughtWorks under [HSP program]( http://www.thoughtworks.com/insights/blog/humanitarian-software-program).
Little context about Mifos X, it is building software to grow microfinance. MifosX aims to build a Micro-Finance Platform for organizations which are providing Micro-Credit / Micro-Finance to the poor -- so that these organizations can manage and run their operations in a cheap, cost-effective and efficient manner.
The platform is basically a Javabased server which contains the business rules, domain logic, talks to databases/backend systems and exposes all Mifos X functionality over REST/HTTP/JSON.

This project domain was complex, many rules and calculations! I was not able to imagine being open source(indeed distributed) this project did not had any tests! They wanted ThoughtWorks to help in:

 1. Deciding testing strategy
 2. and the next step of course, make them run at common place to identify who broke the functionality(setting up build radiator).

**How we tried to solve addressed problems**

Adding testing support was a big challenge in itself! We had 3 options in front of us, as in, at what layer of [test pyramid](http://martinfowler.com/bliki/TestPyramid.html) tests should be written:

1. Writing unit tests
2. Integration tests
3. High level functional tests

Writing Unit test for a large, existing codebase would require a major refactoring, which might not be justified given the resources and net gain.
For functional tests, we sometimes need to rely on unit level assertions, which meant we couldn’t move ahead with this option either.
Therefore we decided to go with integration tests. We identified some scenarios, for which we can write tests, which will cover breadth of the application.

`Code snippet for one example!`

**Implementing Integration Tests**

We started writing simple tests to cover most basic of user flows. While we wrote these tests, we were constantly referring [this](https://demo.openmf.org/api-docs/apiLive.htm) API documentation. Our initial test suite was all in one file, and was written using a library named [restassured](https://github.com/jayway/restassured). Soon we realized we were duplicating code and patterns. It was time to refactor! While we continued refactoring and covering other areas of application, we applied principles of good object orientation, and came up with what we found to be a very neat set of designs. Our mentor, [Gurpreet Luthra](https://www.linkedin.com/in/gurpreetluthra), was very happy with the [outcome](https://github.com/openMF/mifosx/tree/develop/mifosng-provider/src/integrationTest/java/org/mifosplatform/integrationtests). Later, we discovered that we had reinvented some of the established software design patterns, such as:

1. [Fluent interfaces](http://martinfowler.com/bliki/FluentInterface.html)
2. [Expression Builder](http://martinfowler.com/bliki/ExpressionBuilder.html)
3. Test Data Builder

(re)inventing design patterns is different than you learning them beforehand and applying them! I quite enjoyed this experience.

**Who broke the build**

The next step of course was to have this tests running in [CI](https://github.com/openMF/mifosx#build-status). For each pull request set of Integration test will run, that will give feedback to whoever has sent pull request, that he/she have not broken the build.

**What are other things**

* This project was selected for hackathon at [GHC](http://archivecomputer.financialexpress.com/sections/news/2065-grace-hopper-india-hosts-hackathon-for-women) conference.
We did planning for this event, where we divided stories into small, medium and large as per complexity. The response was great! Not many were able to contribute actually but they became familiar with technology, domain and how this distributed project works! We got one or two pull requests as well.

* It feels great when your small contribution can help large project and they acknowledge this! one of the active member of  Mifos X, [blogged](http://mifos.org/blog/thoughtworks-hsp-team-gives-mifos-x-community-solid-footing-grow/) about us.

* On top of all this, being [contributor](https://github.com/openMF/mifosx/graphs/contributors) in itself is a rewarding feeling! It's good to see, that CI and integration tests still helping in project.


I am fortunate enough to be part of this. Looking at solution we came up with, we found the problem negligible which was complex earlier! I can take away many things from this project. I learnt how to decide testing strategy, refactoring, setting up pipelines, and how distributed project works!

I loved this journey where we addressed small-small problems with baby steps and came up with some solution!
















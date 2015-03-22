---
layout: post
title: contribution to third pillar
published: true
categories: testing start
---
What is HSP:
    http://www.thoughtworks.com/insights/blog/humanitarian-software-program
What is MofosX
    http://www.openmf.org/
What they wanted us to do
    Testing Strategy
What I learnt
    How should one go for deciding testing strategy
    How I learnt some bits of refactoring and other things
    Focus here
Edward blogged about us
    http://mifos.org/blog/thoughtworks-hsp-team-gives-mifos-x-community-solid-footing-grow/
Conducting Hackathon at GHC
    http://archivecomputer.financialexpress.com/sections/news/2065-grace-hopper-india-hosts-hackathon-for-women
    http://www.thoughtworks.com/insights/blog/planning-grace-hopper-india-hackathon
Being contributor was rewarding in itself
    https://github.com/pritibiyani/mifosx/graphs/contributors
https://github.com/openMF/mifosx/tree/master/mifosng-provider/src/integrationTest/java/org/mifosplatform/integrationtests/common/loans

http://martinfowler.com/bliki/FluentInterface.html




1. Importance of Pairing and code Review
2. Refactoring
3. Deciding Test Strategy
4. Checking contracts / API working fine or not
5. Lot of computations done in around that and it was



1. What I learnt
2. How it was helpful for me
3. First real use to some desgin patterns ... We learnt
4. How we went for deciding about test startegy for them



As soon as I joined ThoughtWorks, I got chance to work on open source project under [HSP Program](http://www.thoughtworks.com/insights/blog/humanitarian-software-program)
I was working on [MifosX] ( http://www.openmf.org/).

**What is MifosX**

MifosX is building software to grow microfinance. MifosX aims to build a Micro-Finance Platform for organizations which are providing Micro-Credit / Micro-Finance to the poor -- so that these organizations can manage and run their operations in a cheap, cost-effective and efficient manner.
The platform is basically a Javabased server which contains the business rules, domain logic, talks to databases/backend systems and exposes all MifosX functionality over REST/HTTP/JSON.

**What was they looking for**

There was lot of active development happening on the codebase. But to there was no way to check Project Health status. Project was lacking with tests and continuous Integration. We figured out major two problem areas:
1. Having some test coverage.
2. Each build status

**How we went and tried to solve addressed problems**

1. Test Coverage
We had 3 options in front of us us, as in, at what layer of [test pyramid] (http://martinfowler.com/bliki/TestPyramid.html) tests should be written:
1. Writing unit tests
2. Integration tests
3. High level functional tests
      Writing unit tests for a large, existing codebase would require a major refactoring, which might not be justified given the resources and net gain.
      For functional tests, we sometimes need to rely on unit level assertions, which meant we couldn’t move ahead with this option either.
      Therefore we decided to go with integration tests.

We started writing simple tests to cover most basic of user flows. While we wrote these tests, we were constantly referring [this](https://demo.openmf.org/apidocs/apiLive.htm) API documentation. Our initial test suite was all in one file, and was written using a library named [restassured”](https://github.com/jayway/restassured) Soon we realized we were duplicating code and patterns. It was time to refactor! While we continued refactoring and covering other areas of application, we applied principles of good object orientation, and came up with what we found to be a very neat set of designs. Our mentor, [Gurpreet Luthra](https://www.linkedin.com/in/gurpreetluthra), was very happy with the outcome. Later, we discovered that we had reinvented some of the established software design patterns, such as:
1. Fluent interfaces
2. Expression Builder [5]
3. Test Data Builder
You (re)inventing design patterns is different than you learning them beforehand and applying them! We quite enjoyed the experience.
Finally, the work we did helped this [open source project](https://github.com/pritibiyani/mifosx/graphs/contributors), which was, in itself a rewarding feeling!







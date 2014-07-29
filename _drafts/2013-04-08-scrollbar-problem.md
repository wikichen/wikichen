---
layout: post
title: "The Scrollbar Problem"
comments: true
---

In OS X 10.7 Lion, a UI feature was introduced to much controversy whereby the scrollbars you usually see on windows would only appear when a scrolling action is detected. There was a lot of backlash among designers who touted scrollbars as an archetype of user interface design&mdash;and understandably so&mdash;in that two important factors of great UI, affordance (a scrollbar means I can scroll!) and feedback (the scrollbar's position indicates progress!), were clearly addressed.

<img alt="Disappearing Scrollbar" src="/public/images/posts/scrollbar-problem-01.png">

My feelings toward this inconvenient albeit trivial change were much less impassioned; years of computer usage have trained me to scroll whenever I expected more content, and the feedback mechanism of an "end of window" scroll (where the screen sort of jiggles back) worked well enough that a scrollbar wasn't really all that necessary. Nonetheless, there was an option to force the scrollbars to always appear, and I indulged my inner creature of habit, much like the enraged designers have immediately done upon its discovery.

<img alt="Scrollbar Option in System Preferences Panel" src="/public/images/posts/scrollbar-problem-02.png">

Then the most interesting problem presented itself the other day when I was tending to this blog's design. As I was testing the header across different pages, I noticed that the header would shift a few pixels on some pages, and the browser width would literally shrink on some pages and not others. Still completely oblivious, I took to StackOverflow to ask my dumb question. They were nice enough to overlook my utter lack of awareness and competence to point out that the scrollbar appearing on pages longer than the browser window's height could be the source of the inconsistency. More importantly, it occurred to me that this wouldn't have happened if my scrollbars were turned off.

<img alt="Animation Showing Scrollbar Behavior with Always Option" src="/public/images/posts/scrollbar-problem-03.gif" style="float: left; width:50%;">

<img alt="Animation Showing Scrollbar Behavior with Hidden Option" src="/public/images/posts/scrollbar-problem-04.gif" style="width:50%;">

<br>

Perhaps it was a coincidence or a lesson in designing for edge cases, but this discovery opened my mind to the possibilities and intricacies of design for software and interfaces, and how established practices in the field may not be all they seem. In retrospect, it does make sense that scrollbars are hidden from view when inactive, particularly because we're predisposed to scroll already as mobile devices increasingly take over our daily context for computing.

In that sense, I could see why Lion drew so much inspiration from its iOS sibling&mdash;the lessons Apple learned from mobile development should aptly be used as a guiding lens to reexamine and reevaluate what it means for people to interact with computers, and vice versa. And all this from an unassuming scrollbar mostly hidden from view.
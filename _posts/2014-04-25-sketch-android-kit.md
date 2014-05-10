---
title: "The Android UI Kit for Sketch"
date: "2014-04-25 16:08:31 -0700"

layout: post
category: linking

image_url: /posts/2014/04/sketch-android-kit-overview.png
---

<figure>
  <img src="{{ site.cdn_url }}{{ page.image_url }}" alt="Sketch Android Kit Version 0.1.0">
  <figcaption>Version 0.1.0 of Sketch Android Kit launched on Tuesday.</figcaption>
</figure>

On April 22nd, I launched [an Android GUI template][kit] for [Sketch][sketch] on Twitter to little fanfare. In the days that followed, it was picked up by nearly every design resource site I follow and the reception has been tremendous. Clearly, it was something fellow designers wanted. What is interesting to note is that the project is nowhere close to being done (I mean, it says so in the description and the first release is a big fat `v0.1.0`). It was---and still remains---an unfinished product by design.

## Seizing an Opportunity

As a former Android developer, I've long lamented the state of design tools and resources for Android, which is sorely lacking especially compared to its iOS counterpart. While the [official Android Developers site](https://developer.android.com/design/index.html) offers an extensive design overview for the platform, not much has been done amongst and for the Android community in terms of additional resources. The [official UI stencil kit][official] is a PSD that is neither easy to use nor maintained properly.

Sketch is one of the best things to have happened to UI design, and its latest update offers an unprecedented ease of use that has drastically improved my workflow. As a designer making the jump back into the Android ecosystem, I found that existing Android resources for Sketch are frankly subpar and uninspired.

Those who design for iOS know of [Teehan + Lax's iOS UI kits][teehanlax], which have become the de fact template for mocking up iOS apps. There's nothing like that for Android, so my opportunistic instincts kicked in. Ultimately it's my hope that this document will help [jumpstart serious interest in designing for Android](http://www.cennydd.co.uk/2014/why-dont-designers-take-android-seriously).

## A Learning Exercise

The project started out as a learning exercise for Sketch 3, which introduced a myriad of new features like Symbols that made creating and manipulating UI elements and layouts seamless. Building an Android UI kit from scratch seemed at the time like a good excuse to explore and master the feature set as a weekend project.

And explore I did.

Using screenshots from my Nexus 5 and the Photoshop stencil kit on Android's developer site, I recreated the fundamental building blocks of the Android GUI down to the pixel. The exercise taught me more about Android's user interface than I thought I knew---the attention to detail for some components like the subtle gradient of the keyboard background (and the lack thereof in others), a misplaced preference for bevel and emboss effects, the utter uselessness of including a dark and a light theme when the former has not seen the light of day except in the Settings app.

It's evident that in an effort to proliferate the OS, the visual identity of Android has endured neglect and is only now showing signs of recovery and improvement in recent versions, with its fair share of baggage and scars from its past. For example, buttons are still included in the theme as their previous incarnations---a differentiated background and drop shadow and bevel and emboss effects and all---but the official styleguide skews the Apple way by suggesting that backgrounds are *usually unnecessary* for both icon and text buttons.

I won't even get into the inconsistencies between Android's system apps and their own design guidelines. The point is that creating a comprehensive, up-to-date Android UI template with an opinionated filter for Google's own visual inconsistencies proved more lofty than could fit the scope of a weekend endeavor.

## Shipped is Better than Perfect

After working on the template on and off for about three days, I decided to package it up and release it into the wild. It was by no means perfect or complete, but it had enough of the basic components to make mocking up an Android app no longer an arduous task. I also didn't want to spend a substantial amount of time creating something for which I wasn't absolutely certain there was demand, a lesson I took to heart during my time at Y Combinator.  

My reason for releasing a design resource on GitHub is two-fold:

1. I'm comfortable with a version control workflow, and GitHub feels natural for sharing open source work, which was my intention for the template from the beginning.
1. It makes a lot of sense for a work-in-progress project (even one not dealing in code) to be tracked and incrementally released on a public repository; it's a shared resource that can be made better by feedback and collaboration.

As I [remarked on Designer News][dn], my goal is to make this the de facto template for Android using an approach that, incidentally, matches Android's own philosophy: building it out iteratively in the open. (Also there's a small function of laziness and fuck-it-I'll-just-ship-it guilt but let's all just gloss over that.)

## The Aftermath and Beyond

<figure>
  <img src="{{ site.cdn_url }}/posts/2014/04/sketch-android-kit-traffic.png" alt="Sketch Android Kit GitHub Traffic">
  <figcaption>Traffic stats on the GitHub repository.</figcaption>
</figure>

Novelty aside, it's really encouraging to see that I actually *made something people want* and to see so much momentum behind Sketch. It's opened up UI design to me in a way I could've never imagined. In the process of converting the Android UI to Sketch, I was even forced to learn Photoshop, which was quite the exercise in agony and, as others have similarly likened the process, "using a chainsaw to cut paper when all you need is a pair of scissors."

As for the UI kit, I've already set up a tight release schedule, so keep checking GitHub or come lend a hand to make designing for Android a better experience.

Thanks to everyone who's shared the resource, and a big shoutout to the following for the plug. (I get to humblebrag, right?)

<blockquote class="twitter-tweet" data-cards="hidden" data-partner="tweetdeck"><p>Android UI Kit - <a href="https://t.co/eca82lXgrL">https://t.co/eca82lXgrL</a></p>&mdash; Sketch (@sketchapp) <a href="https://twitter.com/sketchapp/statuses/459031835352514560">April 23, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-cards="hidden" data-partner="tweetdeck"><p>Android UI Kit for Sketch: <a href="https://t.co/qTC4ZZnt8D">https://t.co/qTC4ZZnt8D</a></p>&mdash; Meng To (@MengTo) <a href="https://twitter.com/MengTo/statuses/459030523210264576">April 23, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-cards="hidden" lang="en"><p>The Android GUI template for Sketch <a href="http://t.co/2SFAeQA9Hr">http://t.co/2SFAeQA9Hr</a></p>&mdash; Hey, designer! (@HeyDesigner) <a href="https://twitter.com/HeyDesigner/statuses/459657792190967809">April 25, 2014</a></blockquote>

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p>Sketch Android Kit <a href="http://t.co/JOIuEja2iQ">http://t.co/JOIuEja2iQ</a></p>&mdash; Sidebar (@SidebarIO) <a href="https://twitter.com/SidebarIO/statuses/459557485704404992">April 25, 2014</a></blockquote>

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

You can [check out the project here][kit].

[kit]: https://github.com/wikichen/sketch-android-kit
[sketch]: http://bohemiancoding.com/sketch/
[teehanlax]: http://www.teehanlax.com/tools/
[official]: https://developer.android.com/design/downloads/index.html
[dn]: https://news.layervault.com/stories/21109-sketch-3-android-ui-kit

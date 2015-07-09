---
layout: project
title: When data-driven design goes wrong
head: |
  <meta name="robots" content="noindex">
cover: /work/z/data-cover.png
zumper: true
---

<div class="proj-cover" style="background-image:url('{{ site.cdn_url }}{{ page.cover }}')"></div>

You win some, you lose some. Here are some of the lessons learned using and, perhaps over-relying on, a data-centric approach to designing for mobile and suggestions for improvement.

<hr>

Around the same time we introduced some Material Design elements in our Android app, we wondered if it would be helpful to users to have an onboarding process to show them how filters and alerts worked, especially with the introduction of the Floating Action Button. Looking at our analytics, we noticed that people would bounce from the map page without even interacting with the rest of the app.

{::nomarkdown}
<img src="{{ site.cdn_url }}/work/z/data-1.png">
{:/}  

Our hypothesis is that a better informed user would have longer engagement with our product, leading to better metrics. We wanted to see if introducing onboarding would increase session length and the number of alerts created, which tend to bring users back to the app.

{::nomarkdown}
<img src="{{ site.cdn_url }}/work/z/data-2.png">
{:/}  

I spent a considerable amount of time tweaking every step of the onboarding flow so each screen would contain just the right amount of information and interaction. In the end, all the work I did with the mobile devs actually made things worse: dropoff rate increased, and people sent fewer messages and created fewer alerts. 

In hindsight, we should've done a bit more qualitative testing to figure out exactly why users were dropping off---it might not have been something we could've solved, certainly not with a hardly rationalized onboarding barrier.

## Other Mobile Work

Here are some other parts of the mobile apps I worked on that fared better than the ill-fated onboarding flow.

{::nomarkdown}
<img src="{{ site.cdn_url }}/work/z/data-3.png">
{:/}  

I helped design our entire Apply product on mobile, so users can fill out rental applications and rental reports on the go. The billing flow was particularly tricky, because agents can charge different prices for different documents requested.

{::nomarkdown}
<img src="{{ site.cdn_url }}/work/z/data-4.png">
{:/}  

For some godforsaken reason the first version of the apps used modals to send messages. I redesigned the experience so it befits a mobile experience, with dedicated full screen views. The number of messages sent has since climbed over 20% just a week after the new flow.

{::nomarkdown}
<img src="{{ site.cdn_url }}/work/z/data-5.png">
{:/}  

Users have always demanded a more advanced set of filters for searching apartments, and we finally got around to building them. The filters UI components also got some much needed polish in terms of look and feel.

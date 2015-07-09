---
layout: project
title: Ushering Zumper.com into the mobile era
head: |
  <meta name="robots" content="noindex">
style: |
  .flair { color: #ebdb7b; }
cover: /work/z/responsive-cover.png
zumper: true
---

<div class="proj-cover" style="background-image:url('{{ site.cdn_url }}{{ page.cover }}')"></div>

One of my first projects at Zumper was designing and building a mobile friendly version of the site.

Users who attempted to load our website on mobile would be redirected to a landing page to download our native apps, where bounce rate was understandably a staggering 95%. We were giving up a lot of a lot of valuable traffic in a day and age when most people access the web through their phones.

The project served as my onboarding to the role and responsibilities of being the sole designer at Zumper. It took less than three weeks from conception and design to implementation, the blunt of which I undertook with some JavaScript help on the interaction side from Russell.

---

Since we weren't redesigning the website to be responsive from scratch, we focused on the two main pages to which traffic was driven: listing feed pages and the listing pages themselves. I started by picking and ranking the sections most pertinent to a mobile experience.

{::nomarkdown}
<img src="{{ site.cdn_url }}/work/z/responsive-1.png">
{:/}  

{::nomarkdown}
<img src="{{ site.cdn_url }}/work/z/responsive-2.png">
{:/}  

We went through various iterations of the mobile listing page, hiding sections on desktop that weren't necessary. You can play with an early prototype of the final mock below:

<iframe width="456" height="940" src="//invis.io/943IMD9QA" frameborder="0" allowfullscreen></iframe>

After the basic interaction with the footer bar was nailed down, I quickly jumped into code and built a static version of the listing page, and with some guidance, ported it over to our Django codebase.

The listing feed page was a more direct process, since we already built out the inline forms for messaging. We simply toggled the form inline when one clicks on the message button on the feed; it wasn't the most elegant solution, but it worked well enough on mobile and was a much better option than using the desktop modal.

{::nomarkdown}
<img src="{{ site.cdn_url }}/work/z/responsive-3.gif" width="420">
{:/}  

In an ideal world, I would have all the time and resources to redesign a fully responsive site from scratch, but this exercise in hacking together a pseudo-responsive site was a good lesson in designing with constraints.

In focusing on the few pages that would make the most impact, we were able to execute and learn quickly, while capitalizing on a formerly unreachable segment of our users. Mobile web traffic now constitutes almost half of our web traffic and a significant portion of our leads volume. At the end of the day, design should solve pain points for both users and the company; in that aspect this first project accomplished both.

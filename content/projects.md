# Projects

## TechAssist

![[TechAssist Demo](https://youtu.be/lA1jKo--nU8)](img/techassist.png)

Between 2016-2020 I worked phone support for ATC Communications, a rural telecommunications company. Over the course of that time I developed a webapp to help myself (and the other members of the support team) help customers faster.

This program was all about automation and communication between systems. It had several functions, my favorite being the customer lookup that pulls data from 8 different systems, combining relevant data into a super-helpful dashboard. It also had a database of our equipment, ran batch jobs to apply billing changes to our equipment and monitored our network for for poor connections.

I used Flask for the backend and, rather than picking a frontend framework, coded raw HTML, CSS & JS (with some limited help from Jinja templates). Doing things this way really helped me understand web technologies better and I've found myself avoiding frontend frameworks in general due to how much can be done with contemporary CSS & JS features.

[](img/ChaseBox.html)

## Text Adventure

<!-- TODO -->

<text-adventure.spideyclick.net>

## ChaseBox

![](img/webgl.svg)

![ChaseBox](img/chasebox.png)

ChaseBox is a simple 2D game I'm building in an attempt to learn WebGL.

I've written simple physics, shaders and event handlers. It's not much right now, but I love it. Plus my co-workers found it slightly addictive as the speed ramps up over time!

My biggest issue with this is that the physics are framerate-dependant. However, I am in progress of implementing the ideas layed out in [Gaffer On Games | Fix Your Timestep!](https://web.archive.org/web/20190403012130/https://gafferongames.com/post/fix_your_timestep/)

I am also working on a 3D First Person environment
[here](img/3D.html)

[](https://gitlab.com/spideyclick/tabletop-rpg-creator/)

## tRPG

![](img/flask.svg)

![Tabletop RPG Runner](img/trpg.png)

Ever since I was introduced to the world of D&D I've thought some aspects could be made less painful using a computer.

While I'm already a fan of [Orcpub 2](https://orcpub2.com/) and [Roll 20](https://roll20.net/), I wanted to build something that was system-agnostic and that I could easily visualize using JSON.

The idea of objects containing objects with attributes and rules is just absolutely fascinating to me, and I'd love to get to the point where you could just import rules for 5e or any other system just by uploading a JSON file.

For now, it's just a fun project I play around with from time to time.

[](https://github.com/spideyclick/Lynx-Program-Downloader)


## lynx-program-downloader

At my very first IT job, we needed a way to automatically update our software downloads. Things like CCleaner, MalwareBytes, Defraggler, etc.

This program does just that using the scripting capabilities in the
[Lynx terminal web browser](http://lynx.browser.org/).
It goes through a list of programs in different categories and downloads
each, one at a time, from sources such as majorgeeks.com or
filehippo.com, although it can be made to work with just about any site.

This is the first program I ever made publicly available on GitHub. I was able to get it reviewed by a couple programmers I knew at the time and I was so grateful for the recommendations they gave me!


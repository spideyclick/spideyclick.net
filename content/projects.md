
## TechAssist

[](https://youtu.be/lA1jKo--nU8)
![](img/flask.svg)
![](img/mysql.svg)

![atcjet.net](img/techassist.png)

This program is all about automation and communication between systems. It has several functions, my favorite being the customer lookup that pulls data from 8 different servers as needed, combining relevant data into a super-helpful dashboard.

It also has a database of our current equipment, regularly exports a list of our entire customer base to another system tool and watches for poor connections on our network.

TechAssist is a tool I started working on during my first week on the job at ATC Communications. Immediately after I started working there, I started seeing repetitive processes that could be sped up with some scripting.

That got me started working on a Python + QT program that ran in the background on my PC. But problems came up when others started to need the functionality I had with this program. Deployment became a major headache, with some computers needing specific versions of PyQT, having to update each PC manually, etc.

So, despite my love for QT, I recognized it was not the best tool for the job and I changed my process. I'd heard about DJango, did some research, and decided Flask was the best fit. I created a virtual server, spun up CentOS 7, I installed Flask and all my libraries on that one machine, and now everybody can access TechAssist through their browser, no installations required!

[](https://web.archive.org/web/20200501012002/https://atcjet.net/)

[](img/ChaseBox.html)

## ChaseBox

![](img/webgl.svg)

![ChaseBox](img/chasebox.png)

ChaseBox is a simple 2D game I'm building in an attempt to learn WebGL.

I've written simple physics, shaders and event handlers. It's not much right now, but I love it. Plus my co-workers found it slightly addictive as the speed ramps up over time!

My biggest issue with this is that the physics are framerate-dependant. However, I am in progress of implementing the ideas layed out in [Gaffer On Games | Fix Your Timestep!](https://web.archive.org/web/20190403012130/https://gafferongames.com/post/fix_your_timestep/)

I am also working on a 3D First Person environment
[here](img/3D.html)

## Qcheck

Qcheck is a Python/Bash script that analyzes logs from our [Communigate Pro Email Server](https://www.communigate.com/) and identifies if an account is hacked using IP geolocation data and analysis of recently sent messages.

Basically, it says: "If you are not from America and you have sent more than 10 messages in a short period of time, you are a hacker and you don't get to log in anymore and I'm emailing everybody in Tech Support to investigate."

This was created to help maintain a system that we wanted to replace years ago. While it's not the best solution, it immediately started to help the problems we were having with brute-force password hacks on accounts with terrible passwords.

The real lesson to be learned here is: don't use a password less than 8 characters, especially if it's just numbers. Please, just don't.

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


<style>
@media only screen and (min-width: 768px) {
	figure[tabindex="0"] img {
		cursor: pointer;
	}
	figure[tabindex="0"]:focus {
		overflow: visible;
	}
	figure[tabindex="0"]:focus img {
		max-width: 90vw;
		max-height: 90vh;
		position: fixed;
		left: 5vw;
		top: 5vh;
	}
}
</style>
# Projects

## TechAssist

![[TechAssist Demo](https://youtu.be/lA1jKo--nU8)](img/techassist.png)

Between 2016-2020 I worked phone support for ATC Communications, a rural telecommunications company. Over the course of that time I developed a webapp to help myself (and the other members of the support team) help customers faster.

This program was all about automation and communication between systems. It had several functions, my favorite being the customer lookup that pulls data from 8 different systems, combining relevant data into a super-helpful dashboard. It also had a database of our equipment, ran batch jobs to apply billing changes to our equipment and monitored our network for for poor connections.

I used Flask for the backend and, rather than picking a frontend framework, coded raw HTML, CSS & JS (with some limited help from Jinja templates). Doing things this way really helped me understand web technologies better and I've found myself avoiding frontend frameworks in general due to how much can be done with contemporary CSS & JS features.

[](img/ChaseBox.html)

## Text Adventure

This was a small proof-of-concept I built using Rust and the [Dioxus](https://dioxuslabs.com/) framework. It was my first real foray into writing rust and I was able to get it [mentioned on Dioxus' website](https://dioxuslabs.com/awesome)!

[Source Code](https://github.com/spideyclick/dioxus-text-adventure)

<figure tabindex=0>
	<picture>
	  <!-- User prefers light mode: -->
	  <source srcset="img/text-adventure-light.png" media="(prefers-color-scheme: light)"/>
	  <!-- User prefers dark mode: -->
	  <source srcset="img/text-adventure-dark.png"  media="(prefers-color-scheme: dark)"/>
	  <!-- User has no color preference: -->
	  <img src="light.png"/>
	</picture>
	<figcaption aria-hidden="true"><a href="https://text-adventure.spideyclick.net"><code>https://text-adventure.spideyclick.net</code></a></figcaption>
</figure>

<!-- TODO -->

<!-- ## Character Sheet -->

## WebGL Experiments

![[ChaseBox](static/ChaseBox.html)](img/chasebox.png)

ChaseBox is a simple 2D game I built in an attempt to learn WebGL. It has super-simple physics, super-simple shaders and super-simple event handlers. It's not much, but it works! It gradually ramps up speed over time, and I remember when I showed it to my co-workers it wasn't long before they were trying to get the best score!

My biggest issue with this is that the physics are framerate-dependant. However, I could always come back to it and implement a time-delta approach, such as the one explained in [Gaffer On Games | Fix Your Timestep](https://web.archive.org/web/20190403012130/https://gafferongames.com/post/fix_your_timestep/).

I also took a shot at a a 3D First Person environment [here](static/3D.html).

## RPG Tools

![](img/flask.svg)

![Tabletop RPG Runner](img/trpg.png)

Ever since I was introduced to the world of D&D I've thought some aspects could be made less painful using a computer.

While I'm already a fan of [Orcpub 2](https://orcpub2.com/) and [Roll 20](https://roll20.net/), I wanted to build something that was system-agnostic and that I could easily visualize using JSON.

The idea of objects containing objects with attributes and rules is just absolutely fascinating to me, and I'd love to get to the point where you could just import rules for 5e or any other system just by uploading a JSON file.

For now, it's just a fun project I play around with from time to time.

I've recently started experimenting with creating a Character Sheet using the Dioxus framework, but don't have anything I can show off yet!

[](https://github.com/spideyclick/Lynx-Program-Downloader)


## lynx-program-downloader

At my very first IT job, we needed a way to automatically update our software downloads. Things like CCleaner, MalwareBytes, Defraggler, etc.

This program does just that using the scripting capabilities in the
[Lynx terminal web browser](http://lynx.browser.org/).
It goes through a list of programs in different categories and downloads
each, one at a time, from sources such as majorgeeks.com or
filehippo.com, although it can be made to work with just about any site.

This is the first program I ever made publicly available on GitHub. I was able to get it reviewed by a couple programmers I knew at the time and I was so grateful for the recommendations they gave me!


<style>
:root {
	--badge-top: var(--theme-main);
	--badge-bottom: var(--background-up-2);
}
@media (prefers-color-scheme: dark) {
	:root {
		--badge-top: var(--background-up-2);
		--badge-bottom: var(--theme-main);
	}
}
.logo_badges ul {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	padding: 0;
	justify-content: space-evenly;
}
.logo_badges li {
	background: linear-gradient(
		180deg,
		var(--badge-top) 0%,
		var(--badge-top) 70%,
		var(--badge-bottom) 70%,
		var(--badge-bottom) 100%)
	;
	border-radius: 50% 50% 50% 50% / 15% 15% 15% 15%;
	box-shadow: var(--material-shadow);
	color: var(--badge-top);
	display: flex;
	flex-direction: column;
	font-weight: 400;
	height: 100px;
	list-style: none;
	overflow: hidden;
	padding: 25px 5px;
	position: relative;
	text-align: center;
	width: 85px;
}
.logo_badges i {
	color: var(--badge-bottom);
	font-size: 60px;
	text-align: center;
	margin-bottom: 38px;
	height: 47px;
	top: 36px;
	left: 0;
}
</style>
# spideyclick.net

My name is Zachary Hubbell. I've been writing code since 2012 and have worked full-time in the field since 2020. I'm self-taught and enjoy learning new languages and tools all the time - if my workflow isn't evolving, I'm getting bored.

I started with basic HTML and CSS when I was 11 and have enjoyed my time learning how to write Bash scripts, Python, JavaScript, OpenGL, various SQL languages, Dockerfiles, Jenkins pipelines and most recently I've been learning Rust (and scheming on how to introduce it to my workplace).

Through the years I've gotten to work on all kinds of projects: backup scripts, static sites, responsive web-apps, backend systems, libraries we use every day at work, ETL Pipelines, lots of little game prototypes and more. See the [Projects](/projects) page to find what I've already worked on.

I enjoy getting to meet people with similar interests; I've had the opportunity to attend some hackathons and meetups over the years.

![Code For The Kingdom (C4TK) 2016 winners](img/c4tk-hackathon-2016.jpg)

![Pueblo Maker Club](img/maker-club.jpg)

## Technologies I Love

<div class="logo_badges">

These are the blocks I build with:

- <i class="fab fa-git-alt" aria-hidden="true"></i>Git
- <i class="fab fa-markdown" aria-hidden="true"></i>MarkDown
- <i class="fas fa-terminal" style="font-size:50px;" aria-hidden="true"></i>Bash
- <i class="fab fa-python" aria-hidden="true"></i>Python
- <i class="fab fa-rust" aria-hidden="true"></i>Rust
- <i class="fab fa-html5" aria-hidden="true"></i>HTML
- <i class="fab fa-css3-alt" aria-hidden="true"></i>CSS
- <i class="fab fa-js" aria-hidden="true"></i>JavaScript
- <i class="fab fa-docker" aria-hidden="true"></i>Docker
- <i class="fa fa-database" aria-hidden="true"></i>Postgres

</div>

I've also come to love some tools that took my terminal to the next level:

- [Starship](https://starship.rs/)
- [`rg`](https://github.com/BurntSushi/ripgrep) (RipGrep)
- [`fd`](https://github.com/sharkdp/fd) (Find)
- [`fzf`](https://github.com/junegunn/fzf) (Fuzzy Finder)
- [`jq`](https://github.com/jqlang/jq) / [`yq`](https://github.com/mikefarah/yq)
- [`choose`](https://github.com/theryangeary/choose) (cut alternative)

Stuff I've played with but would not say I'm proficient in:

- WebGL
- C++
- QT
- MongoDB
- NixOS

Some other things I've used:

- AWS
- LetsEncrypt

## Software I Use

**OS:** I've spent a lot of time on almost every version of Windows. I can tolerate working on a Mac, but it's not my favorite. I've enjoyed many different distributions of linux and tend to enjoy the KDE desktop (Nothing has let me customize my OS like KDE). On the server side of things, I spend a lot of time with Docker and Dev Containers, usually running Debian.

**Apps:** While I love and still sometimes use my Adobe CS6 Production package (Premiere Pro, PhotoShop, Elements, etc.) I find myself using open source tools more and more. Here are some of my favorites:

**Programming:** While I love Kate and Notepad2-mod for basic edits, I've got to say VSCode has become my go-to editor. I loved Atom for a few years, but it became too slow with all the packages I was adding, which are either included in VSCode's base or can be added without slowing the program down too much.

**EDIT 2024:** I feel like I've re-discovered the terminal! Using an editor (Helix) that allows me to quickly pipe to the terminal means that the whole linux OS becomes my editor. This has also led me to learning other cli tools like lazygit and jq.

**Notes:** Zim Desktop Wiki is amazing. However, I have used Evernote and OneNote for some time\--they work very well when I need things in the cloud. I've also recently started using the Markdown language for plain text notes, which I can sync on my own. I'm starting to enjoy that process more and more, we'll see how it goes\...

**EDIT 2024:** Markdown in a Git repository has proven very reliable!

**Graphics:** I'm addicted to InkScape. Krita is amazing too! I'll use Gimp when needed. DigiKam is good for photos, but it's still hard to beat the Adobe Lightroom workflow when processing dozens of photos.

## Websites I Can't Live Without

(Inhales deeply)

github, gitlab, stackoverflow, css-tricks, w3schools, digitalocean, coolors.co, cssgradient.io, cubic-bezier.com, desmos.com, material.io, fontawesome.com and, um, wikipedia, I guess. Who doesn't use wikipedia?

See more on the [links](/links) page.

**EDIT 2024:** Gotta add ChatGPT (or just LLM's in general) to the list. All AI controversies aside, LLM's are helpful for finding help with a specific issue and having a discussion that contains a lot of context. Obviously, caution has to be used with the outputs.

## Other Rabbit Trails

- I've built and bought several different ortho-linear split keyboards. My layout has been slowly evolving since 2018.
- I've enjoyed riding a OneWheel since 2019
- The first vehicle I owned was a Harley Davidson Sportster; while I've been riding since 2012, I upgraded to a Road King in 2023.
- I've built a couple custom PC's at home and run a tiny home server

---
title: "Making Last Toll in a week for a game jam"
date: 2026-11-14 12:00:00 -0500
tags: [last-toll, game-jam, godot, devlog]
draft_by: Hark
description: "A day-by-day look at making Harrow's Wake: Last Toll, a short first-person horror game, for Super Free AI Game Jam #2."
image: /assets/img/last-toll/the-bellman.webp
---

Last Toll is a one-night spin-off of Harrow's Wake that I made for **Super Free AI Game Jam #2** on itch.io, which ran from 7 November at 9:10 PM to 14 November at 9:10 PM (Eastern). The jam allows AI-assisted games, so this one was made with AI help from the start. The goal was a finished 10 to 15 minute game, not a slice of a bigger one.

<!--more-->

The idea is simple: it's 3:12 AM in the St. Agnes orphanage, the Bellman is walking the halls ringing his hand bell, and you have to find the bell rope, the clapper and the chapel key, then ring the great bell before he finds you. You can't fight him. First person this time, instead of Harrow's Wake's fixed cameras.

## What I reused, and what's new

The jam allows pre-made material, so I reused the CC0 textures, props and sounds from Harrow's Wake, its two PSX shaders and two small code helpers. Everything else was made during the jam week: the design, the map, the player controller, the Bellman's AI and the UI.

## The week

**Day 0 (Saturday night).** A greybox orphanage built from an ASCII map with seven rooms, a first-person controller with a flashlight, running, sneaking and stamina, the three items, a locked chapel and the bell to ring. The Bellman wakes up when you take the first item, wanders near you, investigates noises and chases you on sight. Builds for Windows, Linux and Android came out of CI on every push, with an automated playthrough test of 25 checks.

**Day 1.** Every other entry in the jam played in the browser, and Godot 4.3 can't export C# to the web, so I moved the Bellman's AI from C# to GDScript and dropped .NET. That gave me a web build. I also added hiding: wardrobes and a bed, a peek view through the wardrobe doors, and holding your breath. If he saw you get in, he opens the wardrobe. His bell now sounds muffled through walls and changes tempo with what he's doing.

**Day 2.** Performance. The browser build lagged on my i3 laptop with integrated graphics, so the flashlight shadow went off on web and mobile, the floor and ceiling were split into chunks so lights only touch nearby geometry, and a few lights became glowing materials instead.

**Day 3.** Bug hunt. In the browser, pressing Esc released the mouse without the game noticing, so the Bellman kept hunting while you couldn't move. Losing the mouse now pauses the game.

**Day 4.** Volume and mouse sensitivity in the pause menu.

**Day 5.** The big one. The Bellman got his real body (an animated CC0 mannequin in a long coat, top hat and cracked porcelain mask), five lore notes, three scares, a brightness setting because the halls were too dark, win-screen stats, and an original music-box theme made with Python and NumPy. A few bugs got fixed too, like a click at the moment he caught you instantly restarting the run before you could read the screen.

**Day 6 (Friday).** Final check pass: 63 automated checks, all passing, and no gameplay changes. That build, build 8, is the jam version.

## What I learned

- **Decide on the web build first.** Moving off C# on day 1 was the right call, but it would've been cheaper on day 0.
- **Test on weak hardware early.** The i3 laptop found problems my PC never would.
- **Sound is the scariest thing in the game.** The muffled bell through walls does more than any jump scare.
- **Automated playthrough tests are worth it.** They grew from 25 to 63 checks over the week and caught regressions every night.

You can [play Last Toll in your browser on itch.io](https://merlin-direwolves.itch.io/harrows-wake-last-toll-wip-title), and the code, builds and full devlog are on [GitHub](https://github.com/Tylerlikesps4/Harrows-Wake-Last-Toll).

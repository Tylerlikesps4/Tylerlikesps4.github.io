---
title: "Harrow's Wake: from a huge design doc to a small free demo"
date: 2026-11-07 18:00:00 -0500
tags: [harrows-wake, godot, devlog]
description: "How Harrow's Wake went from a big PS1 survival horror design document to a free, open-source one-chapter demo in Godot 4.3."
image: /assets/img/harrows-wake/bellman-mask.webp
---

Harrow's Wake started as a design document that was far too big. The first version describes an 8 to 10 hour PS1-style survival horror game with three playable survivors, nine endings, a fog town in Maine in October 1998, a sealed biotech lab underneath it, and a stalker called the Bellman who rings a hand bell and can't be killed. The inspiration list is basically every late-'90s horror game I love: Silent Hill's fog and radio static, Clock Tower's stalker and hiding spots, Resident Evil's fixed cameras, typewriters and item boxes, Parasite Eve's body horror, Dino Crisis, and Martian Gothic's idea of survivors who can never meet and have to share items through vacuum tubes.

<!--more-->

That last idea became the heart of the game. In Harrow's Wake, if two survivors meet, they die, so they keep each other alive by sending items through the town's old pneumatic mail tubes.

## Cutting it down to a demo

Nobody finishes a 10-hour game by starting with all of it, so I cut the plan down to one complete chapter: two survivors instead of three, two buildings, one stalker, one regular enemy. **Jenny** hides in the St. Agnes orphanage with no weapon, and **Dana** is a deputy at the police station with a handgun. Jenny finds a fuse, tubes it to Dana, Dana gets the power back on and sends a key back, and Jenny has to get to the chapel past the Bellman. It runs about 15 to 25 minutes.

It's built in **Godot 4.3** with the GL Compatibility renderer so it runs on phones, and I play-test it on my Android phone. The PSX look is a custom shader stack: vertex snapping, affine texture warping, 15-bit dithering, a CRT filter and film grain, with 128 px textures and nearest filtering.

## Honest early builds

The first builds were rough. My verdict on build 2 was that it wasn't that good: the look, the controls and the scares all needed work. Build 3 was a full overhaul and it was *slightly* better. From there it was a lot of small passes:

- **Faces and the Bellman's mask.** Every character got a low-res painted face, and the Bellman got a cracked porcelain mask with a sewn mouth.
- **C# and GDScript.** The game state, saves and settings, the Bellman's AI and his pathfinding are in C#. The player, the HUD, touch controls and level building are in GDScript.
- **Door scenes** like the old Resident Evil games, about a second and a half between rooms, skippable, and you can turn them off.
- **Phone fixes.** The lore notes were partly off screen on my phone, so documents now open in a reader that fits the screen and scrolls. Leaving the app now pauses the game.
- **A PC build** with a fullscreen toggle, gamepad support and a Linux version.

Every push to the repo builds Windows, Linux and Android versions with GitHub Actions and publishes them as a release, so there's always a fresh build to test.

## Music

The game has an original theme, "Harrow's Wake (Main Theme)", a slow D minor lullaby. The instrumental plays on the title screen and a vocal version with lullaby lyrics plays over the end credits. It's generated from source with Python, a soundfont and a singing-voice pipeline, and the scripts are in the repo.

## Open source, but still mine

The demo's code and soundtrack are **GPL-3.0**, and every third-party model, texture and sound is **CC0** and credited (Quaternius, Kenney, Poly Haven and a lot of OpenGameArt creators). I'm the sole copyright owner, so the plan is a free, open demo here and a separate paid full game later. The "Harrow's Wake" name and logo aren't licensed for reuse.

## About AI

I made Harrow's Wake with AI assistance, and the itch.io page says so. That matters for jams: one horror jam I wanted to enter requires a "no generative AI" declaration, so this build isn't eligible there, and that's fair. It is entered in The Never-Ending Game Jam.

## What's still rough

- The Bellman's position isn't saved yet, so he resets when you load a save.
- The Android build is signed with a throwaway key for now, so you need to uninstall the old build before installing a new one.
- The Windows build hasn't been tested on much real hardware yet.

If you play it, I'd love to hear what scared you and what didn't. You can [play it on itch.io](https://merlin-direwolves.itch.io/harrows-wake-demo) or grab a build from [GitHub](https://github.com/Tylerlikesps4/Harrows-Wake/releases/latest), and bug reports go in the repo's issues.

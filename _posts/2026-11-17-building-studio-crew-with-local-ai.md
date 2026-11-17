---
title: "Building Studio Crew: AI helpers for my channels, running on my own PC"
date: 2026-11-17 12:00:00 -0500
tags: [studio-crew, ai, ollama, android]
draft_by: Hark
description: "Why I'm building Anu Studio Crew, an Android app with six AI helpers for YouTube and Twitch, and why it runs on Ollama on an RTX 4060."
---

Making games, videos and streams at the same time means a lot of small jobs: coming up with video ideas, writing titles and descriptions, picking clip moments from a stream, keeping a schedule. So I started building **Anu Studio Crew**, an Android app with a small crew of AI helpers for my YouTube and Twitch channels.

<!--more-->

## The crew

There are six of them, each with its own chat and quick actions:

- **Scout** finds video and stream ideas for gaming, AI and Godot devlogs.
- **Writer** drafts hooks, titles, scripts, descriptions, tags and stream titles.
- **Clipper** suggests clip moments and Shorts titles from a VOD link plus my notes or timestamps. It can't watch video, so it works from what I give it.
- **Mod** drafts chat rules, banned-word lists, timers and commands. Drafts only.
- **Analyst** reads public YouTube and Twitch stats with my own API keys and writes a weekly summary.
- **Scheduler** keeps a content calendar on the phone with reminders.

There's also a **Run the crew** button: Scout, Writer and Scheduler build a plan for the week and add it to the calendar in one go. Any answer can be saved to a shared task board.

## Why local AI

I wanted the AI part to be free and open source, so the main AI runs on my own PC with **[Ollama](https://ollama.com)**, which is free and open source. My PC has an **RTX 4060 with 8 GB of VRAM**, and the default model, `qwen3:8b`, is about 5.2 GB, so it fits fully on the GPU. The phone talks to the PC over my home Wi-Fi through Ollama's OpenAI-compatible API.

A few things I learned setting it up:

- **The first answer can be slow** while the model loads into VRAM, so the app waits up to 90 seconds for the first word from Ollama.
- **Thinking models are slow for small jobs.** There's a "fast answers" switch, on by default, that turns thinking off.
- **Ollama only listens on the PC itself by default.** It has to be set to listen on the network, and the port allowed through the firewall on private networks only.
- **The PC isn't always on.** When it's off or too slow, the app falls back to free models on OpenRouter, and every answer is labelled with which one wrote it.

The first version used a different router for the AI, and it wasn't working well for me, so version 0.2.0 switched to Ollama.

## Where it's at

It's built with Expo and React Native in TypeScript, licensed GPL-3.0-or-later, with no accounts, no analytics and no telemetry. Versions 0.1.0 and 0.2.0 are test builds and haven't been tested on a real phone yet, so it's not public. Next on the list: a live Twitch chat bot for Mod, signing in to Twitch and YouTube for real analytics, and finding the Ollama PC automatically.

I made it with AI assistance, the same way I've been making the games. I'll post again when there's something you can install.

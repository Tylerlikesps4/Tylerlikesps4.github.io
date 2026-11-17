# tylerlikesps4.github.io

The personal site of **Anu (Tylerlikesps4)**: games, apps, devlog, videos and streams.
Live at **https://tylerlikesps4.github.io**.

Built with [Jekyll](https://jekyllrb.com) and a custom theme (dark "Bell & Fog", with a light mode).
No trackers, no analytics, no web fonts, no cookies. Twitch and YouTube players only load when a visitor clicks to load them.

Every push to `main` builds the site with GitHub Actions (`.github/workflows/pages.yml`) and publishes it to GitHub Pages in a minute or two.
You can edit everything below straight on github.com (open the file, click the pencil, commit).

---

## Add a blog post

1. Create a file in `_posts/` named `YYYY-MM-DD-short-title.md`, for example `_posts/2026-12-01-harrows-wake-build-13.md`.
2. Start it with front matter, then write Markdown:

   ```markdown
   ---
   title: "Harrow's Wake build 13"
   tags: [harrows-wake, devlog]
   description: "One sentence for search results and link previews."
   image: /assets/img/harrows-wake/chapel.webp   # optional, the social preview image
   ---

   The first paragraph is the summary shown on the home page and blog list.

   <!--more-->

   The rest of the post...
   ```

3. Commit. The post appears on the home page, the blog, the tag page and the RSS feed (`/feed.xml`).

- Tags are free text; each new tag gets its own section on `/blog/tags/` automatically.
- Put images in `assets/img/` and use them with `![What the image shows](/assets/img/your-image.webp)`.
- **Draft posts by Hark** have `draft_by: Hark` in their front matter, which shows a "Draft" notice on the post. When you've reviewed and edited one, delete that line.
- To hide a post without deleting it, add `published: false`.

## Add a game

1. Create a file in `_games/`, for example `_games/my-new-game.md`. The file name becomes the URL (`/games/my-new-game/`).
2. Copy the front matter from `_games/last-toll.md` and change it:
   - `title`, `kind`, `status`, `summary`
   - `order` (position on the Games page) and `featured: true` if it should be the home page's featured game (only one game should have it)
   - `cover` (shown on cards, 630x500 works best) and `hero` (wide image behind the title)
   - `play`: the buttons (itch.io, downloads, source). The first one is highlighted.
   - `facts`: the side panel (engine, platforms, license…). Values can contain Markdown links.
   - `screenshots`: `src` and `alt` (describe the image for screen readers). Add `w`/`h` if they aren't 1280x960.
3. Put screenshots in `assets/img/<game>/`. WebP or JPEG under ~150 KB keeps the site fast.
4. Write the description, controls and credits below the front matter in Markdown.

## Add a video or change the schedule

- **Featured videos:** add entries to `_data/videos.yml` (title, `youtube_id` from the video URL, date, one-line description). They show on `/videos/` as click-to-play players using youtube-nocookie.
- **Upload schedule:** edit `_data/schedule.yml`. The YouTube days are shown on the home page and `/videos/`. Add Twitch stream slots under `twitch.slots` when you have fixed times.

## Other things you can edit

| What | Where |
|---|---|
| Social links (home, footer, Links page) | `_data/links.yml` |
| Menu | `_data/nav.yml` |
| Apps & tools page | `_data/projects.yml` |
| Uses / setup page | `_data/uses.yml` |
| About, Now, Contact | `about.md`, `now.md`, `contact.md` |
| Colours and layout | `assets/css/site.css` (colour variables at the top: dark and light) |
| Site title, description | `_config.yml` |

## Run it on your computer (optional)

Needs Ruby 3.x.

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Privacy rules for this repo

This repo is public. Don't commit personal details (home address, phone, email, real name, birthday) or anything secret (API keys, passwords, keystores). Use the handles Anu / Tylerlikesps4.

## License

Site code: GPL-3.0 (see `LICENSE`). Game screenshots are from Tylerlikesps4's own games. Post text © Tylerlikesps4.

The previous version of this repo (the "Anu, The Sky Father" React draft) is kept on the `legacy-sky-father-site` branch.

# e-Filing capture kit

A small kit that lets an advocate show what the eCourts e-Filing portal looks like, without installing anything and without sharing a login or any client data. The advocate does the clicking. Their Claude Code coaches them and runs the checks.

> **This kit lives in a public repository. The data it collects must not.** Captures, screenshots, notes, templates and the `forbid.txt` file are git-ignored here. Finished data goes to a separate **private** repository (see below).

## What is captured
- The **layout** of each screen: field names, dropdown choices (for example lists of states, districts, case types and acts), which fields are required, the text of error messages and instructions, the buttons, and a sanitised copy of the page.
- It does **not** capture what is typed, logins, OTPs, CAPTCHA, DSC or payment details. Page copies have scripts, tokens, hidden fields, typed text and case lists removed.
- The bookmarks only save a file on the advocate's own computer. They send nothing anywhere.

## Before starting
1. Use an **invented case** with invented people. Never a real client.
2. Do **not** capture the payment gateway (the page that opens after "Pay").
3. Stop before the final **Submit**.

## Steps
1. Open Claude Code in this folder and say: **"Let's do the e-Filing capture session."** It follows `.claude/skills/efiling-capture/SKILL.md`.
2. It sets up two Chrome bookmarks: **Capture** and **Capture (layout only)**.
3. Log in to the portal yourself. At each screen on the list, click the bookmark; a small file downloads; move it into `captures/`.
4. Take screenshots as you go into `captures/screenshots/`.
5. A check refuses to continue if it finds anything personal (including the names in your own `forbid.txt`).
6. Answer the questions in `INTERVIEW.md` and add your anonymised templates in `templates/`.
7. Claude Code puts everything into a separate **private** repository and tells the requester.

If a bookmark does not work on the portal, save the page (Ctrl+S, "Webpage, Complete") into `captures/` and ask Claude Code to convert it (`npm run html`).

## Commands (Claude Code runs these)
- `npm install`: once.
- `npm run build`: creates the two bookmark files.
- `npm run check`: merges the captures and refuses anything personal.
- `npm run html -- captures/page.html --title "Screen name"`: fallback for saved pages.

Contributed under the MIT licence of this repository.

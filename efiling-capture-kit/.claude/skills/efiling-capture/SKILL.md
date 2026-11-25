---
name: efiling-capture
description: Guide an advocate through one recorded walkthrough of the eCourts e-Filing portal with a one-click bookmark, screenshots and a short interview, check nothing personal is in it, and push it to a private repo. Use when the advocate says they are ready to capture the e-Filing portal or asks what to do next in the capture session.
---

# e-Filing capture session

This is a **one-shot** session, so be thorough and keep the advocate on the shot list. Read `CLAUDE.md` first and follow its hard rules.

## A. Setup (once, about 10 minutes)
1. Run `npm install` and `npm run build`. This creates `bookmarklet.txt` and `bookmarklet-layout-only.txt`.
2. Help the advocate add two bookmarks in Chrome (bookmarks bar, right-click, "Add page"):
   - **Capture** = the full contents of `bookmarklet.txt` as the URL.
   - **Capture (layout only)** = the full contents of `bookmarklet-layout-only.txt` as the URL.
   Test both on any ordinary web page: a file `step-....json` must download each time. If the portal later blocks bookmarks, use the fallback: save the page (Ctrl+S, "Webpage, Complete") into `captures/` and run `node tools/html-to-step.mjs captures/<file>.html --title "<screen name>"`.
3. Copy `forbid.example.txt` to `forbid.txt` (it is git-ignored, so it never leaves the computer) and add, one per line: the advocate's name, bar code, firm name, mobile number, email, and the invented client's and opponent's names. The check refuses any capture containing these.
4. Agree the dummy case: invented petitioner, respondent, address, a realistic but fake section, a plausible relief.

## B. The walkthrough (the advocate does every click; you coach and log)
Ask the advocate to say the screen name aloud or type it, then click the bookmark. Use **Capture (layout only)** on any page that lists real cases, payments or profile details; use **Capture** on form pages.

| # | Screen / moment | When to click the bookmark |
|---|---|---|
| 1 | Login page (before logging in) | Once, page loaded. Do not type anything. |
| 2 | Home / dashboard after login | Once, **layout only** |
| 3 | The menu: open each menu that leads to filing | Once per open menu |
| 4 | New filing, first page | Loaded; then once more after an empty "Next" click (error messages) |
| 5 | Court selection: State, District, Court/Establishment | Loaded; after each level is chosen (cascading dropdowns); this also records how long each takes |
| 6 | Case type / nature of case | Loaded, and with the list opened |
| 7 | Petitioner details | As an **individual**; switch to company/organisation and capture again; the "add another petitioner" pop-up open |
| 8 | Respondent details | Same variants as 7 |
| 9 | Advocate / additional party details | Loaded |
| 10 | Case details: facts, cause of action, dates, valuation, jurisdiction, court fee | Loaded; after an empty "Next" click |
| 11 | Acts and sections | Loaded, and with the Act dropdown opened |
| 12 | Prayer / relief | Loaded |
| 13 | Interim applications, if the portal offers them | Loaded |
| 14 | Document upload: main petition and annexures | Loaded; after choosing a small **dummy PDF**; after choosing a **wrong type** (e.g. a .docx) and a **too-large** file, to record the error text. Click once per state. |
| 15 | Index of documents / document type dropdown | Loaded, dropdown opened |
| 16 | Court fee / payment summary | Loaded, **before paying**. **Never capture the payment gateway.** |
| 17 | Verification / e-sign / DSC step | Loaded, before doing anything |
| 18 | Preview / final submit page | Loaded. **Do not submit.** |
| 19 | Terms, Disclaimer, Privacy, Help/FAQ, user manual pages | Each once, **and** print each to PDF (Ctrl+P, Save as PDF) into `captures/docs/` |
| 20 | Anything surprising: pop-ups, session timeout, a step that appears only for some case types | Whenever it appears |

If the advocate also files in a High Court (or a district court, if they started with a High Court), repeat rows 4 to 18 for that portal. If a demo or training mode exists, tell us.

## C. Screenshots and recording
- A full-page screenshot of every screen in the table, plus: each dropdown opened, each error message, each pop-up. Save into `captures/screenshots/`, named `NN-screen-name.png`.
- One screen recording (5 to 10 minutes) of the whole dummy filing with the advocate talking through what slows them down. Keep it out of GitHub if it is large; share by drive link and note the link in `captures/CAPTURE-LOG.md`.

## D. After each batch
1. Run `npm run check`. On STOP: show what it found, delete that capture, redo it with the invented data, and re-run.
2. Update `captures/CAPTURE-LOG.md`.
3. Read the new screenshots and add the rules and surprises to `captures/NOTES.md`.

## E. Interview
Open `INTERVIEW.md` and go through it with the advocate, writing their answers in their own words. Ask them to attach their own anonymised templates (see the file).

## F. Hand-over (the data goes to a separate PRIVATE repository, never into this kit's repository)
1. Run `npm run check` one last time. It must say OK.
2. Ask the advocate for a private repository for the data (suggest the name `efiling-walkthrough-data`). If it does not exist yet: `gh repo create <owner>/efiling-walkthrough-data --private`.
3. Verify it is private: `gh repo view <owner>/efiling-walkthrough-data --json isPrivate`. It must say `"isPrivate": true`. If not, stop.
4. In a **separate folder outside this repository**, clone that private repo and copy in: `captures/` (JSON files, screenshots, docs, NOTES.md, CAPTURE-LOG.md), `recording.json`, `pages/`, the answered `INTERVIEW.md`, and `templates/`. Commit and push there.
5. Add the person who asked for the data as a read-only collaborator (the advocate decides who; ask them) and tell them to accept the invitation.
6. Tell the advocate in two lines what was captured and what is still missing from the shot list.

---
name: efiling-capture
description: Guide an advocate through one recorded walkthrough of the eCourts e-Filing portal with a one-click bookmark, screenshots and a short interview, check nothing personal is in it, and push it to a private repo. Use when the advocate says they are ready to capture the e-Filing portal or asks what to do next in the capture session.
---

# e-Filing capture session

This is a **one-shot** session, so be thorough and keep the advocate on the shot list. Note that in e-Filing 3.0 the new-case form has tabs (Initial Inputs, Litigant, Fact Details, Case Details, e-File) while documents, vakalat, payments and applications are separate menus. Read `CLAUDE.md` first and follow its hard rules.

## A. Setup (once, about 10 minutes)
1. Run `npm install` and `npm run build`. This creates `bookmarklet.txt` and `bookmarklet-layout-only.txt`.
2. Help the advocate add two bookmarks in Chrome (bookmarks bar, right-click, "Add page"):
   - **Capture** = the full contents of `bookmarklet.txt` as the URL.
   - **Capture (layout only)** = the full contents of `bookmarklet-layout-only.txt` as the URL.
   Test both on any ordinary web page: a file `step-....json` must download each time. If the portal later blocks bookmarks, use the fallback: save the page (Ctrl+S, "Webpage, Complete") into `captures/` and run `node tools/html-to-step.mjs captures/<file>.html --title "<screen name>"`.
3. Copy `forbid.example.txt` to `forbid.txt` (it is git-ignored, so it never leaves the computer) and add, one per line: the advocate's name, bar code, firm name, mobile number, email, and the invented client's and opponent's names. The check refuses any capture containing these.
4. Agree the dummy case: invented petitioner, respondent, address, a realistic but fake section, a plausible relief.

## B. The walkthrough (the advocate does every click; you coach and log)
Ask the advocate to say the screen name aloud or type it, then click the bookmark. Use **Capture (layout only)** on any page that lists real cases, payments, wallet balances or profile details; use **Capture** on form pages.

The list follows the official eFiling Services 3.0 manual (see `PORTAL-FLOW.md` if it is available to you). Menus, tabs and buttons may be named slightly differently in your court's version; capture what you see and tell us the name.

| # | Screen / moment | When to click the bookmark |
|---|---|---|
| 1 | Login page (before logging in) | Once, page loaded. Do not type anything. |
| 2 | Home / dashboard after login (tiles: Draft Pleadings, Completed Pleadings, Draft IAs, Completed IAs, Objections, My Cases) | Once, **layout only** |
| 3 | Main menu: open each one (My Partners, Case Filing, Vakalat, Pleadings, ePayments, Applications, Portfolio) | Once per open menu, **layout only** |
| 4 | **Case Filing → New Case Filing → Initial Inputs** | Loaded; after the district / establishment is chosen (each level of the cascade); case type list opened; after choosing a **motor-vehicle-compensation** case type (an MVC tab appears); after an empty **Submit** (error messages); after a valid Submit ("New Case Added" with a temporary eFiling number) |
| 5 | **Litigant tab**: the party entry form | Loaded as an **individual**; with **Organization Details** ticked; with **Other Information** ticked; with **Legal Heir Add** ticked; the local-language fields; after an empty **Update** (errors); **View Previous Parties** open |
| 6 | **Legal Heir tab** (appears when Legal Heir Add was ticked) | Loaded |
| 7 | **Fact Details tab** | Loaded; after **Add More Fact**; after an empty **Save** |
| 8 | **Case Details tab** (cause of action, valuation, prayer, acts) | Loaded; after **More Acts**; the **Act** dropdown opened; after an empty **Save** |
| 9 | **MVC tab** (only for motor-vehicle-compensation) | Loaded |
| 10 | **e-File tab**: the review page | Loaded. **Do NOT click "e-File Case".** After it, nothing can be edited. |
| 11 | Manage Favorite Clients; the Edit / Delete list of draft cases | Loaded, **layout only** |
| 12 | **Vakalat**: Assign Partners, Print Vakalat | Each page loaded |
| 13 | **Pleadings → Use Templates** | Loaded; the **Type of Pleading** dropdown opened |
| 14 | **Pleadings → Pleadings: Upload** | Loaded; after choosing a small **dummy PDF**; after choosing a **wrong type** (a .docx) and a **too-large** file, to record the error text (click once per state) |
| 15 | Pleadings: the uploaded-documents table, **Merge** dialog, **Indexing** form (Add Index) | Each loaded |
| 16 | Pleadings: **Authorize Signatories** and the **eSign** / OTP choice | Loaded. **Stop before the redirect to the C-DAC site** |
| 17 | Pleadings: **Record Oath** | Loaded. **Do not start recording** |
| 18 | **ePayments → Payments**: payment-type radio list, payee / amount form | Loaded; after choosing a type. **Stop before the OTP and the vendor redirect. Never capture the payment gateway.** |
| 19 | **ePayments → Court Fee Wallet** | Loaded, **layout only**. Do not add money. |
| 20 | **Applications → Interlocutory Applications Filing**, up to its Pay Fees step | Each step loaded. Do not pay. |
| 21 | Portfolio: Search Cases, My Cases, Import, Export, Planner | Each loaded, **layout only** |
| 22 | Help section, Terms, Disclaimer, Privacy | Each once, **and** print each to PDF (Ctrl+P, Save as PDF) into `captures/docs/` |
| 23 | Anything surprising: pop-ups, session time-outs, tabs or fields that appear only for some case types | Whenever it appears |

If the advocate files in both a High Court and a district court, repeat rows 4 to 10 for each (the High Court path asks for High Court, civil or criminal, matter type and case type instead of state, district and establishment). If a demo or training mode exists, tell us.

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

<p align="center">
  <img src="assets/wolfgang-rush-logo.svg" alt="Wolfgang Rush — Indian-Court Drafting Plugins for Claude Code" width="600"/>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"/></a>
  <a href="https://github.com/Wolfgangrush/wolfgang-rush-marketplace/blob/main/.claude-plugin/marketplace.json"><img src="https://img.shields.io/badge/plugins-14-D4A24C.svg" alt="14 plugins"/></a>
  <a href="PRIVACY.md"><img src="https://img.shields.io/badge/privacy-no--telemetry-success.svg" alt="No telemetry"/></a>
  <a href="SECURITY.md"><img src="https://img.shields.io/badge/security-PVR%20enabled-informational.svg" alt="Security disclosure"/></a>
</p>

# Wolfgang Rush — Claude plugin family

Open-source plugin family for **Indian-court litigation drafting**, built on Claude Code.

Fourteen court-specific drafting plugins covering the full Indian litigation landscape — Supreme Court, all 25 High Courts, District Courts, MACT, Family Courts, Consumer Commissions, banking tribunals, IP forums, the direct-tax appellate hierarchy, labour courts, property and conveyancing, contracts, NCLT / NCLAT, and rent control across nine States. Each plugin runs a **six-agent drafting pipeline** with court-config-aware skeletons sourced from public statutes, schedule forms, and court rules.

MIT-licensed. No telemetry. No user accounts. Runs entirely inside the user's local Claude Code installation.

---

## 🌐 Read in your language

Install instructions are available in ten Indian languages. Tap the language you read most fluently:

[हिन्दी](README.hi.md) · [मराठी](README.mr.md) · [தமிழ்](README.ta.md) · [తెలుగు](README.te.md) · [বাংলা](README.bn.md) · [ગુજરાતી](README.gu.md) · [ಕನ್ನಡ](README.kn.md) · [ਪੰਜਾਬੀ](README.pa.md) · [മലയാളം](README.ml.md) · [اردو](README.ur.md)

> 🙏 Translations are community-contributable. If a phrase reads awkwardly in your language, please [open an issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) or send a pull request — every improvement makes this more accessible to the Indian bar.

---

## What is Wolfgang Rush?

**Wolfgang Rush** is the publishing identity of [Rushikesh R. Mahajan](https://www.linkedin.com/in/rushirmahajan), an advocate at the Bombay High Court (Nagpur Bench). The plugins are released as **open legal-tech infrastructure** for the Indian bar — for advocates, law-firm associates, in-house counsel, law students, and legal-tech researchers who want AI-assisted drafting that knows Indian procedural law out of the box.

The project sits at the intersection of two observations:

1. **Claude for Legal (launched 12 May 2026) defaults to U.S. legal positions** — Delaware / New York / California — with non-U.S. jurisdictions requiring user-side `.claude/legal.local.md` customisation. India was not in the launch lineup.
2. **India has 1.4 million advocates, 25 High Courts, 25+ State district-court systems, and five major tribunal forums.** The drafting infrastructure for this scale was missing from the AI-native legal tooling ecosystem.

These 14 plugins fill that gap as open infrastructure. **The plugins are tools, not legal services** — they help drafters draft, faster and with statutory-currency discipline. They do not replace legal judgment, do not constitute legal advice, and are not a solicitation for engagements of any kind.

---

## Architecture — the six-agent drafting pipeline

Every plugin in the family runs the same internal pipeline:

| # | Agent       | Role                                                                                  |
|---|-------------|---------------------------------------------------------------------------------------|
| 1 | **Reader**  | Ingests the user's case folder — facts, prior pleadings, statutory anchors, exhibits  |
| 2 | **Formatter** | Maps content to the court-specific format (cause title, prelude, body, prayer, index) |
| 3 | **Drafter** | Composes the substantive pleading using court-config-aware skeletons                  |
| 4 | **Verifier** | Checks statutory currency (CrPC → BNSS 2023, IEA → BSA 2023, IPC → BNS 2023, etc.) and citation form |
| 5 | **Refiner** | Polishes language, removes AI-style markers, enforces local-bench typographic conventions |
| 6 | **Overseer**| Adversarial read — finds weak limbs, attackable defects, missing prayers, opposing-counsel angles |

The architecture follows a **corpus-as-verifier-not-source** doctrine: structural skeletons are sourced from public statutes, schedule forms, and court rules; drafted prose is original. The Verifier carries statutory-currency discipline so deprecated statutes do not silently leak into output.

---

## How to install

**Direct install requires Claude Code (the CLI).** The Wolfgang Rush plugins use the Claude Code plugin format (`.claude-plugin/plugin.json` + `agents/` + `skills/` structure). The Claude *Desktop app's* local-upload feature uses a different format (single-file Anthropic Skills schema) and will reject these plugins with a "Plugin validation failed" toast.

If you are a Desktop-app user, you have two options: **(a)** install Claude Code (the CLI — a one-line install) and use the marketplace path below, **or (b)** wait for these plugins to propagate from Anthropic's submission queue to the public Desktop-browsable community catalog (status as of writing: submissions approved 17 May 2026, propagation pending — see [Status](#status) below).

### 🧑‍💻 Install via Claude Code (CLI)

First-time Claude Code install (one line, copy-paste into Terminal):

```bash
curl -fsSL https://claude.ai/install.sh | sh
```

Then add the Wolfgang Rush marketplace and install any plugin from the family:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

Replace `indian-hc-drafting` with any plugin name from the [table below](#the-14-plugins). Install as many as you need — one command per plugin.

To browse what's available inside Claude Code interactively:

```bash
/plugin
```

Then go to the **Discover** tab. All installed plugins show in the **Installed** tab.

### 🖥️ For Claude Desktop users

The Desktop app's *built-in marketplace browser* (Settings → Customize → Plugins) will be able to install these plugins **once Anthropic completes propagation** from the submissions dashboard to the public community marketplace catalog. Until that happens, Desktop-only users can either:

- Install Claude Code and use the CLI path above (recommended — Claude Code coexists with the Desktop app, doesn't replace it)
- Wait for Anthropic propagation (timeline unknown; tracking via [issue #1272](https://github.com/anthropics/claude-plugins-official/issues/1272) on the official plugin repo)

**The Desktop app's "Upload local plugin" feature (drag-drop .zip) is structurally incompatible with this plugin family** — it expects a different schema. Do not waste time trying to drag the GitHub Release zips into it.

---

## The 14 plugins

| Plugin | Court / domain | Source repo |
|---|---|---|
| `supreme-court-drafting` | Supreme Court — SLPs, Article 32 writs, curative/review | [github.com/Wolfgangrush/supreme-court-drafting-litigation](https://github.com/Wolfgangrush/supreme-court-drafting-litigation) |
| `indian-hc-drafting` | Any High Court — Article 226 writs, PILs, LPAs | [github.com/Wolfgangrush/indian-hc-drafting-litigation](https://github.com/Wolfgangrush/indian-hc-drafting-litigation) |
| `district-court-drafting` | District Courts — CPC suits, applications, WS | [github.com/Wolfgangrush/district-court-drafting-litigation](https://github.com/Wolfgangrush/district-court-drafting-litigation) |
| `indian-family-drafting` | Family Courts — divorce, maintenance, custody | [github.com/Wolfgangrush/indian-family-drafting-litigation](https://github.com/Wolfgangrush/indian-family-drafting-litigation) |
| `indian-consumer-drafting` | District/State/National Consumer Commissions (CPA 2019) | [github.com/Wolfgangrush/indian-consumer-drafting](https://github.com/Wolfgangrush/indian-consumer-drafting) |
| `indian-mact-drafting` | MACT — §166 MV Act compensation | [github.com/Wolfgangrush/indian-mact-drafting](https://github.com/Wolfgangrush/indian-mact-drafting) |
| `indian-banking-drafting` | DRT, SARFAESI, NI Act §138, IBC §7/§95, DRAT | [github.com/Wolfgangrush/indian-banking-drafting-litigation](https://github.com/Wolfgangrush/indian-banking-drafting-litigation) |
| `indian-labour-drafting` | Labour courts — ID Act, gratuity, ESI/PF, SH | [github.com/Wolfgangrush/indian-labour-drafting-litigation](https://github.com/Wolfgangrush/indian-labour-drafting-litigation) |
| `indian-ip-drafting` | Trademark, copyright, patent | [github.com/Wolfgangrush/indian-ip-drafting](https://github.com/Wolfgangrush/indian-ip-drafting) |
| `indian-tax-drafting` | ITAT, CIT(A), tax writs | [github.com/Wolfgangrush/indian-tax-drafting](https://github.com/Wolfgangrush/indian-tax-drafting) |
| `indian-property-drafting` | Sale/gift deeds, partition, specific performance | [github.com/Wolfgangrush/indian-property-drafting-litigation](https://github.com/Wolfgangrush/indian-property-drafting-litigation) |
| `indian-contracts-drafting` | Contracts, arbitration §8/§11/§34, recovery | [github.com/Wolfgangrush/indian-contracts-drafting-litigation](https://github.com/Wolfgangrush/indian-contracts-drafting-litigation) |
| `indian-company-drafting` | NCLT (oppression, schemes, IBC §7/§9) AND NCLAT appeals (§421, §61 IBC) | [github.com/Wolfgangrush/indian-company-drafting](https://github.com/Wolfgangrush/indian-company-drafting) |
| `indian-rent-control-drafting` | Rent-control eviction · standard rent · rent deposit · §106 TPA notice · MTA 2021 | [github.com/Wolfgangrush/indian-rent-control-drafting](https://github.com/Wolfgangrush/indian-rent-control-drafting) |

All plugins also have `v0.1.0-alpha` GitHub Release tags with source bundles attached. Those bundles are **not** Desktop-app-installable (different schema); they are a historical snapshot of the plugin at submission time, useful only for inspection.

---

## Coverage at a glance

- **Constitutional / Supreme Court:** SLPs (civil + criminal), Article 32 writs, curative + review, transfer petitions
- **All 25 High Courts:** Article 226 writs, PILs, Letters Patent Appeals, Criminal + Civil revisions, bench-config aware
- **District Courts (25+ States):** CPC suits, applications, written statements, execution proceedings
- **Specialised Tribunals:** MACT, NCLT, NCLAT, DRT, DRAT, ITAT, CIT(A), Consumer Commissions (District / State / National)
- **Subject-matter regimes:** Family law (HMA / SMA / IDA / Parsi / Muslim PL / DV Act / G&W / HAMA / JJ Act), Banking (SARFAESI / NI Act / IBC), Labour (ID Act / POSH / Gratuity / EPF / ESI / MW / IESO), IP (Copyright / TM / Patents / Designs + HC IP Divisions post-IPAB), Tax (Form 35 / Form 36 / Section 148A / 263 / 264 / 271 / 270A / 144C / 201 / 260A), Property (Gift / Exchange / Trust / Wakf / Easement / Partition / Settlement / Mortgage / TIR), Contracts (MSA / NDA / Employment / Lease / Sale / GPA / SHA / Will / Loan / Arbitration), Company (NCLT oppression / class action / schemes / capital reduction / revival / investigation), Consumer (CPA 2019 + medical-negligence Jacob Mathew / Bolam + product liability), Rent control (9 State regimes + Model Tenancy Act 2021)

---

## Privacy & security

- **No telemetry, no user accounts, no server.** Plugins run entirely locally inside the user's Claude Code installation. The publisher operates no data-collection infrastructure of any kind. Full details: [PRIVACY.md](PRIVACY.md)
- **Privacy primitive in every plugin:** The Reader agent (first of the six-agent pipeline) calls the [pseudonymisation-gateway](https://github.com/Wolfgangrush/pseudonymisation-gateway) on the user's case folder BEFORE any cloud-LLM call. Real client names, government IDs, case numbers, phone numbers, and currency amounts are replaced with placeholders (`[PERSON_1]`, `[AADHAAR_1]`, `[CASE_NO_1]`, etc.) in a session-scoped in-memory token map that never touches disk. Cloud LLM vendors never see real PII. The Overseer agent (last of the pipeline) calls `desanitize()` to restore real values in the final pleading before it reaches the file system.
- **Security disclosure:** GitHub Private Vulnerability Reporting enabled on this repo. See [SECURITY.md](SECURITY.md) for the disclosure process and response timelines
- **Professional confidentiality:** The plugins are tools for use by qualified advocates and law-firm staff. Users remain professionally responsible for what material they pass to Claude Code, consistent with advocate-client privilege under Section 132 of the Bharatiya Sakshya Adhiniyam 2023 and applicable bar-council rules. The plugins process case-folder content locally; the publisher receives no copy

**Privacy policy in other languages** (summary translations — English original is legally authoritative):
[हिन्दी](PRIVACY.hi.md) · [मराठी](PRIVACY.mr.md) · [தமிழ்](PRIVACY.ta.md) · [తెలుగు](PRIVACY.te.md) · [বাংলা](PRIVACY.bn.md) · [ગુજરાતી](PRIVACY.gu.md) · [ಕನ್ನಡ](PRIVACY.kn.md) · [ਪੰਜਾਬੀ](PRIVACY.pa.md) · [മലയാളം](PRIVACY.ml.md) · [اردو](PRIVACY.ur.md)

---

## Status

All 14 plugins are at **v0.1.0-alpha**. The marketplace itself is at **v0.1.0**. This is a working alpha release — usable in production drafting workflows by advocates who exercise the same professional judgement they would apply to any drafting assistant. Bug reports, plugin proposals, and contributions are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

**What you can say accurately about distribution status:**

- All 14 plugins were submitted to Anthropic's community plugin marketplace and marked as `Published` in the submissions dashboard on **17 May 2026**
- All 14 plugins are approved by Anthropic's review pipeline
- Plugins are **available now** via the Wolfgang Rush marketplace at [github.com/Wolfgangrush/wolfgang-rush-marketplace](https://github.com/Wolfgangrush/wolfgang-rush-marketplace) — install path documented above

Sync propagation from Anthropic's submissions dashboard to the user-facing `anthropics/claude-plugins-community` catalogue is currently pending. Install via the Wolfgang Rush marketplace above for the working path.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to file bugs, propose plugins, or submit pull requests.

By contributing, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License

MIT — see [LICENSE](LICENSE). Each plugin carries its own MIT license file in its repository.

---

## Maintainer

[Wolfgang Rush](https://github.com/Wolfgangrush) — Indian advocate building lawtech in the open.

For non-code questions: advrushikeshravindramahajan@gmail.com

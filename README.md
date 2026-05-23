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

## Which install path is right for you?

**If you are an advocate, law-firm associate, in-house counsel, or any non-technical user** — use **Option 1 (Claude Desktop)**. Drag and drop. No terminal. No commands to memorise.

**If you are a developer, tech-comfortable lawyer, legal-tech researcher, or want to install the whole family at once** — use **Option 2 (Claude Code CLI)**. Two commands. Installs every plugin from one marketplace.

Both paths use the same plugin code and the same six-agent pipeline. Both run entirely locally on your machine. Privacy posture is identical — see the [Privacy & security](#privacy--security) section below.

---

## Two ways to install

### ✅ Option 1 — Claude desktop app (easiest for non-developers)

Each plugin ships a pre-packaged `.zip` on its **GitHub Releases** page (see the table below). The zip is built with the plugin manifest at its root so the Claude desktop app accepts it directly.

1. Click the release link for any plugin in the table below
2. Under **Assets**, download the `<plugin-name>.zip`
3. Open the **Claude desktop app** → **Settings** → **Plugins** → **Upload local plugin**
4. Drag the `.zip` into the upload box. The plugin installs
5. Repeat for any other plugin you want

> ⚠️ **Do not use GitHub's "Download ZIP" button** (the green Code button → Download ZIP). That wraps the plugin inside a `repo-main/` folder, breaking validation. Always use the **release `.zip` from the Releases tab**.

### 🧑‍💻 Option 2 — Claude Code (CLI) — recommended for plugin family

If you have Claude Code installed (`curl -fsSL https://claude.ai/install.sh | sh`), the whole family installs from one marketplace:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

Replace `indian-hc-drafting` with any plugin name from the table. Install as many as you need with one line each.

To browse what's available inside Claude Code:

```bash
/plugin
```

Then go to the **Discover** tab.

---

## The 14 plugins

| Plugin | Court / domain | Desktop release |
|---|---|---|
| `supreme-court-drafting` | Supreme Court — SLPs, Article 32 writs, curative/review | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/supreme-court-drafting-litigation/releases/tag/v0.1.0-alpha) |
| `indian-hc-drafting` | Any High Court — Article 226 writs, PILs, LPAs | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-hc-drafting-litigation/releases/tag/v0.1.0-alpha) |
| `district-court-drafting` | District Courts — CPC suits, applications, WS | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/district-court-drafting-litigation/releases/tag/v0.1.0-alpha) |
| `indian-family-drafting` | Family Courts — divorce, maintenance, custody | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-family-drafting-litigation/releases/tag/v0.1.0-alpha) |
| `indian-consumer-drafting` | District/State/National Consumer Commissions (CPA 2019) | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-consumer-drafting/releases/tag/v0.1.0-alpha) |
| `indian-mact-drafting` | MACT — §166 MV Act compensation | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-mact-drafting/releases/tag/v0.1.0-alpha) |
| `indian-banking-drafting` | DRT, SARFAESI, NI Act §138, IBC §7/§95, DRAT | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-banking-drafting-litigation/releases/tag/v0.1.0-alpha) |
| `indian-labour-drafting` | Labour courts — ID Act, gratuity, ESI/PF, SH | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-labour-drafting-litigation/releases/tag/v0.1.0-alpha) |
| `indian-ip-drafting` | Trademark, copyright, patent | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-ip-drafting/releases/tag/v0.1.0-alpha) |
| `indian-tax-drafting` | ITAT, CIT(A), tax writs | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-tax-drafting/releases/tag/v0.1.0-alpha) |
| `indian-property-drafting` | Sale/gift deeds, partition, specific performance | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-property-drafting-litigation/releases/tag/v0.1.0-alpha) |
| `indian-contracts-drafting` | Contracts, arbitration §8/§11/§34, recovery | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-contracts-drafting-litigation/releases/tag/v0.1.0-alpha) |
| `indian-company-drafting` | NCLT (oppression, schemes, IBC §7/§9) AND NCLAT appeals (§421, §61 IBC) | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-company-drafting/releases/tag/v0.1.0-alpha) |
| `indian-rent-control-drafting` | Rent-control eviction · standard rent · rent deposit · §106 TPA notice · MTA 2021 | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-rent-control-drafting/releases/tag/v0.1.0-alpha) |

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
- **Security disclosure:** GitHub Private Vulnerability Reporting enabled on this repo. See [SECURITY.md](SECURITY.md) for the disclosure process and response timelines
- **Professional confidentiality:** The plugins are tools for use by qualified advocates and law-firm staff. Users remain professionally responsible for what material they pass to Claude Code, consistent with advocate-client privilege under Section 132 of the Bharatiya Sakshya Adhiniyam 2023 and applicable bar-council rules. The plugins process case-folder content locally; the publisher receives no copy

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

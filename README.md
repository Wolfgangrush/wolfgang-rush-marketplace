# Wolfgang Rush — Claude Code Plugin Marketplace

Open-source plugin family for Indian-court litigation drafting, built on Claude Code.

13 court-specific drafting plugins, each shipping a 6-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) with court-config-aware skeletons.

---

## Install (for users)

You need **Claude Code (CLI)** — *not* the Claude desktop app at claude.ai. Install Claude Code first:

```bash
# macOS / Linux / Windows — official installer
curl -fsSL https://claude.ai/install.sh | sh
```

Or via npm:

```bash
npm install -g @anthropic-ai/claude-code
```

Then open Claude Code in any project folder and run:

```
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

Replace `indian-hc-drafting` with any plugin from the list below. Install as many as you need.

---

## The 13 plugins

| Plugin | What it drafts |
|---|---|
| `supreme-court-drafting` | Supreme Court of India — SLPs, Article 32 writs, curative/review, transfer petitions |
| `indian-hc-drafting` | Any High Court — Article 226 writs, PILs, LPAs, criminal/civil revisions |
| `district-court-drafting` | District Courts — CPC suits, applications, written statements, execution |
| `indian-family-drafting` | Family Courts — divorce, maintenance, custody, guardianship |
| `indian-consumer-drafting` | District / State / National Consumer Commissions under CPA 2019 |
| `indian-mact-drafting` | Motor Accident Claims Tribunal — §166 MV Act compensation petitions |
| `indian-banking-drafting` | DRT, SARFAESI, NI Act §138, IBC §7/§95, DRAT appeals |
| `indian-labour-drafting` | Labour courts — ID Act, gratuity, ESI/PF, sexual-harassment |
| `indian-ip-drafting` | Trademark infringement, copyright, patent revocations |
| `indian-tax-drafting` | ITAT appeals, CIT(A) appeals, tax writs |
| `indian-property-drafting` | Sale/gift deeds, partition suits, specific performance |
| `indian-contracts-drafting` | Contracts, arbitration §8/§11/§34, recovery suits |
| `indian-company-drafting` | NCLT — Companies Act 2013, oppression, IBC, schemes |

---

## Why "not the claude.ai desktop app"?

The claude.ai desktop app's plugin uploader is a different surface — it validates a different manifest shape, and GitHub's "Download ZIP" wraps the plugin inside a `repo-main/` folder which the uploader cannot unwrap. These plugins are authored for **Claude Code (CLI)**, the developer tool. Use the `/plugin marketplace add` flow above; the install is two lines and ~10 seconds per plugin.

---

## License

MIT — each plugin carries its own LICENSE file in its repository.

## Author

[Wolfgang Rush](https://github.com/Wolfgangrush) — Indian advocate building lawtech in the open.

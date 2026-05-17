# Wolfgang Rush — Claude plugin family

Open-source plugin family for Indian-court litigation drafting, built on Claude Code.

13 court-specific drafting plugins, each shipping a 6-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) with court-config-aware skeletons.

---

## Two ways to install

### ✅ Option 1 — Claude desktop app (easiest for non-developers)

Each plugin ships a pre-packaged `.zip` on its **GitHub Releases** page (see the table below). The zip is built with the plugin manifest at its root so the Claude desktop app accepts it directly.

1. Click the release link for any plugin in the table below.
2. Under **Assets**, download the `<plugin-name>.zip`.
3. Open the **Claude desktop app** → **Settings** → **Plugins** → **Upload local plugin**.
4. Drag the `.zip` into the upload box. The plugin installs.
5. Repeat for any other plugin you want.

> ⚠️ **Do not use GitHub's "Download ZIP" button** (the green Code button → Download ZIP). That wraps the plugin inside a `repo-main/` folder, breaking validation. Always use the **release `.zip` from the Releases tab**.

### 🧑‍💻 Option 2 — Claude Code (CLI) — recommended for plugin family

If you have Claude Code installed (`curl -fsSL https://claude.ai/install.sh | sh`), the whole family installs from one marketplace:

```
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

Replace `indian-hc-drafting` with any plugin name from the table. Install as many as you need with one line each.

---

## The 13 plugins

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
| `indian-company-drafting` | NCLT — Companies Act 2013, IBC, oppression | [Download v0.1.0-alpha](https://github.com/Wolfgangrush/indian-company-drafting/releases/tag/v0.1.0-alpha) |

---

## License

MIT — each plugin carries its own LICENSE file in its repository.

## Author

[Wolfgang Rush](https://github.com/Wolfgangrush) — Indian advocate building lawtech in the open.

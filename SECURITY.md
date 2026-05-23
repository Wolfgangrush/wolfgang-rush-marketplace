# Security Policy — Wolfgang Rush Plugin Family

## Supported versions

The Wolfgang Rush plugin family is currently in its `0.1.0` alpha line. All published plugins are supported for security fixes; once a `1.0` line ships, prior alpha releases will move to a 90-day deprecation window.

| Version line | Supported          |
| ------------ | ------------------ |
| `0.1.x`      | :white_check_mark: |
| Pre-release  | :white_check_mark: |

## Reporting a vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

Two private disclosure channels are available:

### Channel 1 — GitHub Private Vulnerability Reporting (preferred)

1. Open the [Security tab](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/security) of this repository
2. Click **Advisories** → **Report a vulnerability**
3. Fill in the form

This is the preferred channel because it gives both reporter and maintainer a private audit trail.

### Channel 2 — Email

For reporters without a GitHub account, or for issues that span multiple repos:

**Email:** advrushikeshravindramahajan@gmail.com
**Subject line:** `[SECURITY] Wolfgang Rush — <short description>`

Please **do not** include exploit code, sensitive client data, or PoC against live systems in the first contact. The first message should describe the issue at a level sufficient for the maintainer to confirm receipt and request a secure follow-up channel for technical detail.

## What to include in your report

- A descriptive summary of the vulnerability
- Affected plugin(s) and version(s)
- Reproduction steps at a sanitised level (no client data, no live exploits)
- Potential impact and severity
- Any proposed mitigation if known

## Response timeline

- **Acknowledgement:** within 72 hours of report receipt
- **Triage + severity classification:** within 7 days
- **Coordinated disclosure timeline:** agreed with the reporter; default 90 days for non-critical findings, faster for critical

## Scope

In-scope:
- All plugins in the [Wolfgang Rush plugin family](README.md)
- The marketplace repository itself (this repo)
- The 14 plugin source repositories under [github.com/Wolfgangrush](https://github.com/Wolfgangrush)

Out-of-scope:
- Vulnerabilities in Claude Code itself (report to Anthropic at https://anthropic.com/security)
- Vulnerabilities in upstream Claude API (report to Anthropic)
- Issues that require the user to supply intentionally malicious case-folder contents to their own local Claude Code installation
- Theoretical risks without a demonstrable attack path

## Privacy & professional confidentiality

The plugins are professional legal-drafting tools. Vulnerabilities that could compromise advocate-client privilege under Section 132 of the Bharatiya Sakshya Adhiniyam 2023 (formerly Section 126 IEA 1872) or analogous bar-council confidentiality obligations are treated as the highest severity class and prioritised over generic technical findings.

## Credit

Reporters who follow this disclosure process will be credited (with their consent) in the security advisory published when the fix lands. If you prefer to remain anonymous, please say so in the initial report.

## Related

- [Privacy Policy](PRIVACY.md) — what the plugins do and do not collect
- [License](LICENSE) — MIT
- [Contributing](CONTRIBUTING.md) — non-security contribution guidance

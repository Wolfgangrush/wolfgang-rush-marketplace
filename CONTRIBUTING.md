# Contributing to Wolfgang Rush

Thank you for your interest in contributing to the Wolfgang Rush plugin family. This document explains how to file issues, propose improvements, and submit new contributions.

---

## What this marketplace is

Wolfgang Rush is a curated, MIT-licensed family of Claude Code plugins for Indian-court litigation drafting. Each plugin runs a six-agent pipeline (Reader → Formatter → Drafter → Verifier → Refiner → Overseer) and ships court-config-aware skeletons sourced from public statutes, schedule forms, and court rules.

The marketplace is maintained by a single advocate-developer in the open. Issues, pull requests, and discussions are welcome.

---

## How to report a bug

If you find a bug in any plugin — a citation that does not load, a format that is mis-rendered for a particular bench, a statutory reference that has been superseded, a prompt that produces wrong-shape output — please open an issue on the **specific plugin's repository**, not on the marketplace repo.

The full list of plugin repositories is in the [README](README.md) under "The 14 plugins."

Include in your issue:

1. Plugin name and version (from the plugin's `plugin.json`)
2. Court / bench / matter type you were drafting for
3. Expected behaviour
4. Actual behaviour
5. Minimal reproducer (sanitised — strip any client-identifying information)

---

## How to suggest a new plugin

The 14 plugins currently cover Supreme Court, all 25 High Courts, District Courts, MACT, Family, Consumer, Banking, IP, Tax, Labour, Property, Contracts, Company tribunals (NCLT/NCLAT), and Rent Control. If you see a major Indian-court forum or litigation surface that is **not yet** covered (e.g. specialised tribunals, niche statutory regimes, state-specific courts), open an issue on **this marketplace repo** titled `[plugin-proposal] <name>`.

Include:

1. The forum / court / tribunal the plugin would target
2. The principal statute(s) and procedural rules involved
3. The principal drafting outputs (petitions, applications, written statements, appeals, etc.)
4. Why this is not adequately covered by an existing plugin

Adding a new plugin is a substantial commitment — corpus collection, statutory-currency verification, six-agent calibration, court-config schema. Issues filed under `[plugin-proposal]` are reviewed but not committed to a timeline.

---

## How to propose a fix

1. Fork the relevant plugin repository (or this marketplace repo, if the fix is to marketplace-level files)
2. Make your change in a feature branch
3. Run the plugin's local validation (`claude plugin validate .` if the CLI is available; otherwise manual review)
4. Open a pull request with a clear description of what changed and why
5. Sign your commits if possible (`git commit -s -m "..."`)

Pull requests are reviewed asynchronously. Substantive review typically takes 7-14 days.

---

## Statutory currency

All plugins carry a Verifier agent that checks statutory references against current law. Indian legislation changes regularly — the CrPC is now BNSS 2023, the IEA is now BSA 2023, the IPC is now BNS 2023, the IT Act has 2021 rules, etc. If you notice a plugin still referencing a superseded statute or section number, please open an issue on that plugin's repo with a citation to the replacing provision.

---

## Code of conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to abide by its terms.

---

## Security disclosures

Please do **not** open public issues for security vulnerabilities. See [SECURITY.md](SECURITY.md) for the private disclosure process.

---

## Licensing

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE) that covers this project.

---

## Maintainer

[Wolfgang Rush](https://github.com/Wolfgangrush) — Indian advocate building lawtech in the open.

For non-code questions: advrushikeshravindramahajan@gmail.com

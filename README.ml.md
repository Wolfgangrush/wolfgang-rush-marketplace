# Wolfgang Rush — മലയാളം

> ⚠️ **ഈ വിവർത്തനം കമ്മ്യൂണിറ്റി-സംഭാവനയ്ക്കായി തുറന്നിരിക്കുന്നു.** മെച്ചപ്പെടുത്തലുകൾക്കായി, [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) തുറക്കുക അല്ലെങ്കിൽ pull request അയയ്ക്കുക.

Claude Code-നായുള്ള open-source plugin കുടുംബം — ഇന്ത്യൻ കോടതികൾക്കായുള്ള litigation drafting-നായി. പതിനാല് കോടതി-നിർദ്ദിഷ്ട drafting plugin, ഓരോന്നും ആറ്-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) സഹിതം.

MIT ലൈസൻസിന് കീഴിൽ. telemetry ഇല്ല. user account ഇല്ല. പൂർണ്ണമായും നിങ്ങളുടെ പ്രാദേശിക Claude Code installation-ൽ പ്രവർത്തിക്കുന്നു.

---

## ഇൻസ്റ്റാളേഷൻ (Installation)

> ⚠️ **Claude Desktop app-ന്റെ "Upload local plugin" (drag-drop .zip) സവിശേഷത ഈ plugins-മായി പ്രവർത്തിക്കില്ല** — schema mismatch കാരണം. Desktop ഉപയോക്താക്കൾ: താഴെയുള്ള Claude Code (CLI) വഴി ഉപയോഗിക്കുക, അല്ലെങ്കിൽ Anthropic propagation-നായി കാത്തിരിക്കുക.

### Claude Code (CLI) — ഒറ്റ പ്രവർത്തിക്കുന്ന direct-install വഴി (CLI) — മുഴുവൻ കുടുംബത്തിനും recommended

നിങ്ങളുടെ പക്കൽ Claude Code installed ഉണ്ടെങ്കിൽ, ഒരൊറ്റ marketplace-ൽ നിന്ന് മുഴുവൻ കുടുംബവും install ചെയ്യുക:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

`indian-hc-drafting`-ന്റെ സ്ഥാനത്ത് പട്ടികയിൽ നിന്നുള്ള ഏതെങ്കിലും plugin-ന്റെ പേര് വയ്ക്കുക.

---

## 14 plugins

ഓരോ plugin-നായുള്ള release link-കളോടു കൂടി പ്രധാന README-ന്റെ **The 14 plugins** പട്ടിക കാണുക.

---

## സ്വകാര്യത

Wolfgang Rush plugin കുടുംബം നിങ്ങളുടെ ഒരു data-യും **ശേഖരിക്കില്ല, സംഭരിക്കില്ല, അല്ലെങ്കിൽ പ്രക്ഷേപണം ചെയ്യില്ല.** എല്ലാം നിങ്ങളുടെ പ്രാദേശിക Claude Code installation-ൽ പ്രവർത്തിക്കുന്നു. പൂർണ്ണ വിശദാംശങ്ങൾ: [PRIVACY.md](PRIVACY.md)

## ഗ്രന്ഥകർത്താവ്

[Wolfgang Rush](https://github.com/Wolfgangrush) — തുറന്ന് lawtech നിർമ്മിക്കുന്ന ഇന്ത്യൻ അഭിഭാഷകൻ.

ബന്ധപ്പെടാൻ: advrushikeshravindramahajan@gmail.com

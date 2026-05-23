# Wolfgang Rush — മലയാളം

> ⚠️ **ഈ വിവർത്തനം കമ്മ്യൂണിറ്റി-സംഭാവനയ്ക്കായി തുറന്നിരിക്കുന്നു.** മെച്ചപ്പെടുത്തലുകൾക്കായി, [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) തുറക്കുക അല്ലെങ്കിൽ pull request അയയ്ക്കുക.

Claude Code-നായുള്ള open-source plugin കുടുംബം — ഇന്ത്യൻ കോടതികൾക്കായുള്ള litigation drafting-നായി. പതിനാല് കോടതി-നിർദ്ദിഷ്ട drafting plugin, ഓരോന്നും ആറ്-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) സഹിതം.

MIT ലൈസൻസിന് കീഴിൽ. telemetry ഇല്ല. user account ഇല്ല. പൂർണ്ണമായും നിങ്ങളുടെ പ്രാദേശിക Claude Code installation-ൽ പ്രവർത്തിക്കുന്നു.

---

## ഇൻസ്റ്റാളേഷൻ (Installation)

### ഓപ്ഷൻ 1 — Claude Desktop app (non-developer-നായി ഏറ്റവും എളുപ്പമുള്ളത്)

1. താഴെയുള്ള പട്ടികയിൽ നിന്നുള്ള ഏതെങ്കിലും plugin-നായി **Download** ലിങ്കിൽ ക്ലിക്ക് ചെയ്യുക
2. **Releases** പേജിൽ **Assets**-നു താഴെ നിന്ന് `<plugin-name>.zip` ഡൗൺലോഡ് ചെയ്യുക
3. **Claude desktop app** → **Settings** → **Plugins** → **Upload local plugin** എന്നതിലേക്ക് പോകുക
4. `.zip` ഫയൽ upload box-ലേക്ക് drag ചെയ്യുക — plugin install ആകും

> ⚠️ GitHub-ന്റെ "Download ZIP" ബട്ടൺ (പച്ച Code ബട്ടൺ) **ഉപയോഗിക്കരുത്** — അത് plugin-നെ `repo-main/` folder-ൽ പൊതിയുന്നു, validation തകർക്കുന്നു. എപ്പോഴും **Releases tab-ൽ നിന്ന് release `.zip`** ഡൗൺലോഡ് ചെയ്യുക.

### ഓപ്ഷൻ 2 — Claude Code (CLI) — മുഴുവൻ കുടുംബത്തിനും recommended

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

# Wolfgang Rush — తెలుగు

> ⚠️ **ఈ అనువాదం సమాజ-సహకారానికి తెరిచి ఉంది.** మెరుగుదలల కోసం, [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) తెరవండి లేదా pull request పంపండి.

Claude Code కోసం open-source plugin కుటుంబం — భారతీయ న్యాయస్థానాలకు litigation drafting కోసం. పద్నాలుగు న్యాయస్థాన-నిర్దిష్ట drafting plugins, ప్రతిదీ ఆరు-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) తో.

MIT లైసెన్స్ క్రింద. telemetry లేదు. user account లేదు. పూర్తిగా మీ స్థానిక Claude Code installation లో నడుస్తుంది.

---

## ఇన్‌స్టాలేషన్ (Installation)

### ఎంపిక 1 — Claude Desktop app (non-developer కోసం సులభమైనది)

1. క్రింది పట్టిక నుండి ఏ plugin కోసమైనా **Download** లింక్ క్లిక్ చేయండి
2. **Releases** పేజీలో **Assets** క్రింద `<plugin-name>.zip` డౌన్‌లోడ్ చేయండి
3. **Claude desktop app** → **Settings** → **Plugins** → **Upload local plugin** కి వెళ్ళండి
4. `.zip` ఫైల్ ను upload box లో drag చేయండి — plugin install అవుతుంది

> ⚠️ GitHub యొక్క "Download ZIP" బటన్ (ఆకుపచ్చ Code బటన్) **వాడవద్దు** — ఇది plugin ను `repo-main/` folder లో చుట్టి validation విచ్ఛిన్నం చేస్తుంది. ఎప్పుడూ **Releases tab నుండి release `.zip`** డౌన్‌లోడ్ చేయండి.

### ఎంపిక 2 — Claude Code (CLI) — మొత్తం కుటుంబానికి recommended

మీ వద్ద Claude Code installed ఉంటే, ఒకే marketplace నుండి మొత్తం కుటుంబాన్ని install చేయండి:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

`indian-hc-drafting` స్థానంలో పట్టిక నుండి ఏదైనా plugin పేరు ఉంచండి.

---

## 14 plugins

ప్రతి plugin కోసం release link లతో ప్రధాన README యొక్క **The 14 plugins** పట్టికను చూడండి.

---

## గోప్యత

Wolgang Rush plugin కుటుంబం మీ ఏ data ను కూడా **సేకరించదు, నిల్వ చేయదు, లేదా ప్రసారం చేయదు.** అన్నీ మీ స్థానిక Claude Code installation లో నడుస్తాయి. పూర్తి వివరాలు: [PRIVACY.md](PRIVACY.md)

## రచయిత

[Wolfgang Rush](https://github.com/Wolfgangrush) — open గా lawtech నిర్మిస్తున్న భారతీయ న్యాయవాది.

సంప్రదింపులు: advrushikeshravindramahajan@gmail.com

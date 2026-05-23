# Wolfgang Rush — தமிழ்

> ⚠️ **இந்த மொழிபெயர்ப்பு சமூகப் பங்களிப்புக்குத் திறந்துள்ளது.** திருத்தங்களுக்கு, [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) திறக்கவும் அல்லது pull request அனுப்பவும்.

Claude Code-க்கான திறந்த-மூல plugin குடும்பம் — இந்திய நீதிமன்றங்களுக்கான வழக்கு-வரைவுக்கு (litigation drafting). பதினான்கு நீதிமன்ற-குறிப்பிட்ட drafting plugin, ஒவ்வொன்றும் ஆறு-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) கொண்டது.

MIT உரிமத்தின் கீழ். telemetry இல்லை. user account இல்லை. முழுவதும் உங்கள் உள்ளூர் Claude Code installation-இல் இயங்குகிறது.

---

## நிறுவல் (Installation)

> ⚠️ **Claude Desktop செயலியின் "Upload local plugin" (drag-drop .zip) வசதி இந்த plugin-களுடன் வேலை செய்யாது** — schema mismatch காரணமாக. Desktop பயனர்கள்: கீழே உள்ள Claude Code (CLI) வழியைப் பயன்படுத்தவும், அல்லது Anthropic propagation-க்காக காத்திருக்கவும்.

### Claude Code (CLI) — ஒரே செயல்படும் direct-install வழி (CLI) — முழு குடும்பத்திற்கு recommended

உங்களிடம் Claude Code installed இருந்தால், ஒரே marketplace-இலிருந்து முழு குடும்பத்தையும் நிறுவவும்:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

`indian-hc-drafting` இடத்தில் அட்டவணையில் இருந்து எந்தவொரு plugin பெயரையும் வைக்கவும்.

---

## 14 plugin-கள்

ஒவ்வொரு plugin-க்கும் release link-களுடன் முதன்மை README-இன் **The 14 plugins** அட்டவணையைப் பார்க்கவும்.

---

## தனியுரிமை

Wolfgang Rush plugin குடும்பம் உங்கள் எந்த data-வையும் **சேகரிக்காது, சேமிக்காது, அனுப்பாது.** எல்லாமே உங்கள் உள்ளூர் Claude Code installation-இல் இயங்குகிறது. முழு விவரம்: [PRIVACY.md](PRIVACY.md)

## ஆசிரியர்

[Wolfgang Rush](https://github.com/Wolfgangrush) — திறந்தவெளியில் lawtech கட்டும் இந்திய வழக்கறிஞர்.

தொடர்பு: advrushikeshravindramahajan@gmail.com

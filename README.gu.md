# Wolfgang Rush — ગુજરાતી

> ⚠️ **આ અનુવાદ સમુદાય-યોગદાન માટે ખુલ્લો છે.** સુધારણા માટે, [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) ખોલો અથવા pull request મોકલો.

Claude Code માટે open-source plugin કુટુંબ — ભારતીય અદાલતો માટે litigation drafting માટે. ચૌદ અદાલત-વિશિષ્ટ drafting plugin, દરેક છ-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) સાથે.

MIT લાયસન્સ હેઠળ. કોઈ telemetry નથી. કોઈ user account નથી. સંપૂર્ણ રીતે તમારા સ્થાનિક Claude Code installation માં ચાલે છે.

---

## ઇન્સ્ટોલેશન (Installation)

### વિકલ્પ 1 — Claude Desktop app (non-developer માટે સૌથી સરળ)

1. નીચે આપેલા કોષ્ટકમાંથી કોઈપણ plugin માટે **Download** લિંક પર ક્લિક કરો
2. **Releases** પેજ પર **Assets** હેઠળથી `<plugin-name>.zip` ડાઉનલોડ કરો
3. **Claude desktop app** → **Settings** → **Plugins** → **Upload local plugin** પર જાઓ
4. `.zip` ફાઇલ ને upload box માં drag કરો — plugin ઇન્સ્ટોલ થશે

> ⚠️ GitHub નું "Download ZIP" બટન (લીલું Code બટન) **વાપરશો નહીં** — તે plugin ને `repo-main/` folder માં લપેટે છે, validation તૂટે છે. હંમેશા **Releases tab થી release `.zip`** ડાઉનલોડ કરો.

### વિકલ્પ 2 — Claude Code (CLI) — સંપૂર્ણ કુટુંબ માટે recommended

જો તમારી પાસે Claude Code installed હોય, તો એક જ marketplace માંથી સંપૂર્ણ કુટુંબ ઇન્સ્ટોલ કરો:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

`indian-hc-drafting` ની જગ્યાએ કોષ્ટકમાંથી કોઈપણ plugin નામ મૂકો.

---

## 14 plugins

દરેક plugin માટે release link સાથે મુખ્ય README ના **The 14 plugins** કોષ્ટકને જુઓ.

---

## ગોપનીયતા

Wolfgang Rush plugin કુટુંબ તમારો કોઈ પણ data **એકત્ર કરતું નથી, સંગ્રહિત કરતું નથી, અથવા પ્રસારિત કરતું નથી.** બધું તમારા સ્થાનિક Claude Code installation માં ચાલે છે. પૂર્ણ વિગતો: [PRIVACY.md](PRIVACY.md)

## લેખક

[Wolfgang Rush](https://github.com/Wolfgangrush) — ખુલ્લા રીતે lawtech બનાવનાર ભારતીય વકીલ.

સંપર્ક: advrushikeshravindramahajan@gmail.com

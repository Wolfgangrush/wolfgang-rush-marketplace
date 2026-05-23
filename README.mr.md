# Wolfgang Rush — मराठी

> ⚠️ **हे भाषांतर समुदाय-योगदानास खुले आहे.** सुधारणा सुचवण्यासाठी कृपया [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) उघडा किंवा pull request पाठवा.

Claude Code साठी ओपन-सोर्स प्लगइन कुटुंब — भारतीय न्यायालयांसमोरील खटला-मसुदा (litigation drafting) तयार करण्यासाठी. चौदा न्यायालय-विशिष्ट drafting प्लगइन, प्रत्येक सहा-एजंट pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) सोबत.

MIT परवान्याअंतर्गत. कोणतीही telemetry नाही. कोणतेही user account नाही. संपूर्णपणे आपल्या स्थानिक Claude Code installation मध्ये चालते.

---

## स्थापना (Installation)

### पर्याय 1 — Claude Desktop अ‍ॅप (non-developer साठी सर्वात सोपा)

1. खालील तक्त्यातून कोणत्याही प्लगइनसाठी **Download** दुव्यावर क्लिक करा
2. **Releases** पानावर **Assets** खालून `<plugin-name>.zip` डाउनलोड करा
3. **Claude desktop app** → **Settings** → **Plugins** → **Upload local plugin** वर जा
4. `.zip` फाइल upload box मध्ये drag करा — प्लगइन install होईल

> ⚠️ GitHub चे "Download ZIP" बटण (हिरवे Code बटण) **वापरू नका** — ते प्लगइनला `repo-main/` folder मध्ये गुंडाळते, validation मोडते. नेहमी **Releases tab मधून release `.zip`** डाउनलोड करा.

### पर्याय 2 — Claude Code (CLI) — संपूर्ण कुटुंबासाठी recommended

जर आपल्याकडे Claude Code installed असेल, तर एकाच marketplace मधून संपूर्ण कुटुंब install करा:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

`indian-hc-drafting` ऐवजी तक्त्यातील कोणतेही प्लगइन नाव टाका.

---

## 14 प्लगइन

मुख्य README ची **The 14 plugins** तक्त्यात प्रत्येक प्लगइनसाठी release link दिले आहेत.

---

## गोपनीयता

Wolfgang Rush प्लगइन कुटुंब आपला कोणताही data **गोळा, साठवत, किंवा पाठवत नाही.** सर्व काही आपल्या स्थानिक Claude Code installation मध्ये चालते. संपूर्ण तपशील: [PRIVACY.md](PRIVACY.md)

## लेखक

[Wolfgang Rush](https://github.com/Wolfgangrush) — मुक्तपणे lawtech बांधणारा भारतीय अधिवक्ता.

संपर्क: advrushikeshravindramahajan@gmail.com

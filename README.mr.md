# Wolfgang Rush — मराठी

> ⚠️ **हे भाषांतर समुदाय-योगदानास खुले आहे.** सुधारणा सुचवण्यासाठी कृपया [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) उघडा किंवा pull request पाठवा.

Claude Code साठी ओपन-सोर्स प्लगइन कुटुंब — भारतीय न्यायालयांसमोरील खटला-मसुदा (litigation drafting) तयार करण्यासाठी. चौदा न्यायालय-विशिष्ट drafting प्लगइन, प्रत्येक सहा-एजंट pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) सोबत.

MIT परवान्याअंतर्गत. कोणतीही telemetry नाही. कोणतेही user account नाही. संपूर्णपणे आपल्या स्थानिक Claude Code installation मध्ये चालते.

---

## स्थापना (Installation)

> ⚠️ **Claude Desktop अ‍ॅपचे "Upload local plugin" (drag-drop .zip) वैशिष्ट्य या प्लगइन्ससोबत काम करत नाही** — schema mismatch मुळे. Desktop वापरकर्ते: खालील Claude Code (CLI) मार्ग वापरा, किंवा Anthropic द्वारा propagation ची प्रतीक्षा करा.

### Claude Code (CLI) — एकमेव कार्यरत direct-install मार्ग

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

# Wolfgang Rush — हिन्दी

> ⚠️ **यह अनुवाद समुदाय-योगदान-योग्य है।** यदि कोई वाक्यांश सुधार चाहता है, कृपया [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) खोलें या pull request भेजें।

Claude Code के लिए ओपन-सोर्स प्लगइन परिवार — भारतीय न्यायालयों के लिए मुक़दमेबाज़ी से जुड़े मसौदे (drafting) तैयार करने हेतु। चौदह न्यायालय-विशिष्ट drafting प्लगइन, हर एक छह-एजेंट pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) के साथ।

MIT लाइसेंस के तहत। कोई telemetry नहीं। कोई user account नहीं। पूरी तरह से आपके स्थानीय Claude Code installation में चलता है।

---

## स्थापना (Installation)

> ⚠️ **Claude Desktop ऐप का "Upload local plugin" (drag-drop .zip) feature इन प्लगइन्स के साथ काम नहीं करता** — schema mismatch के कारण। Desktop उपयोगकर्ता: नीचे दिया गया Claude Code (CLI) रास्ता उपयोग करें, या Anthropic द्वारा propagation का इंतज़ार करें।

### Claude Code (CLI) — एकमात्र काम करने वाला direct-install रास्ता (CLI) — पूरे परिवार के लिए recommended

यदि आपके पास Claude Code installed है, तो एक ही marketplace से पूरा परिवार install करें:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

`indian-hc-drafting` के स्थान पर तालिका से कोई भी प्लगइन नाम लगाएँ।

---

## 14 प्लगइन

देखें मुख्य README की **The 14 plugins** तालिका जिसमें हर प्लगइन के लिए release link दिए गए हैं।

---

## गोपनीयता

Wolfgang Rush प्लगइन परिवार आपका कोई भी data **एकत्र, संग्रहीत, या प्रसारित नहीं करता।** सब कुछ आपके स्थानीय Claude Code installation में चलता है। पूरा विवरण: [PRIVACY.md](PRIVACY.md)

## लेखक

[Wolfgang Rush](https://github.com/Wolfgangrush) — मुक्त रूप से lawtech बनाते हुए एक भारतीय अधिवक्ता।

संपर्क: advrushikeshravindramahajan@gmail.com

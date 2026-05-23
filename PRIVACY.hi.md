# गोपनीयता नीति — Wolfgang Rush प्लगइन परिवार

> ℹ️ **यह एक संक्षिप्त अनुवाद है।** कानूनी रूप से प्रामाणिक संस्करण अंग्रेज़ी में [PRIVACY.md](PRIVACY.md) पर है।

**प्लगइन परिवार:** Wolfgang Rush — Claude Code के लिए ओपन-सोर्स भारतीय कानूनी drafting प्लगइन
**प्रकाशक:** रुषिकेश आर. महाजन, Wolfgang Rush के नाम से प्रकाशित
**संपर्क:** advrushikeshravindramahajan@gmail.com
**प्रभावी तिथि:** 17 मई 2026

---

## 1. डेटा संग्रह

Wolfgang Rush प्लगइन परिवार **आपका कोई भी data एकत्र, संग्रहीत, या प्रसारित नहीं करता** — न प्रकाशक को, न किसी तृतीय पक्ष को।

## 2. प्लगइन कैसे काम करते हैं

प्रत्येक प्लगइन **पूरी तरह स्थानीय रूप से** आपके Claude Code installation के भीतर चलता है। प्लगइन के agents, skills, और templates आपके स्थानीय filesystem से पढ़े जाते हैं। आपके द्वारा प्रदान किए गए case-folder contents (facts, prior pleadings, statutory anchors, prayer briefs, exhibits) स्थानीय रूप से Claude Code द्वारा process किए जाते हैं और सामान्य Claude Code operation के अनुसार केवल आपके और Anthropic के Claude API के बीच भेजे जाते हैं।

प्रकाशक **कोई** server, telemetry endpoint, analytics service, error-reporting service, license-verification service, या किसी भी प्रकार का data-collection infrastructure इन प्लगइन के संबंध में संचालित नहीं करता।

## 3. Anthropic को भेजा गया Data

प्लगइन के उपयोग से user prompts और case-folder contents आपके अपने Claude Code installation द्वारा Anthropic के Claude API पर भेजे जाते हैं। वह data flow **Anthropic की Privacy Policy** के अधीन है, जो https://www.anthropic.com/legal/privacy पर उपलब्ध है।

प्रकाशक उस data flow में पक्षकार नहीं है, user prompts या case-folder contents तक उसकी कोई पहुँच नहीं है, और किसी भी generated output की कोई प्रति प्राप्त नहीं करता।

## 4. कोई user account नहीं

प्लगइन को किसी user account, login, या पहचान चरण की आवश्यकता नहीं है। कोई registration, email signup, या licence-key activation नहीं है।

## 5. Source Code पारदर्शिता

संपूर्ण plugin source code MIT License के तहत https://github.com/Wolfgangrush पर प्रकाशित है। उपयोगकर्ता, system administrators, और security reviewers किसी भी समय plugin code की हर पंक्ति का निरीक्षण कर सकते हैं।

## 6. व्यावसायिक गोपनीयता

उपयोगकर्ता — विशेष रूप से अधिवक्ता और law-firm staff — को ध्यान देना चाहिए कि Claude Code को दिए गए case-folder contents में Bharatiya Sakshya Adhiniyam 2023 की धारा 132 / Indian Evidence Act 1872 की धारा 126 के तहत advocate-client confidentiality या अन्य व्यावसायिक-गोपनीयता दायित्वों को आकर्षित करने वाली सामग्री हो सकती है। प्लगइन को क्या सामग्री प्रदान करनी है, यह निर्णय आपकी व्यावसायिक ज़िम्मेदारी है।

---

पूर्ण कानूनी पाठ के लिए: [PRIVACY.md](PRIVACY.md)

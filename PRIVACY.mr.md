# गोपनीयता धोरण — Wolfgang Rush प्लगइन कुटुंब

> ℹ️ **हे संक्षिप्त भाषांतर आहे.** कायदेशीरदृष्ट्या प्रामाणिक आवृत्ती इंग्रजीमध्ये [PRIVACY.md](PRIVACY.md) येथे आहे.

**प्लगइन कुटुंब:** Wolfgang Rush — Claude Code साठी ओपन-सोर्स भारतीय कायदेशीर drafting प्लगइन
**प्रकाशक:** रुषिकेश आर. महाजन, Wolfgang Rush नावाने प्रकाशित
**संपर्क:** advrushikeshravindramahajan@gmail.com
**प्रभावी दिनांक:** 17 मे 2026

---

## 1. Data संग्रह

Wolfgang Rush प्लगइन कुटुंब **आपला कोणताही data गोळा, साठवत, किंवा प्रसारित करत नाही** — ना प्रकाशकाला, ना कोणत्याही तृतीय पक्षाला.

## 2. प्लगइन कसे चालतात

प्रत्येक प्लगइन **संपूर्णपणे स्थानिक स्तरावर** आपल्या Claude Code installation मध्ये चालतो. प्लगइनचे agents, skills, आणि templates आपल्या स्थानिक filesystem मधून वाचले जातात. आपल्याद्वारे पुरवलेले case-folder contents (facts, prior pleadings, statutory anchors, prayer briefs, exhibits) स्थानिक स्तरावर Claude Code द्वारा process केले जातात आणि सामान्य Claude Code operation च्या मार्गाने केवळ आपण आणि Anthropic च्या Claude API मध्ये पाठवले जातात.

प्रकाशक **कोणताही** server, telemetry endpoint, analytics service, error-reporting service, license-verification service, किंवा कोणत्याही प्रकारची data-collection infrastructure या प्लगइनसाठी चालवत नाही.

## 3. Anthropic ला पाठवलेला Data

प्लगइनच्या वापरामुळे user prompts आणि case-folder contents आपल्या स्वतःच्या Claude Code installation द्वारे Anthropic च्या Claude API ला पाठवले जातात. तो data flow **Anthropic च्या Privacy Policy** च्या अधीन आहे, जे https://www.anthropic.com/legal/privacy येथे उपलब्ध आहे.

प्रकाशक त्या data flow मध्ये पक्षकार नाही, user prompts किंवा case-folder contents पर्यंत त्यांची कोणतीही पोहोच नाही, आणि कोणत्याही generated output ची प्रत मिळत नाही.

## 4. कोणतेही user account नाही

प्लगइनला कोणतेही user account, login, किंवा ओळख-पायरी आवश्यक नाही. कोणतीही registration, email signup, किंवा licence-key activation नाही.

## 5. Source Code पारदर्शकता

संपूर्ण plugin source code MIT License अंतर्गत https://github.com/Wolfgangrush येथे प्रकाशित आहे. उपयोगकर्ते, system administrators, आणि security reviewers कोणत्याही वेळी plugin code च्या प्रत्येक ओळीचे निरीक्षण करू शकतात.

## 6. व्यावसायिक गोपनीयता

उपयोगकर्त्यांनी — विशेषतः अधिवक्ता आणि law-firm staff यांनी — ध्यान दिले पाहिजे की Claude Code ला दिलेल्या case-folder contents मध्ये Bharatiya Sakshya Adhiniyam 2023 च्या कलम 132 / Indian Evidence Act 1872 च्या कलम 126 अंतर्गत advocate-client confidentiality किंवा इतर व्यावसायिक-गोपनीयता बंधने आकर्षित करणारी सामग्री असू शकते. प्लगइनला कोणती सामग्री द्यायची हा निर्णय आपली व्यावसायिक जबाबदारी आहे.

---

संपूर्ण कायदेशीर मजकुरासाठी: [PRIVACY.md](PRIVACY.md)

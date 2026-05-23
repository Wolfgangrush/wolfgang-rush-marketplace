# رازداری پالیسی — Wolfgang Rush plugin خاندان

> ℹ️ **یہ مختصر ترجمہ ہے۔** قانونی طور پر مستند ورژن انگریزی میں [PRIVACY.md](PRIVACY.md) پر ہے۔

**Plugin خاندان:** Wolfgang Rush — Claude Code کے لیے open-source بھارتی قانونی drafting plugins
**ناشر:** رشیکیش آر۔ مہاجن، Wolfgang Rush کے نام سے شائع
**رابطہ:** advrushikeshravindramahajan@gmail.com
**نافذ تاریخ:** 17 مئی 2026

---

## 1. Data جمع کرنا

Wolfgang Rush plugin خاندان **آپ کا کوئی data جمع نہیں کرتا، محفوظ نہیں کرتا، یا منتقل نہیں کرتا** — نہ ناشر کو، نہ کسی تیسرے فریق کو۔

## 2. Plugins کیسے کام کرتے ہیں

ہر plugin **مکمل طور پر مقامی** آپ کے Claude Code installation میں چلتا ہے۔ Plugin کے agents، skills، اور templates آپ کے مقامی filesystem سے پڑھے جاتے ہیں۔ آپ کی فراہم کردہ case-folder contents (facts، prior pleadings، statutory anchors، prayer briefs، exhibits) مقامی طور پر Claude Code کے ذریعے process ہوتے ہیں، اور عام Claude Code operation کے راستے میں صرف آپ اور Anthropic کے Claude API کے درمیان منتقل ہوتے ہیں۔

ناشر ان plugins سے متعلق **کوئی** server، telemetry endpoint، analytics service، error-reporting service، license-verification service، یا data-collection infrastructure نہیں چلاتے۔

## 3. Anthropic کو بھیجا گیا Data

Plugin کے استعمال سے user prompts اور case-folder contents آپ کے اپنے Claude Code installation کے ذریعے Anthropic کے Claude API کو بھیجے جاتے ہیں۔ وہ data flow **Anthropic کی Privacy Policy** کے تحت چلتا ہے، جو https://www.anthropic.com/legal/privacy پر دستیاب ہے۔

ناشر اس data flow میں ایک فریق نہیں ہیں، user prompts یا case-folder contents تک کوئی رسائی نہیں ہے، اور کسی بھی generated output کی کاپی حاصل نہیں کرتے۔

## 4. کوئی user account نہیں

Plugins کے لیے کوئی user account، login، یا شناخت قدم ضروری نہیں۔ کوئی registration، email signup، یا licence-key activation نہیں۔

## 5. Source code شفافیت

مکمل plugin source code MIT License کے تحت https://github.com/Wolfgangrush پر شائع کی گئی ہے۔ صارفین، system administrators، اور security reviewers کسی بھی وقت plugin code کی ہر سطر کا معائنہ کر سکتے ہیں۔

## 6. پیشہ ورانہ رازداری

صارفین کو — خاص طور پر وکلاء اور law-firm staff کو — یہ نوٹ کرنا چاہیے کہ Claude Code کو دی گئی case-folder contents میں Bharatiya Sakshya Adhiniyam 2023 کی دفعہ 132 / Indian Evidence Act 1872 کی دفعہ 126 کے تحت advocate-client confidentiality یا دیگر پیشہ ورانہ-رازداری ذمہ داریوں کو متوجہ کرنے والا مواد ہو سکتا ہے۔ Plugin کو کون سا مواد فراہم کرنا ہے کا فیصلہ آپ کی پیشہ ورانہ ذمہ داری ہے۔

---

مکمل قانونی متن کے لیے: [PRIVACY.md](PRIVACY.md)

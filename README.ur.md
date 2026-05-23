# Wolfgang Rush — اردو

> ⚠️ **یہ ترجمہ کمیونٹی شراکت کے لیے کھلا ہے۔** بہتری کے لیے، [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) کھولیں یا pull request بھیجیں۔

Claude Code کے لیے open-source plugin خاندان — بھارتی عدالتوں کے لیے litigation drafting کے واسطے۔ چودہ عدالت-مخصوص drafting plugin، ہر ایک چھ-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) کے ساتھ۔

MIT لائسنس کے تحت۔ کوئی telemetry نہیں۔ کوئی user account نہیں۔ مکمل طور پر آپ کے مقامی Claude Code installation میں چلتا ہے۔

---

## انسٹالیشن (Installation)

### آپشن 1 — Claude Desktop app (non-developer کے لیے سب سے آسان)

1. نیچے دیے گئے جدول سے کسی بھی plugin کے لیے **Download** لنک پر کلک کریں
2. **Releases** صفحہ پر **Assets** کے نیچے سے `<plugin-name>.zip` ڈاؤن لوڈ کریں
3. **Claude desktop app** → **Settings** → **Plugins** → **Upload local plugin** پر جائیں
4. `.zip` فائل کو upload box میں drag کریں — plugin install ہو جائے گا

> ⚠️ GitHub کا "Download ZIP" بٹن (سبز Code بٹن) **استعمال نہ کریں** — یہ plugin کو `repo-main/` folder میں لپیٹتا ہے، validation ٹوٹ جاتا ہے۔ ہمیشہ **Releases tab سے release `.zip`** ڈاؤن لوڈ کریں۔

### آپشن 2 — Claude Code (CLI) — پورے خاندان کے لیے recommended

اگر آپ کے پاس Claude Code installed ہے، تو ایک ہی marketplace سے پورا خاندان install کریں:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

`indian-hc-drafting` کی جگہ جدول سے کوئی بھی plugin کا نام رکھیں۔

---

## 14 plugins

ہر plugin کے لیے release link کے ساتھ مرکزی README کا **The 14 plugins** جدول دیکھیں۔

---

## رازداری

Wolfgang Rush plugin خاندان آپ کا کوئی بھی data **جمع نہیں کرتا، محفوظ نہیں کرتا، یا منتقل نہیں کرتا۔** سب کچھ آپ کے مقامی Claude Code installation میں چلتا ہے۔ مکمل تفصیلات: [PRIVACY.md](PRIVACY.md)

## مصنف

[Wolfgang Rush](https://github.com/Wolfgangrush) — کھلے میں lawtech بناتا ہوا بھارتی وکیل۔

رابطہ: advrushikeshravindramahajan@gmail.com

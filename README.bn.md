# Wolfgang Rush — বাংলা

> ⚠️ **এই অনুবাদ সম্প্রদায়-অবদানের জন্য উন্মুক্ত।** উন্নতির জন্য, [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) খুলুন বা pull request পাঠান।

Claude Code-এর জন্য open-source plugin পরিবার — ভারতীয় আদালতে litigation drafting-এর জন্য। চৌদ্দটি আদালত-নির্দিষ্ট drafting plugin, প্রতিটি ছয়-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) সহ।

MIT লাইসেন্সের অধীনে। কোনো telemetry নেই। কোনো user account নেই। সম্পূর্ণভাবে আপনার স্থানীয় Claude Code installation-এ চলে।

---

## ইনস্টলেশন (Installation)

### বিকল্প ১ — Claude Desktop app (non-developer-এর জন্য সবচেয়ে সহজ)

1. নীচের তালিকা থেকে যেকোনো plugin-এর জন্য **Download** লিঙ্কে ক্লিক করুন
2. **Releases** পৃষ্ঠায় **Assets**-এর নীচে থেকে `<plugin-name>.zip` ডাউনলোড করুন
3. **Claude desktop app** → **Settings** → **Plugins** → **Upload local plugin**-এ যান
4. `.zip` ফাইলটি upload box-এ drag করুন — plugin ইনস্টল হবে

> ⚠️ GitHub-এর "Download ZIP" বোতাম (সবুজ Code বোতাম) **ব্যবহার করবেন না** — এটি plugin-কে `repo-main/` folder-এ মুড়িয়ে দেয়, validation ভাঙে। সর্বদা **Releases tab থেকে release `.zip`** ডাউনলোড করুন।

### বিকল্প ২ — Claude Code (CLI) — সম্পূর্ণ পরিবারের জন্য recommended

যদি আপনার কাছে Claude Code installed থাকে, তাহলে একটি marketplace থেকে সম্পূর্ণ পরিবার ইনস্টল করুন:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

`indian-hc-drafting`-এর জায়গায় তালিকা থেকে যেকোনো plugin-এর নাম দিন।

---

## 14 plugin

প্রতিটি plugin-এর জন্য release link সহ মূল README-এর **The 14 plugins** তালিকা দেখুন।

---

## গোপনীয়তা

Wolfgang Rush plugin পরিবার আপনার কোনো data **সংগ্রহ করে না, সংরক্ষণ করে না, বা প্রেরণ করে না।** সবকিছু আপনার স্থানীয় Claude Code installation-এ চলে। সম্পূর্ণ বিবরণ: [PRIVACY.md](PRIVACY.md)

## লেখক

[Wolfgang Rush](https://github.com/Wolfgangrush) — উন্মুক্তভাবে lawtech নির্মাণকারী ভারতীয় আইনজীবী।

যোগাযোগ: advrushikeshravindramahajan@gmail.com

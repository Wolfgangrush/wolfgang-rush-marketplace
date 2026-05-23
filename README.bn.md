# Wolfgang Rush — বাংলা

> ⚠️ **এই অনুবাদ সম্প্রদায়-অবদানের জন্য উন্মুক্ত।** উন্নতির জন্য, [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) খুলুন বা pull request পাঠান।

Claude Code-এর জন্য open-source plugin পরিবার — ভারতীয় আদালতে litigation drafting-এর জন্য। চৌদ্দটি আদালত-নির্দিষ্ট drafting plugin, প্রতিটি ছয়-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) সহ।

MIT লাইসেন্সের অধীনে। কোনো telemetry নেই। কোনো user account নেই। সম্পূর্ণভাবে আপনার স্থানীয় Claude Code installation-এ চলে।

---

## ইনস্টলেশন (Installation)

> ⚠️ **Claude Desktop app-এর "Upload local plugin" (drag-drop .zip) ফিচার এই plugins-এর সাথে কাজ করে না** — schema mismatch-এর কারণে। Desktop ব্যবহারকারীরা: নীচের Claude Code (CLI) পথটি ব্যবহার করুন, অথবা Anthropic propagation-এর জন্য অপেক্ষা করুন।

### Claude Code (CLI) — একমাত্র কার্যকর direct-install পথ

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

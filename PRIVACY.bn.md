# গোপনীয়তা নীতি — Wolfgang Rush plugin পরিবার

> ℹ️ **এটি সংক্ষিপ্ত অনুবাদ।** আইনগতভাবে প্রামাণিক সংস্করণ ইংরেজিতে [PRIVACY.md](PRIVACY.md)-এ রয়েছে।

**Plugin পরিবার:** Wolfgang Rush — Claude Code-এর জন্য open-source ভারতীয় আইনি drafting plugins
**প্রকাশক:** রুষিকেশ আর. মাহাজন, Wolfgang Rush নামে প্রকাশিত
**যোগাযোগ:** advrushikeshravindramahajan@gmail.com
**কার্যকর তারিখ:** ১৭ মে ২০২৬

---

## ১. Data সংগ্রহ

Wolfgang Rush plugin পরিবার **আপনার কোনো data সংগ্রহ করে না, সংরক্ষণ করে না, বা প্রেরণ করে না** — প্রকাশকের কাছে বা কোনো তৃতীয় পক্ষের কাছে।

## ২. Plugins কীভাবে কাজ করে

প্রতিটি plugin **সম্পূর্ণরূপে স্থানীয়ভাবে** আপনার Claude Code installation-এর মধ্যে চলে। Plugin-এর agents, skills, এবং templates আপনার স্থানীয় filesystem থেকে পড়া হয়। আপনার সরবরাহ করা case-folder contents (facts, prior pleadings, statutory anchors, prayer briefs, exhibits) স্থানীয়ভাবে Claude Code দ্বারা process করা হয়, এবং স্বাভাবিক Claude Code operation-এর পথে শুধুমাত্র আপনার এবং Anthropic-এর Claude API-এর মধ্যে প্রেরিত হয়।

প্রকাশক এই plugins সম্পর্কিত **কোনো** server, telemetry endpoint, analytics service, error-reporting service, license-verification service, বা data-collection infrastructure পরিচালনা করেন না।

## ৩. Anthropic-এ পাঠানো Data

Plugins-এর ব্যবহারে user prompts এবং case-folder contents আপনার নিজস্ব Claude Code installation দ্বারা Anthropic-এর Claude API-এ পাঠানো হয়। সেই data flow **Anthropic-এর Privacy Policy** দ্বারা পরিচালিত হয়, যা https://www.anthropic.com/legal/privacy-এ পাওয়া যায়।

প্রকাশক সেই data flow-এর একটি পক্ষ নন, user prompts বা case-folder contents-এর কোনো অ্যাক্সেস নেই, এবং কোনো generated output-এর কপি পান না।

## ৪. কোনো user account নেই

Plugins-এর জন্য কোনো user account, login, বা পরিচয় ধাপ প্রয়োজন নেই। কোনো registration, email signup, বা licence-key activation নেই।

## ৫. Source code স্বচ্ছতা

সম্পূর্ণ plugin source code MIT License-এর অধীনে https://github.com/Wolfgangrush-এ প্রকাশিত। ব্যবহারকারী, system administrators, এবং security reviewers যেকোনো সময় plugin code-এর প্রতিটি লাইন পরিদর্শন করতে পারেন।

## ৬. পেশাগত গোপনীয়তা

ব্যবহারকারীদের — বিশেষত আইনজীবী এবং law-firm staff — লক্ষ্য রাখা উচিত যে Claude Code-এ দেওয়া case-folder contents-এ Bharatiya Sakshya Adhiniyam ২০২৩-এর ধারা ১৩২ / Indian Evidence Act ১৮৭২-এর ধারা ১২৬-এর অধীনে advocate-client confidentiality বা অন্যান্য পেশাগত-গোপনীয়তা বাধ্যবাধকতা আকর্ষণ করতে পারে এমন উপাদান থাকতে পারে। Plugin-কে কী উপাদান সরবরাহ করতে হবে তা সিদ্ধান্ত আপনার পেশাগত দায়িত্ব।

---

সম্পূর্ণ আইনি পাঠের জন্য: [PRIVACY.md](PRIVACY.md)

# ਗੋਪਨੀਯਤਾ ਨੀਤੀ — Wolfgang Rush plugin ਪਰਿਵਾਰ

> ℹ️ **ਇਹ ਸੰਖੇਪ ਅਨੁਵਾਦ ਹੈ।** ਕਾਨੂੰਨੀ ਤੌਰ ਤੇ ਅਧਿਕਾਰਤ ਸੰਸਕਰਨ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ [PRIVACY.md](PRIVACY.md) ਤੇ ਹੈ।

**Plugin ਪਰਿਵਾਰ:** Wolfgang Rush — Claude Code ਲਈ open-source ਭਾਰਤੀ ਕਾਨੂੰਨੀ drafting plugins
**ਪ੍ਰਕਾਸ਼ਕ:** ਰੁਸ਼ੀਕੇਸ਼ ਆਰ. ਮਹਾਜਨ, Wolfgang Rush ਨਾਮ ਨਾਲ ਪ੍ਰਕਾਸ਼ਿਤ
**ਸੰਪਰਕ:** advrushikeshravindramahajan@gmail.com
**ਪ੍ਰਭਾਵੀ ਮਿਤੀ:** 17 ਮਈ 2026

---

## 1. Data ਇਕੱਠਾ ਕਰਨਾ

Wolfgang Rush plugin ਪਰਿਵਾਰ **ਤੁਹਾਡਾ ਕੋਈ data ਇਕੱਠਾ ਨਹੀਂ ਕਰਦਾ, ਸਟੋਰ ਨਹੀਂ ਕਰਦਾ, ਜਾਂ ਪ੍ਰਸਾਰਿਤ ਨਹੀਂ ਕਰਦਾ** — ਨਾ ਪ੍ਰਕਾਸ਼ਕ ਨੂੰ, ਨਾ ਕਿਸੇ ਤੀਜੀ ਧਿਰ ਨੂੰ।

## 2. Plugins ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ

ਹਰ plugin **ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਥਾਨਕ** ਤੁਹਾਡੇ Claude Code installation ਵਿੱਚ ਚੱਲਦਾ ਹੈ। Plugin ਦੇ agents, skills, ਅਤੇ templates ਤੁਹਾਡੇ ਸਥਾਨਕ filesystem ਤੋਂ ਪੜ੍ਹੇ ਜਾਂਦੇ ਹਨ। ਤੁਹਾਡੇ ਵੱਲੋਂ ਦਿੱਤੇ case-folder contents (facts, prior pleadings, statutory anchors, prayer briefs, exhibits) ਸਥਾਨਕ ਤੌਰ ਤੇ Claude Code ਦੁਆਰਾ process ਹੁੰਦੇ ਹਨ, ਅਤੇ ਆਮ Claude Code operation ਦੇ ਰਾਹ ਤੇ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਅਤੇ Anthropic ਦੇ Claude API ਵਿਚਕਾਰ ਪ੍ਰਸਾਰਿਤ ਹੁੰਦੇ ਹਨ।

ਪ੍ਰਕਾਸ਼ਕ ਇਨ੍ਹਾਂ plugins ਨਾਲ ਸੰਬੰਧਿਤ **ਕੋਈ ਵੀ** server, telemetry endpoint, analytics service, error-reporting service, license-verification service, ਜਾਂ data-collection infrastructure ਨਹੀਂ ਚਲਾਉਂਦੇ।

## 3. Anthropic ਨੂੰ ਭੇਜਿਆ Data

Plugin ਦੀ ਵਰਤੋਂ ਨਾਲ user prompts ਅਤੇ case-folder contents ਤੁਹਾਡੇ ਆਪਣੇ Claude Code installation ਰਾਹੀਂ Anthropic ਦੇ Claude API ਨੂੰ ਭੇਜੇ ਜਾਂਦੇ ਹਨ। ਉਹ data flow **Anthropic ਦੀ Privacy Policy** ਅਧੀਨ ਪ੍ਰਬੰਧਿਤ ਹੈ, ਜੋ https://www.anthropic.com/legal/privacy ਤੇ ਉਪਲਬਧ ਹੈ।

ਪ੍ਰਕਾਸ਼ਕ ਉਸ data flow ਵਿੱਚ ਇੱਕ ਧਿਰ ਨਹੀਂ ਹਨ, user prompts ਜਾਂ case-folder contents ਤੱਕ ਕੋਈ ਪਹੁੰਚ ਨਹੀਂ ਹੈ, ਅਤੇ ਕਿਸੇ ਵੀ generated output ਦੀ ਕਾਪੀ ਪ੍ਰਾਪਤ ਨਹੀਂ ਕਰਦੇ।

## 4. ਕੋਈ user account ਨਹੀਂ

Plugins ਲਈ ਕੋਈ user account, login, ਜਾਂ ਪਛਾਣ ਕਦਮ ਦੀ ਲੋੜ ਨਹੀਂ। ਕੋਈ registration, email signup, ਜਾਂ licence-key activation ਨਹੀਂ।

## 5. Source code ਪਾਰਦਰਸ਼ਤਾ

ਪੂਰਾ plugin source code MIT License ਅਧੀਨ https://github.com/Wolfgangrush ਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਹੈ। ਉਪਯੋਗਕਰਤਾ, system administrators, ਅਤੇ security reviewers ਕਿਸੇ ਵੀ ਸਮੇਂ plugin code ਦੀ ਹਰ ਲਾਈਨ ਜਾਂਚ ਸਕਦੇ ਹਨ।

## 6. ਪੇਸ਼ੇਵਰ ਗੋਪਨੀਯਤਾ

ਉਪਯੋਗਕਰਤਾਵਾਂ ਨੂੰ — ਖਾਸ ਕਰਕੇ ਵਕੀਲਾਂ ਅਤੇ law-firm staff ਨੂੰ — ਨੋਟ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ ਕਿ Claude Code ਨੂੰ ਦਿੱਤੇ ਗਏ case-folder contents ਵਿੱਚ Bharatiya Sakshya Adhiniyam 2023 ਦੀ ਧਾਰਾ 132 / Indian Evidence Act 1872 ਦੀ ਧਾਰਾ 126 ਅਧੀਨ advocate-client confidentiality ਜਾਂ ਹੋਰ ਪੇਸ਼ੇਵਰ-ਗੋਪਨੀਯਤਾ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਨੂੰ ਆਕਰਸ਼ਿਤ ਕਰਨ ਵਾਲੀ ਸਮੱਗਰੀ ਹੋ ਸਕਦੀ ਹੈ। Plugin ਨੂੰ ਕਿਹੜੀ ਸਮੱਗਰੀ ਦੇਣੀ ਹੈ ਦਾ ਫੈਸਲਾ ਤੁਹਾਡੀ ਪੇਸ਼ੇਵਰ ਜ਼ਿੰਮੇਵਾਰੀ ਹੈ।

---

ਪੂਰੇ ਕਾਨੂੰਨੀ ਪਾਠ ਲਈ: [PRIVACY.md](PRIVACY.md)

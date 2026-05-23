# Wolfgang Rush — ਪੰਜਾਬੀ

> ⚠️ **ਇਹ ਅਨੁਵਾਦ ਕਮਿਊਨਿਟੀ-ਯੋਗਦਾਨ ਲਈ ਖੁੱਲ੍ਹਾ ਹੈ।** ਸੁਧਾਰਾਂ ਲਈ, [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) ਖੋਲ੍ਹੋ ਜਾਂ pull request ਭੇਜੋ।

Claude Code ਲਈ open-source plugin ਪਰਿਵਾਰ — ਭਾਰਤੀ ਅਦਾਲਤਾਂ ਲਈ litigation drafting ਵਾਸਤੇ। ਚੌਦਾਂ ਅਦਾਲਤ-ਵਿਸ਼ੇਸ਼ drafting plugin, ਹਰ ਇੱਕ ਛੇ-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) ਨਾਲ।

MIT ਲਾਇਸੰਸ ਅਧੀਨ। ਕੋਈ telemetry ਨਹੀਂ। ਕੋਈ user account ਨਹੀਂ। ਪੂਰੀ ਤਰ੍ਹਾਂ ਤੁਹਾਡੇ ਸਥਾਨਕ Claude Code installation ਵਿੱਚ ਚੱਲਦਾ ਹੈ।

---

## ਇੰਸਟਾਲੇਸ਼ਨ (Installation)

### ਚੋਣ 1 — Claude Desktop app (non-developer ਲਈ ਆਸਾਨ)

1. ਹੇਠਾਂ ਦਿੱਤੀ ਸਾਰਣੀ ਤੋਂ ਕਿਸੇ ਵੀ plugin ਲਈ **Download** ਲਿੰਕ 'ਤੇ ਕਲਿੱਕ ਕਰੋ
2. **Releases** ਪੰਨੇ 'ਤੇ **Assets** ਹੇਠੋਂ `<plugin-name>.zip` ਡਾਊਨਲੋਡ ਕਰੋ
3. **Claude desktop app** → **Settings** → **Plugins** → **Upload local plugin** 'ਤੇ ਜਾਓ
4. `.zip` ਫਾਈਲ ਨੂੰ upload box ਵਿੱਚ drag ਕਰੋ — plugin install ਹੋਵੇਗਾ

> ⚠️ GitHub ਦਾ "Download ZIP" ਬਟਨ (ਹਰਾ Code ਬਟਨ) **ਨਾ ਵਰਤੋ** — ਇਹ plugin ਨੂੰ `repo-main/` folder ਵਿੱਚ ਲਪੇਟਦਾ ਹੈ, validation ਟੁੱਟਦਾ ਹੈ। ਹਮੇਸ਼ਾ **Releases tab ਤੋਂ release `.zip`** ਡਾਊਨਲੋਡ ਕਰੋ।

### ਚੋਣ 2 — Claude Code (CLI) — ਪੂਰੇ ਪਰਿਵਾਰ ਲਈ recommended

ਜੇ ਤੁਹਾਡੇ ਕੋਲ Claude Code installed ਹੈ, ਤਾਂ ਇੱਕੋ marketplace ਤੋਂ ਪੂਰਾ ਪਰਿਵਾਰ install ਕਰੋ:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

`indian-hc-drafting` ਦੀ ਥਾਂ ਸਾਰਣੀ ਤੋਂ ਕੋਈ ਵੀ plugin ਦਾ ਨਾਮ ਪਾਓ।

---

## 14 plugin

ਹਰ plugin ਲਈ release link ਨਾਲ ਮੁੱਖ README ਦੀ **The 14 plugins** ਸਾਰਣੀ ਦੇਖੋ।

---

## ਗੋਪਨੀਯਤਾ

Wolfgang Rush plugin ਪਰਿਵਾਰ ਤੁਹਾਡਾ ਕੋਈ ਵੀ data **ਇਕੱਠਾ ਨਹੀਂ ਕਰਦਾ, ਸਟੋਰ ਨਹੀਂ ਕਰਦਾ, ਜਾਂ ਪ੍ਰਸਾਰਿਤ ਨਹੀਂ ਕਰਦਾ।** ਸਭ ਕੁਝ ਤੁਹਾਡੇ ਸਥਾਨਕ Claude Code installation ਵਿੱਚ ਚੱਲਦਾ ਹੈ। ਪੂਰੀ ਜਾਣਕਾਰੀ: [PRIVACY.md](PRIVACY.md)

## ਲੇਖਕ

[Wolfgang Rush](https://github.com/Wolfgangrush) — ਖੁੱਲ੍ਹੇ ਵਿੱਚ lawtech ਬਣਾ ਰਿਹਾ ਭਾਰਤੀ ਵਕੀਲ।

ਸੰਪਰਕ: advrushikeshravindramahajan@gmail.com

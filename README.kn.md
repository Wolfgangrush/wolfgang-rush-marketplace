# Wolfgang Rush — ಕನ್ನಡ

> ⚠️ **ಈ ಅನುವಾದ ಸಮುದಾಯ-ಕೊಡುಗೆಗೆ ತೆರೆದಿದೆ.** ಸುಧಾರಣೆಗಳಿಗಾಗಿ, [issue](https://github.com/Wolfgangrush/wolfgang-rush-marketplace/issues) ತೆರೆಯಿರಿ ಅಥವಾ pull request ಕಳುಹಿಸಿ.

Claude Code ಗಾಗಿ open-source plugin ಕುಟುಂಬ — ಭಾರತೀಯ ನ್ಯಾಯಾಲಯಗಳಿಗೆ litigation drafting ಗಾಗಿ. ಹದಿನಾಲ್ಕು ನ್ಯಾಯಾಲಯ-ನಿರ್ದಿಷ್ಟ drafting plugin, ಪ್ರತಿಯೊಂದೂ ಆರು-agent pipeline (Reader → Format → Drafter → Verifier → Refiner → Overseer) ಜೊತೆಗೆ.

MIT ಪರವಾನಗಿ ಅಡಿಯಲ್ಲಿ. telemetry ಇಲ್ಲ. user account ಇಲ್ಲ. ಸಂಪೂರ್ಣವಾಗಿ ನಿಮ್ಮ ಸ್ಥಳೀಯ Claude Code installation ನಲ್ಲಿ ಚಲಿಸುತ್ತದೆ.

---

## ಇನ್‌ಸ್ಟಾಲೇಶನ್ (Installation)

> ⚠️ **Claude Desktop app ನ "Upload local plugin" (drag-drop .zip) ವೈಶಿಷ್ಟ್ಯ ಈ plugins ನೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ** — schema mismatch ಕಾರಣದಿಂದ. Desktop ಬಳಕೆದಾರರು: ಕೆಳಗಿನ Claude Code (CLI) ಮಾರ್ಗವನ್ನು ಬಳಸಿ, ಅಥವಾ Anthropic propagation ಗಾಗಿ ಕಾಯಿರಿ.

### Claude Code (CLI) — ಏಕೈಕ ಕಾರ್ಯನಿರ್ವಹಿಸುವ direct-install ಮಾರ್ಗ

ನಿಮ್ಮಲ್ಲಿ Claude Code installed ಇದ್ದರೆ, ಒಂದೇ marketplace ನಿಂದ ಸಂಪೂರ್ಣ ಕುಟುಂಬವನ್ನು install ಮಾಡಿ:

```bash
/plugin marketplace add Wolfgangrush/wolfgang-rush-marketplace
/plugin install indian-hc-drafting@wolfgang-rush
```

`indian-hc-drafting` ಸ್ಥಾನದಲ್ಲಿ ಕೋಷ್ಟಕದಿಂದ ಯಾವುದೇ plugin ಹೆಸರನ್ನು ಇರಿಸಿ.

---

## 14 plugins

ಪ್ರತಿ plugin ಗಾಗಿ release link ಗಳೊಂದಿಗೆ ಮುಖ್ಯ README ನ **The 14 plugins** ಕೋಷ್ಟಕವನ್ನು ನೋಡಿ.

---

## ಗೌಪ್ಯತೆ

Wolfgang Rush plugin ಕುಟುಂಬವು ನಿಮ್ಮ ಯಾವುದೇ data ಅನ್ನು **ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ, ಸಂಗ್ರಹಿಸಿಡುವುದಿಲ್ಲ, ಅಥವಾ ಪ್ರಸಾರ ಮಾಡುವುದಿಲ್ಲ.** ಎಲ್ಲವೂ ನಿಮ್ಮ ಸ್ಥಳೀಯ Claude Code installation ನಲ್ಲಿ ಚಲಿಸುತ್ತದೆ. ಪೂರ್ಣ ವಿವರಗಳು: [PRIVACY.md](PRIVACY.md)

## ಲೇಖಕ

[Wolfgang Rush](https://github.com/Wolfgangrush) — ಮುಕ್ತವಾಗಿ lawtech ನಿರ್ಮಿಸುತ್ತಿರುವ ಭಾರತೀಯ ವಕೀಲ.

ಸಂಪರ್ಕ: advrushikeshravindramahajan@gmail.com

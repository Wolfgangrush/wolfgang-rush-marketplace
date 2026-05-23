# ಗೌಪ್ಯತೆ ನೀತಿ — Wolfgang Rush plugin ಕುಟುಂಬ

> ℹ️ **ಇದು ಸಂಕ್ಷಿಪ್ತ ಅನುವಾದ.** ಕಾನೂನುಬದ್ಧವಾಗಿ ಅಧಿಕೃತ ಆವೃತ್ತಿ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ [PRIVACY.md](PRIVACY.md) ನಲ್ಲಿದೆ.

**Plugin ಕುಟುಂಬ:** Wolfgang Rush — Claude Code ಗಾಗಿ open-source ಭಾರತೀಯ ಕಾನೂನು drafting plugins
**ಪ್ರಕಾಶಕ:** ರುಷಿಕೇಶ್ ಆರ್. ಮಹಾಜನ್, Wolfgang Rush ಎಂಬ ಹೆಸರಿನಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ
**ಸಂಪರ್ಕ:** advrushikeshravindramahajan@gmail.com
**ಜಾರಿಗೆ ಬಂದ ದಿನಾಂಕ:** ಮೇ 17, 2026

---

## 1. Data ಸಂಗ್ರಹ

Wolfgang Rush plugin ಕುಟುಂಬವು **ನಿಮ್ಮ ಯಾವುದೇ data ಯನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ, ಸಂಗ್ರಹಿಸಿಡುವುದಿಲ್ಲ, ಅಥವಾ ಪ್ರಸಾರ ಮಾಡುವುದಿಲ್ಲ** — ಪ್ರಕಾಶಕರಿಗೆ ಅಥವಾ ಯಾವುದೇ ಮೂರನೇ ಪಕ್ಷಕ್ಕೆ.

## 2. Plugins ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ

ಪ್ರತಿ plugin **ಸಂಪೂರ್ಣವಾಗಿ ಸ್ಥಳೀಯವಾಗಿ** ನಿಮ್ಮ Claude Code installation ನಲ್ಲಿ ಚಲಿಸುತ್ತದೆ. Plugin ನ agents, skills, ಮತ್ತು templates ನಿಮ್ಮ ಸ್ಥಳೀಯ filesystem ನಿಂದ ಓದಲಾಗುತ್ತದೆ. ನೀವು ಒದಗಿಸಿದ case-folder contents (facts, prior pleadings, statutory anchors, prayer briefs, exhibits) ಸ್ಥಳೀಯವಾಗಿ Claude Code ನಿಂದ process ಆಗುತ್ತದೆ, ಮತ್ತು ಸಾಮಾನ್ಯ Claude Code operation ಮಾರ್ಗದಲ್ಲಿ ಕೇವಲ ನಿಮ್ಮ ಮತ್ತು Anthropic ನ Claude API ನಡುವೆ ಮಾತ್ರ ಪ್ರಸಾರವಾಗುತ್ತದೆ.

ಪ್ರಕಾಶಕರು ಈ plugins ಗೆ ಸಂಬಂಧಿಸಿದ **ಯಾವುದೇ** server, telemetry endpoint, analytics service, error-reporting service, license-verification service, ಅಥವಾ data-collection infrastructure ಚಲಾಯಿಸುವುದಿಲ್ಲ.

## 3. Anthropic ಗೆ ಕಳುಹಿಸಲಾದ Data

Plugin ಬಳಕೆಯಿಂದ user prompts ಮತ್ತು case-folder contents ನಿಮ್ಮ ಸ್ವಂತ Claude Code installation ಮೂಲಕ Anthropic ನ Claude API ಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ಆ data flow **Anthropic ನ Privacy Policy** ಅಡಿಯಲ್ಲಿ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ, ಅದು https://www.anthropic.com/legal/privacy ನಲ್ಲಿ ಲಭ್ಯವಿದೆ.

ಪ್ರಕಾಶಕರು ಆ data flow ನಲ್ಲಿ ಒಂದು ಪಕ್ಷದವರಲ್ಲ, user prompts ಅಥವಾ case-folder contents ಗೆ ಯಾವುದೇ ಪ್ರವೇಶವಿಲ್ಲ, ಮತ್ತು ಯಾವುದೇ generated output ನ ಪ್ರತಿಯನ್ನು ಪಡೆಯುವುದಿಲ್ಲ.

## 4. ಯಾವುದೇ user account ಇಲ್ಲ

Plugins ಗೆ ಯಾವುದೇ user account, login, ಅಥವಾ ಗುರುತಿನ ಹಂತದ ಅಗತ್ಯವಿಲ್ಲ. ಯಾವುದೇ registration, email signup, ಅಥವಾ licence-key activation ಇಲ್ಲ.

## 5. Source code ಪಾರದರ್ಶಕತೆ

ಸಂಪೂರ್ಣ plugin source code MIT License ಅಡಿಯಲ್ಲಿ https://github.com/Wolfgangrush ನಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ. ಬಳಕೆದಾರರು, system administrators, ಮತ್ತು security reviewers ಯಾವುದೇ ಸಮಯದಲ್ಲಿ plugin code ನ ಪ್ರತಿ ಸಾಲನ್ನು ಪರಿಶೀಲಿಸಬಹುದು.

## 6. ವೃತ್ತಿಪರ ಗೌಪ್ಯತೆ

ಬಳಕೆದಾರರು — ವಿಶೇಷವಾಗಿ ವಕೀಲರು ಮತ್ತು law-firm staff — Claude Code ಗೆ ನೀಡಲಾದ case-folder contents ನಲ್ಲಿ Bharatiya Sakshya Adhiniyam 2023 ರ ಕಲಂ 132 / Indian Evidence Act 1872 ರ ಕಲಂ 126 ಅಡಿಯಲ್ಲಿ advocate-client confidentiality ಅಥವಾ ಇತರ ವೃತ್ತಿಪರ-ಗೌಪ್ಯತೆ ಕರ್ತವ್ಯಗಳನ್ನು ಆಕರ್ಷಿಸುವ ವಸ್ತುಗಳಿರಬಹುದು ಎಂಬುದನ್ನು ಗಮನಿಸಬೇಕು. Plugin ಗೆ ಯಾವ ವಸ್ತುಗಳನ್ನು ಒದಗಿಸಬೇಕು ಎಂಬ ನಿರ್ಧಾರ ನಿಮ್ಮ ವೃತ್ತಿಪರ ಜವಾಬ್ದಾರಿಯಾಗಿದೆ.

---

ಸಂಪೂರ್ಣ ಕಾನೂನು ಪಠ್ಯಕ್ಕಾಗಿ: [PRIVACY.md](PRIVACY.md)

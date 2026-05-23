# സ്വകാര്യതാ നയം — Wolfgang Rush plugin കുടുംബം

> ℹ️ **ഇത് സംക്ഷിപ്ത വിവർത്തനമാണ്.** നിയമപരമായി ആധികാരിക പതിപ്പ് ഇംഗ്ലീഷിൽ [PRIVACY.md](PRIVACY.md)-ൽ ഉണ്ട്.

**Plugin കുടുംബം:** Wolfgang Rush — Claude Code-നായുള്ള open-source ഇന്ത്യൻ നിയമ drafting plugins
**പ്രസാധകൻ:** രുഷികേശ് ആർ. മഹാജൻ, Wolfgang Rush എന്ന പേരിൽ പ്രസിദ്ധീകരിക്കുന്നു
**ബന്ധപ്പെടാൻ:** advrushikeshravindramahajan@gmail.com
**പ്രാബല്യത്തിലുള്ള തീയതി:** മേയ് 17, 2026

---

## 1. Data ശേഖരണം

Wolfgang Rush plugin കുടുംബം **നിങ്ങളുടെ ഒരു data-യും ശേഖരിക്കില്ല, സംഭരിക്കില്ല, അല്ലെങ്കിൽ പ്രക്ഷേപണം ചെയ്യില്ല** — പ്രസാധകന് അല്ലെങ്കിൽ ഒരു മൂന്നാം കക്ഷിക്കും.

## 2. Plugins എങ്ങനെ പ്രവർത്തിക്കുന്നു

ഓരോ plugin-ഉം **പൂർണ്ണമായും പ്രാദേശികമായി** നിങ്ങളുടെ Claude Code installation-ൽ പ്രവർത്തിക്കുന്നു. Plugin-ന്റെ agents, skills, പിന്നെ templates നിങ്ങളുടെ പ്രാദേശിക filesystem-ൽ നിന്ന് വായിക്കപ്പെടുന്നു. നിങ്ങൾ നൽകുന്ന case-folder contents (facts, prior pleadings, statutory anchors, prayer briefs, exhibits) പ്രാദേശികമായി Claude Code വഴി process ചെയ്യപ്പെടുന്നു, പിന്നെ സാധാരണ Claude Code operation-ന്റെ വഴിയിൽ നിങ്ങൾക്കും Anthropic-ന്റെ Claude API-ക്കും ഇടയിൽ മാത്രം പ്രക്ഷേപണം ചെയ്യപ്പെടുന്നു.

പ്രസാധകൻ ഈ plugins-മായി ബന്ധപ്പെട്ട് **ഏതെങ്കിലും** server, telemetry endpoint, analytics service, error-reporting service, license-verification service, അല്ലെങ്കിൽ data-collection infrastructure പ്രവർത്തിപ്പിക്കുന്നില്ല.

## 3. Anthropic-ലേക്ക് അയച്ച Data

Plugin-ന്റെ ഉപയോഗത്തിലൂടെ user prompts-ഉം case-folder contents-ഉം നിങ്ങളുടെ സ്വന്തം Claude Code installation വഴി Anthropic-ന്റെ Claude API-ലേക്ക് അയക്കപ്പെടുന്നു. ആ data flow **Anthropic-ന്റെ Privacy Policy** പ്രകാരം നിയന്ത്രിക്കപ്പെടുന്നു, അത് https://www.anthropic.com/legal/privacy-ൽ ലഭ്യമാണ്.

പ്രസാധകൻ ആ data flow-ൽ ഒരു കക്ഷിയല്ല, user prompts അല്ലെങ്കിൽ case-folder contents-ലേക്ക് യാതൊരു ആക്സസും ഇല്ല, ഒപ്പം ഒരു generated output-ന്റെയും പകർപ്പ് സ്വീകരിക്കുന്നില്ല.

## 4. User account ഇല്ല

Plugins-ന് ഒരു user account, login, അല്ലെങ്കിൽ തിരിച്ചറിയൽ ഘട്ടം ആവശ്യമില്ല. ഒരു registration, email signup, അല്ലെങ്കിൽ licence-key activation ഇല്ല.

## 5. Source code സുതാര്യത

പൂർണ്ണ plugin source code MIT License-ന് കീഴിൽ https://github.com/Wolfgangrush-ൽ പ്രസിദ്ധീകരിക്കപ്പെട്ടിരിക്കുന്നു. ഉപയോക്താക്കൾ, system administrators, പിന്നെ security reviewers ഏതെങ്കിലും സമയത്ത് plugin code-ന്റെ ഓരോ വരിയും പരിശോധിക്കാം.

## 6. പ്രൊഫഷണൽ രഹസ്യാത്മകത

ഉപയോക്താക്കൾ — പ്രത്യേകിച്ച് അഭിഭാഷകരും law-firm staff-ഉം — ശ്രദ്ധിക്കണം: Claude Code-ന് നൽകുന്ന case-folder contents-ൽ Bharatiya Sakshya Adhiniyam 2023-ന്റെ വകുപ്പ് 132 / Indian Evidence Act 1872-ന്റെ വകുപ്പ് 126-ന് കീഴിലുള്ള advocate-client confidentiality അല്ലെങ്കിൽ മറ്റ് പ്രൊഫഷണൽ-രഹസ്യാത്മകത ബാധ്യതകൾ ആകർഷിക്കാവുന്ന വസ്തുക്കൾ ഉൾപ്പെട്ടേക്കാം. Plugin-ന് ഏത് വസ്തുക്കൾ നൽകണം എന്ന തീരുമാനം നിങ്ങളുടെ പ്രൊഫഷണൽ ഉത്തരവാദിത്വമാണ്.

---

പൂർണ്ണ നിയമപാഠത്തിന്: [PRIVACY.md](PRIVACY.md)

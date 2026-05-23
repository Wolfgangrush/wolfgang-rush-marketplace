# గోప్యతా విధానం — Wolfgang Rush plugin కుటుంబం

> ℹ️ **ఇది సంక్షిప్త అనువాదం.** న్యాయపరంగా అధికారిక సంస్కరణ ఇంగ్లీష్‌లో [PRIVACY.md](PRIVACY.md) లో ఉంది.

**Plugin కుటుంబం:** Wolfgang Rush — Claude Code కోసం open-source భారతీయ చట్టపరమైన drafting plugins
**ప్రచురణకర్త:** రుషికేష్ ఆర్. మహాజన్, Wolfgang Rush పేరుతో ప్రచురిస్తున్నారు
**సంప్రదింపులు:** advrushikeshravindramahajan@gmail.com
**అమల్లోకి వచ్చిన తేదీ:** మే 17, 2026

---

## 1. Data సేకరణ

Wolfgang Rush plugin కుటుంబం **మీ ఏ data ని కూడా సేకరించదు, నిల్వ చేయదు, లేదా ప్రసారం చేయదు** — ప్రచురణకర్తకు గానీ, ఏ మూడవ పక్షానికి గానీ.

## 2. Plugins ఎలా పనిచేస్తాయి

ప్రతి plugin **పూర్తిగా స్థానికంగా** మీ Claude Code installation లో నడుస్తుంది. Plugin యొక్క agents, skills, మరియు templates మీ స్థానిక filesystem నుండి చదవబడతాయి. మీరు అందించిన case-folder contents (facts, prior pleadings, statutory anchors, prayer briefs, exhibits) Claude Code ద్వారా స్థానికంగా process చేయబడతాయి, మరియు సాధారణ Claude Code operation మార్గంలో మీకు మరియు Anthropic యొక్క Claude API మధ్య మాత్రమే ప్రసారం చేయబడతాయి.

ప్రచురణకర్త ఈ plugins కు సంబంధించి **ఏ** server, telemetry endpoint, analytics service, error-reporting service, license-verification service, లేదా data-collection infrastructure నడిపించడం లేదు.

## 3. Anthropic కి పంపబడిన Data

Plugin వాడకం వల్ల user prompts మరియు case-folder contents మీ సొంత Claude Code installation ద్వారా Anthropic యొక్క Claude API కి పంపబడతాయి. ఆ data flow **Anthropic యొక్క Privacy Policy** క్రింద నిర్వహించబడుతుంది, ఇది https://www.anthropic.com/legal/privacy లో అందుబాటులో ఉంది.

ప్రచురణకర్త ఆ data flow లో ఒక పక్షం కాదు, user prompts లేదా case-folder contents కి ఎటువంటి యాక్సెస్ లేదు, మరియు ఏ generated output యొక్క కాపీ కూడా పొందరు.

## 4. User account లేదు

Plugins కు ఏ user account, login, లేదా గుర్తింపు దశ అవసరం లేదు. ఎటువంటి registration, email signup, లేదా licence-key activation లేదు.

## 5. Source code పారదర్శకత

పూర్తి plugin source code MIT License క్రింద https://github.com/Wolfgangrush లో ప్రచురించబడింది. వినియోగదారులు, system administrators, మరియు security reviewers ఎప్పుడైనా plugin code యొక్క ప్రతి పంక్తిని పరిశీలించవచ్చు.

## 6. వృత్తిపరమైన గోప్యత

వినియోగదారులు — ముఖ్యంగా న్యాయవాదులు మరియు law-firm staff — Claude Code కి ఇచ్చిన case-folder contents లో Bharatiya Sakshya Adhiniyam 2023 యొక్క సెక్షన్ 132 / Indian Evidence Act 1872 యొక్క సెక్షన్ 126 క్రింద advocate-client confidentiality లేదా ఇతర వృత్తిపరమైన గోప్యత బాధ్యతలను ఆకర్షించే విషయాలు ఉండవచ్చని గమనించాలి. Plugin కి ఏ విషయాన్ని అందించాలనే నిర్ణయం మీ వృత్తిపరమైన బాధ్యత.

---

పూర్తి చట్టపరమైన పాఠం కోసం: [PRIVACY.md](PRIVACY.md)

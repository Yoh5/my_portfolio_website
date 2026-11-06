import React from "react";
import { useT } from "../context/lang";

// Les projets sont groupés, pas empilés. Une liste plate de quinze cartes met
// « prédiction de survie du Titanic » à côté d'un agent en production : le
// lecteur qui survole en tire que tout se vaut. Le groupe dit d'emblée ce qu'il
// regarde, et l'ordre des groupes dit ce qui compte.
const GROUPS = [
  {
    id: "voice",
    title: { fr: "Agents vocaux", en: "Voice agents" },
    note: {
      fr: "Le modèle observe, le code décide. La mesure vit dans du code testé, pas dans le prompt.",
      en: "The model observes, the code decides. The measurement lives in tested code, not in the prompt.",
    },
    projects: [
      {
        title: "Probe",
        resume: {
          fr: "Chaque question est bâtie sur la réponse précédente. Quatre signaux de diction mesurés par du code, jamais par le modèle. 6 langues, 178 tests.",
          en: "Every question is built on the previous answer. Four speech signals measured by code, never by the model. 6 languages, 178 tests.",
        },
        description: {
          fr: "Un entretien de présélection qu'on ne peut pas préparer. Une seule question est écrite d'avance ; toutes les suivantes sont construites à partir de ce que le candidat vient de dire. Après chaque réponse, du code mesure quatre signaux de diction — comparés au même candidat une minute plus tôt — et rend une instruction à l'intervieweur. Le modèle de langage ne voit jamais les chiffres et ne choisit jamais l'instruction : il choisit la formulation. Le rapport montre toute cette chaîne, vérifiable contre la transcription. Six langues, 178 tests.",
          en: "A screening interview you cannot rehearse for. Exactly one question is written in advance; every later one is built from what the candidate has just said. After each answer, code measures four speech signals — compared against the same candidate a minute earlier — and returns an instruction to the interviewer. The language model never sees the figures and never picks the instruction: it picks the wording. The report shows that whole chain, checkable against the transcript. Six languages, 178 tests.",
        },
        tech: ["AssemblyAI Voice Agent", "Realtime STT", "Python", "FastAPI", "WebSocket", "Web Audio"],
        github: "https://github.com/Yoh5/probe",
        demo: "https://probe-wkiz.onrender.com",
        image: "/my_portfolio_website/images/cover-probe.jpg",
        vedette: true,
        color: "linear-gradient(135deg, #6A2E5C, #0F6B60)"
      },
      {
        title: "Unscripted",
        resume: {
          fr: "Repère qu'une réponse est lue plutôt que pensée. 89 % de justesse, une session laissée de côté à chaque fois.",
          en: "Spots an answer that is read rather than thought through. 89 % accuracy under leave-one-session-out.",
        },
        description: {
          fr: "La mesure qui est derrière Probe, seule : un entretien oral qui remarque qu'une réponse sonne lue plutôt que pensée sur le moment. Quatre signaux — vocabulaire proche de l'écrit, hésitations, propositions à rallonge, enchaînements sans pause — chacun relatif à l'échauffement du locuteur lui-même. 89 % de justesse en laissant une session de côté à chaque fois, sur 20 réponses annotées d'un seul locuteur : et le rapport l'écrit sur chaque page.",
          en: "The measurement behind Probe, on its own: a spoken interview that notices when an answer sounds read rather than thought through on the spot. Four signals — written-like vocabulary, hesitations, run-on clauses, transitions with no pause — each relative to the speaker's own warm-up. 89 % accuracy under leave-one-session-out, on 20 annotated answers from a single speaker: and the report says so on every page.",
        },
        tech: ["Speechmatics", "Python", "FastAPI", "scikit-learn", "Web Audio"],
        github: "https://github.com/Yoh5/unscripted",
        demo: "https://unscripted.onrender.com",
        image: "/my_portfolio_website/images/cover-unscripted.jpg",
        color: "linear-gradient(135deg, #0071E3, #34C759)"
      }
    ]
  },
  {
    id: "agents",
    title: { fr: "Agents qui font le travail", en: "Agents that do the work" },
    note: {
      fr: "Chacun poursuit un objectif chiffré et s'arrête quand il l'atteint, au lieu de générer jusqu'à épuisement.",
      en: "Each one pursues a measured goal and stops when it reaches it, instead of generating until it runs out.",
    },
    projects: [
      {
        title: "Holokia Interview Agent",
        resume: {
          fr: "Agent d'entretien RH en production, utilisé chaque jour par des recruteurs. Six boucles de raisonnement.",
          en: "An HR interview agent in production, used daily by recruiters. Six reasoning loops.",
        },
        description: {
          fr: "Agent IA d'entretien RH autonome (WhatsApp + web), déployé en production et utilisé quotidiennement par des recruteurs. Six boucles de raisonnement — planification, auto-critique, mémoire candidat, sélection d'action, apprentissage du feedback — questions ancrées sur la fiche de poste et le CV, notation sur quatre axes, indice anti-triche, rapport PDF. Code client privé : architecture présentable sur demande.",
          en: "An autonomous AI recruitment-interview agent (WhatsApp + web), deployed in production and used daily by recruiters. Six reasoning loops — planning, self-critique, candidate memory, action selection, learning from feedback — questions anchored to the job description and the CV, scoring on four axes, an anti-cheating signal, a PDF report. Client code is private: the architecture can be walked through on request.",
        },
        tech: ["Python", "FastAPI", "LangGraph", "OpenAI/Groq", "Supabase", "Docker"],
        github: null,
        demo: null,
        image: "/my_portfolio_website/images/cover-holokia.jpg",
        vedette: true,
        color: "linear-gradient(135deg, #7b2ff7, #f107a3)"
      },
      {
        title: "Spend Mandate",
        resume:
          {
          fr: "Un mandat de d\u00e9pense qu'un agent ne peut pas franchir. Le plafond est tenu par du code avant l'appel PayPal, jamais audit\u00e9 apr\u00e8s. 121 tests.",
          en: "A spend mandate an agent cannot cross. The cap is enforced by code before the PayPal call, never audited after. 121 tests.",
        },
        description: {
          fr: "Un agent qui d\u00e9pense est le cas le plus tranchant de l'agentivit\u00e9 excessive : un paiement ne se d\u00e9fait pas. Le mandat \u2014 plafond par transaction, plafond total, fen\u00eatre de validit\u00e9, liste de marchands \u2014 est v\u00e9rifi\u00e9 par le code AVANT l'appel au fournisseur. Un refus n'appelle donc jamais PayPal : ni rembours\u00e9, ni annul\u00e9, jamais envoy\u00e9. Et chaque d\u00e9cision est inscrite dans un registre cha\u00een\u00e9 par hachage, les refus compris \u2014 un registre qui ne montrerait que les succ\u00e8s d\u00e9crirait un agent exemplaire qui n'a jamais rien tent\u00e9 d'interdit. La sc\u00e8ne adverse ne demande pas au mod\u00e8le de d\u00e9sob\u00e9ir : elle change les faits de la page. Mesur\u00e9 contre gpt-5.5, l'injection classique est suivie 0 fois sur 5, la page aux faits modifi\u00e9s 5 fois sur 5 \u2014 et c'est la liste de marchands qui arr\u00eate le paiement.",
          en: "An agent that spends money is the sharpest case of excessive agency: a payment cannot be undone. The mandate — per-transaction cap, total cap, validity window, merchant allowlist — is checked by code BEFORE the call to the provider. A refusal therefore never reaches PayPal: not refunded, not reversed, never sent. And every decision is written into a hash-chained register, refusals included — a register showing only successes would describe an exemplary agent that never tried anything forbidden. The adversarial scene does not ask the model to disobey: it changes the facts on the page. Measured against gpt-5.5, the classic injection is followed 0 times out of 5, the altered-facts page 5 out of 5 — and it is the merchant allowlist that stops the payment.",
        },
        tech: ["Python", "PayPal Orders v2", "Sandbox", "Biblioth\u00e8que standard", "SHA-256", "Render"],
        github: "https://github.com/Yoh5/paypal-mandat",
        demo: "https://spend-mandate-demo.onrender.com",
        image: "/my_portfolio_website/images/cover-spendmandate.jpg",
        vedette: true,
        color: "linear-gradient(135deg, #1e293b, #b91c1c)"
      },
      {
        title: "Carbon Gate",
        resume: {
          fr: "Une CI qui chiffre son propre carbone et refuse d'annoncer un gain qu'elle ne peut pas prouver. 191 tests.",
          en: "A CI pipeline that measures its own carbon and refuses to claim a saving it cannot prove. 191 tests.",
        },
        description: {
          fr: "Un pipeline d'intégration continue qui chiffre son propre coût carbone, et qui refuse d'annoncer un gain qu'il ne peut pas prouver. Chaque résultat est un intervalle sous ISO/IEC 21031:2024 — l'énergie ne se mesure pas sur un runner partagé et les coefficients publiés varient d'un facteur trois — et la porte compte son propre coût dedans : quand l'intervalle contient zéro, le rapport l'écrit au lieu de publier un nombre. La mesure a retourné le projet : 93,0 % de l'empreinte d'un job CI est du matériel amorti, pas de l'électricité, donc décaler les calculs vers les heures propres agit sur les 7 % restants. Le correctif n'est pas étiqueté, il est généré : la porte émet un pipeline enfant ne contenant que les jobs que le changement exige. Deux règles que l'outil ne peut pas enfreindre — la justesse décide et le carbone mesure, et un gain indistinguable de zéro ne s'annonce pas. 191 tests ; merge requests revues par GitLab Duo Agent Platform.",
          en: "A continuous-integration pipeline that quantifies its own carbon cost, and refuses to claim a saving it cannot prove. Every result is an interval under ISO/IEC 21031:2024 — energy cannot be measured on a shared runner and published coefficients vary by a factor of three — and the gate counts its own cost inside it: when the interval contains zero, the report says so instead of publishing a number. The measurement turned the project around: 93.0 % of a CI job's footprint is amortised hardware, not electricity, so shifting compute to cleaner hours acts on the remaining 7 %. The fix is not labelled, it is generated: the gate emits a child pipeline containing only the jobs the change requires. Two rules the tool cannot break — correctness decides and carbon measures, and a saving indistinguishable from zero does not get announced. 191 tests; merge requests reviewed by GitLab Duo Agent Platform.",
        },
        tech: ["Python 3.12", "GitLab CI", "GitLab Duo Agent Platform", "ISO/IEC 21031:2024", "pipelines parent-enfant"],
        github: "https://github.com/Yoh5/carbon-gate",
        demo: null,
        image: "/my_portfolio_website/images/cover-carbongate.jpg",
        vedette: true,
        color: "linear-gradient(135deg, #c2742c, #3fb8a4)"
      },
      {
        title: "Call First",
        resume: {
          fr: "Anti-arnaque au faux coursier sur l'API Ring. 32 règles cassées exprès, chacune rattrapée par un test. 267 tests.",
          en: "Courier-impersonation fraud defence on the Ring API. 32 rules broken on purpose, each one caught by a test. 267 tests.",
        },
        description: {
          fr: "Protection contre l'arnaque au faux coursier, sur l'API Ring. Le résident l'allume et choisit qui est prévenu ; aucune reconnaissance de visage ; la famille est alertée quand la porte s'ouvre pour une visite qui n'était pas attendue. La décision est dans du code lisible, pas dans un modèle : 267 tests, et 32 règles cassées volontairement, chacune rattrapée par un test — parce qu'une règle qu'aucun test ne voit tomber n'est pas une règle.",
          en: "Protection against courier-impersonation fraud, on the Ring API. The resident turns it on and chooses who is notified; no face recognition; the family is alerted when the door opens for a visit nobody expected. The decision lives in readable code, not in a model: 267 tests, and 32 rules broken on purpose, each one caught by a test — because a rule no test ever sees fall is not a rule.",
        },
        tech: ["Python", "API Ring", "FastAPI", "règles déterministes"],
        vedette: true,
        github: "https://github.com/Yoh5/callfirst",
        demo: "https://callfirst-bgtj.onrender.com/try",
        image: "/my_portfolio_website/images/cover-callfirst.jpg",
        color: "linear-gradient(135deg, #e07856, #2c3e50)"
      },
      {
        title: "Career Match Agent",
        resume: {
          fr: "Source des offres, génère CV et lettre adaptés. Barrière anti-invention sur du texte venu de tiers. 208 tests.",
          en: "Sources job offers, generates a tailored CV and cover letter. An anti-fabrication barrier on third-party text. 208 tests.",
        },
        description: {
          fr: "Agent de candidature de bout en bout : il source des offres de stage (APIs publiques Greenhouse, Lever, Ashby, et flux RSS), les classe par pertinence, puis génère pour chacune un CV adapté en PDF mis en page et une lettre en Word. Deux boucles à objectifs mesurables — couverture ATS et qualité rédactionnelle déterministe : mélange de langues, champs à trous, fautes — derrière une barrière anti-invention. Le texte des offres vient de tiers : il est clôturé dans le prompt, son délimiteur de fermeture neutralisé, et la consigne placée après lui — parce qu'ici une injection réussie ne produit pas un résumé faux, elle produit un mensonge sur un CV signé. Il prépare, l'humain valide et envoie. 208 tests.",
          en: "An end-to-end application agent: it sources internship offers (public Greenhouse, Lever and Ashby APIs, plus RSS feeds), ranks them by relevance, then generates for each a laid-out PDF CV and a Word cover letter. Two loops with measurable goals — ATS coverage and deterministic writing quality: mixed languages, unfilled placeholders, typos — behind an anti-fabrication barrier. The offer text comes from third parties: it is fenced inside the prompt, its closing delimiter neutralised, and the instruction placed after it — because here a successful injection does not produce a wrong summary, it produces a lie on a signed CV. It prepares, the human reviews and sends. 208 tests.",
        },
        tech: ["Python", "FastAPI", "OpenAI", "ATS", "fpdf2"],
        github: "https://github.com/Yoh5/career_match_agent",
        demo: null,
        image: "/my_portfolio_website/images/cover-careermatch.jpg",
        color: "linear-gradient(135deg, #f5576c, #f093fb)"
      },
      {
        title: "Tech Watch Agent",
        resume: {
          fr: "Veille autonome qui apprend de ce que le lecteur marque hors sujet. 101 tests.",
          en: "Autonomous tech watch that learns from what the reader marks as off topic. 101 tests.",
        },
        description: {
          fr: "Agent de veille autonome : le LLM juge quels articles comptent, va chercher lui-même le texte complet des plus importants, synthétise les tendances, mémorise d'une exécution à l'autre et apprend de ce que le lecteur marque pertinent ou hors sujet. Le fetch refuse un hôte dont une seule adresse résolue est privée et revalide chaque redirection — et le README écrit ce que cette garde ne couvre pas, plutôt que de laisser croire à une garantie. Fail-open partout. 101 tests.",
          en: "An autonomous tech-watch agent: the LLM judges which articles matter, fetches the full text of the important ones itself, synthesises trends, remembers across runs and learns from what the reader marks as relevant or off topic. The fetcher refuses a host if a single resolved address is private, and revalidates every redirect — and the README states what that guard does not cover, rather than implying a guarantee. Fail-open throughout. 101 tests.",
        },
        tech: ["Python", "FastAPI", "OpenAI/Anthropic", "APScheduler"],
        github: "https://github.com/Yoh5/agent_veille_tech",
        demo: null,
        image: "/my_portfolio_website/images/cover-veille.jpg",
        color: "linear-gradient(135deg, #11998e, #38ef7d)"
      },
      {
        title: "Intelligent Data Cleaner",
        resume: {
          fr: "Vise un score de qualité chiffré et itère. Livre le script Python qu'on peut rejouer sans l'application. 33 tests.",
          en: "Aims at a numeric quality score and iterates. Hands back the Python script you can replay without the app. 33 tests.",
        },
        description: {
          fr: "Nettoyage de données agentique : il vise un score de qualité chiffré et itère — profilage, le LLM choisit et justifie une stratégie par problème, application, re-profilage, on garde la meilleure version. Repli rule-based si le LLM échoue. Livre le fichier nettoyé et un script Python autonome que l'on peut relire et rejouer sans l'application. Le script exécuté côté serveur ne reçoit plus l'environnement du serveur : il tournait avec la clé d'API, que trois lignes suffisaient à ressortir. 33 tests.",
          en: "Agentic data cleaning: it targets a numeric quality score and iterates — profile, the LLM picks and justifies a strategy per problem, apply, re-profile, keep the best version. Rule-based fallback if the LLM fails. It hands back the cleaned file and a standalone Python script you can read and replay without the app. The server-side script no longer inherits the server's environment: it used to run with the API key, which three lines were enough to exfiltrate. 33 tests.",
        },
        tech: ["Python", "FastAPI", "OpenAI", "Pandas", "Next.js", "React"],
        github: "https://github.com/Yoh5/intelligent_data_cleaner",
        demo: null,
        image: "/my_portfolio_website/images/Airobo.jpg",
        color: "linear-gradient(135deg, #00d2ff, #3a7bd5)"
      },
      {
        title: "Glass Box",
        resume: {
          fr: "L'enregistreur de vol d'un agent : registre chaîné par hachage, pièces adressées par leur contenu, rejeu déterministe. 329 tests.",
          en: "An agent's flight recorder: hash-chained ledger, content-addressed evidence, deterministic replay. 329 tests.",
        },
        description: {
          fr: "L'enregistreur de vol d'un agent. Les outils d'observabilité tracent les appels au modèle : le prompt, la réponse, la latence. Le jour où un agent écrit dans un fichier qu'il n'aurait pas dû toucher, les trois questions qu'on pose vraiment n'ont pas de réponse — sur quelle information il s'appuyait, referait-il la même chose, et ce journal dit-il la vérité. Registre chaîné par hachage, pièces adressées par leur contenu, rejeu déterministe, et le chemin qui remonte d'une action jusqu'à l'octet qui l'a provoquée. Routage à étages sur Nemotron : deux échantillons du petit modèle, escalade si les réponses divergent. 329 tests.",
          en: "An agent's flight recorder. Observability tools trace calls to the model: the prompt, the response, the latency. The day an agent writes to a file it should not have touched, the three questions you actually ask have no answer — what information it relied on, whether it would do the same again, and whether this log tells the truth. Hash-chained register, content-addressed evidence, deterministic replay, and the path back from an action to the byte that caused it. Tiered routing on Nemotron: two samples from the small model, escalation when the answers diverge. 329 tests.",
        },
        tech: ["Python", "Nebius Token Factory", "Nemotron", "Hash chain", "CLI"],
        vedette: true,
        github: "https://github.com/Yoh5/glassbox",
        demo: null,
        image: "/my_portfolio_website/images/cover-glassbox.jpg",
        color: "linear-gradient(135deg, #2c3e50, #4ca1af)"
      },
      {
        title: "Tender Compliance Agent",
        resume: {
          fr: "Lit un dossier de consultation et dit quelles exigences administratives manquent — avant la date limite.",
          en: "Reads a tender pack and says which administrative requirements are missing — before the deadline.",
        },
        description: {
          fr: "Les appels d'offres publics sont rejetés sur la paperasse avant que quiconque ait lu la proposition. Cet agent lit le dossier de consultation, en extrait chaque exigence administrative, et dit lesquelles ne sont pas encore satisfaites — avant la date limite, pas après.",
          en: "Public tenders get rejected on paperwork before anyone has read the proposal. This agent reads the tender pack, extracts every administrative requirement, and says which ones are not yet met — before the deadline, not after.",
        },
        tech: ["Python", "Strands SDK", "LLM", "Extraction documentaire"],
        github: "https://github.com/Yoh5/tender-compliance-agent",
        demo: null,
        image: "/my_portfolio_website/images/cover-tender.jpg",
        color: "linear-gradient(135deg, #e17055, #d63031)"
      }
    ]
  },
  {
    id: "onchain",
    title: "On-chain",
    note: {
      fr: "Un agent qui signe des transactions doit avoir un mandat borné. Les deux ci-dessous en ont un.",
      en: "An agent that signs transactions needs a bounded mandate. The two below have one.",
    },
    projects: [
      {
        title: "Runway",
        resume: {
          fr: "Finaliste KeeperHub 2026. Keeper sous mandat on-chain borné, prouvé sur Sepolia. 309 tests.",
          en: "KeeperHub 2026 finalist. A keeper under a bounded on-chain mandate, proven on Sepolia. 309 tests.",
        },
        description: {
          fr: "Finaliste du hackathon KeeperHub Agent Economy 2026. Un keeper qui décide quels flux de paiement Superfluid ralentir quand une trésorerie s'épuise, et exécute sous un mandat on-chain borné : la permission accordée autorise à ralentir un flux et à le fermer, jamais à en créer un ni à le rediriger. Chaque exécution laisse un enregistrement que `pnpm verify-record` rejoue depuis les faits enregistrés, et qui refuse de valider une écriture qu'aucune décision n'a nommée. Prouvé sur Sepolia. 309 tests.",
          en: "Finalist at the KeeperHub Agent Economy 2026 hackathon. A keeper that decides which Superfluid payment streams to slow when a treasury runs dry, and executes under a bounded on-chain mandate: the permission granted allows slowing a stream and closing it, never creating one nor redirecting it. Every run leaves a record that `pnpm verify-record` replays from the recorded facts, and which refuses to validate a write no decision ever named. Proven on Sepolia. 309 tests.",
        },
        tech: ["TypeScript", "Superfluid", "KeeperHub", "Solidity", "Sepolia"],
        vedette: true,
        github: "https://github.com/Yoh5/runway",
        demo: null,
        image: "/my_portfolio_website/images/cover-runway.jpg",
        color: "linear-gradient(135deg, #0984e3, #00cec9)"
      },
      {
        title: {
          fr: "Correctifs acceptés en amont",
          en: "Patches merged upstream",
        },
        resume: {
          fr: "Cinq contributions fusionnées chez KeeperHub et chez Nebius — dont un identifiant de modèle documenté en minuscules qui rendait 404.",
          en: "Five contributions merged upstream at KeeperHub and Nebius — including a model identifier documented in lowercase that returned a 404.",
        },
        description: {
          fr: "Trois pull requests fusionnées dans KeeperHub : un script de build effaçait deux fichiers suivis par git et sortait en vert ; il échoue maintenant franchement. Et deux contributions acceptées dans le dépôt de Nebius le 30 octobre 2026 : une correction de l'identifiant du modèle Nemotron, documenté en minuscules alors que l'API ne sert que la forme mixte — vérifié sur les deux points d'entrée, 200 contre 404 ; et une mesure sur l'API vivante montrant qu'une réponse de raisonnement tronquée rend son texte sous la clé `reasoning` et non `reasoning_content`, ce qui faisait lire une réponse vide aux clients portés depuis un autre fournisseur. Nebius en a tiré une section de documentation. Petit à chaque fois, et c'est le genre de bug qui coûte une après-midi à quelqu'un d'autre.",
          en: "Three pull requests merged into KeeperHub: a build script was deleting two git-tracked files and exiting green; it now fails loudly. And two contributions accepted into the Nebius repository on 30 October 2026: a fix to the Nemotron model identifier, documented in lowercase while the API only serves the mixed-case form — verified on both endpoints, 200 against 404; and a measurement on the live API showing that a truncated reasoning response returns its text under the `reasoning` key and not `reasoning_content`, which made clients ported from another provider read an empty answer. Nebius turned it into a documentation section. Small every time, and exactly the kind of bug that costs someone else an afternoon.",
        },
        tech: ["TypeScript", "Python", "CI", "Open source"],
        github: "https://github.com/Yoh5/fail-closed",
        demo: null,
        image: "/my_portfolio_website/images/cover-failclosed.jpg",
        color: "linear-gradient(135deg, #2d3436, #636e72)"
      }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    note: null,
    projects: [
      {
        title: "AWS EC2 Deployment",
        resume: {
          fr: "Instances EC2 : SSH, groupes de sécurité, déploiement d'applications web.",
          en: "EC2 instances: SSH, security groups, web application deployment.",
        },
        description: {
          fr: "Mise en place d'instances EC2 : configuration SSH, groupes de sécurité, déploiement d'applications web scalables.",
          en: "Setting up EC2 instances: SSH configuration, security groups, deployment of scalable web applications.",
        },
        tech: ["AWS EC2", "SSH", "Security Groups", "Linux"],
        github: "https://github.com/Axl-Projects/Roadmap_sh/tree/main/EC2_Instance",
        demo: null,
        image: "/my_portfolio_website/images/aws_ec2.png",
        color: "linear-gradient(135deg, #ff9900, #ff6600)"
      },
      {
        title: "Nginx Log Analyzer",
        resume: {
          fr: "Analyse de logs Nginx : métriques de performance, détection d'erreurs, rapports de trafic.",
          en: "Nginx log analysis: performance metrics, error detection, traffic reports.",
        },
        description: {
          fr: "Analyse de logs Nginx : métriques de performance, détection d'erreurs, rapports de trafic.",
          en: "Nginx log analysis: performance metrics, error detection, traffic reports.",
        },
        tech: ["Nginx", "Bash", "Awk"],
        github: "https://github.com/Axl-Projects/Roadmap_sh/tree/main/Nginx_Log_Analyzer",
        demo: null,
        image: "/my_portfolio_website/images/nginx.jpg",
        color: "linear-gradient(135deg, #009639, #00b336)"
      },
      {
        title: "Server Monitoring Dashboard",
        resume: {
          fr: "Tableau de bord système en temps réel — CPU, mémoire, disque — avec alertes.",
          en: "Real-time system dashboard — CPU, memory, disk — with alerts.",
        },
        description: {
          fr: "Tableau de bord système en temps réel : CPU, mémoire, disque, processus, avec alertes.",
          en: "Real-time system dashboard: CPU, memory, disk, processes, with alerts.",
        },
        tech: ["Linux", "Bash", "Monitoring"],
        github: "https://github.com/Axl-Projects/Roadmap_sh/tree/main/Server_Performance_Stats",
        demo: null,
        image: "/my_portfolio_website/images/serve.png",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
      }
    ]
  },
  {
    id: "foundations",
    title: {
      fr: "Bases : machine learning et projets d'école",
      en: "Foundations: machine learning and coursework",
    },
    note: {
      fr: "Des exercices, et je les présente comme tels. Ils sont ici parce qu'ils montrent d'où viennent les fondamentaux.",
      en: "Exercises, and I present them as such. They are here because they show where the fundamentals come from.",
    },
    projects: [
      {
        title: "Titanic Survival Prediction",
        resume: {
          fr: "Arbre de décision : encodage des variables, évaluation complète.",
          en: "Decision tree: feature encoding, full evaluation.",
        },
        description: {
          fr: "Arbre de décision sur le jeu Titanic. Encodage des variables, évaluation complète.",
          en: "Decision tree on the Titanic dataset. Feature encoding, full evaluation.",
        },
        tech: ["Python", "Decision Tree", "scikit-learn"],
        github: "https://github.com/Axl-Projects/ML/tree/main/DecisionTree",
        demo: null,
        image: "/my_portfolio_website/images/titanic.jpg",
        color: "linear-gradient(135deg, #56ab2f, #a8e063)"
      },
      {
        title: "Breast Cancer Classification",
        resume: {
          fr: "KNN sur le jeu Wisconsin : 569 échantillons, 30 variables, k=7.",
          en: "KNN on the Wisconsin dataset: 569 samples, 30 features, k=7.",
        },
        description: {
          fr: "KNN sur le jeu Wisconsin (569 échantillons, 30 variables), k=7, distance euclidienne.",
          en: "KNN on the Wisconsin dataset (569 samples, 30 features), k=7, Euclidean distance.",
        },
        tech: ["Python", "KNN", "scikit-learn"],
        github: "https://github.com/Axl-Projects/ML/tree/main/KNN",
        demo: null,
        image: "/my_portfolio_website/images/breast.jpg",
        color: "linear-gradient(135deg, #a29bfe, #6c5ce7)"
      },
      {
        title: "Diabetes Prediction",
        resume: {
          fr: "Régression logistique sur le jeu Pima : 768 patients, variables mises à l'échelle.",
          en: "Logistic regression on the Pima dataset: 768 patients, scaled features.",
        },
        description: {
          fr: "Régression logistique sur le jeu Pima (768 patients), avec mise à l'échelle des variables.",
          en: "Logistic regression on the Pima dataset (768 patients), with feature scaling.",
        },
        tech: ["Python", "Régression logistique", "scikit-learn"],
        github: "https://github.com/Axl-Projects/ML/tree/main/RegressionLogistique",
        demo: null,
        image: "/my_portfolio_website/images/diabetes.jpg",
        color: "linear-gradient(135deg, #4ecdc4, #44a3aa)"
      },
      {
        title: "Area",
        resume: {
          fr: "Plateforme d'automatisation de workflows type IFTTT, avec OAuth. Projet de groupe Epitech.",
          en: "An IFTTT-style workflow automation platform, with OAuth. Epitech group project.",
        },
        description: {
          fr: "Plateforme d'automatisation de workflows type IFTTT : connexion de services, actions et réactions, OAuth. Projet de groupe Epitech.",
          en: "An IFTTT-style workflow automation platform: service connections, actions and reactions, OAuth. Epitech group project.",
        },
        tech: ["React", "Node.js", "OAuth"],
        github: "https://github.com/Yoh5/Area_project",
        demo: null,
        image: "/my_portfolio_website/images/area.jpeg",
        color: "linear-gradient(135deg, #00b894, #00cec9)"
      },
      {
        title: "R-Type",
        resume: {
          fr: "Le jeu d'arcade en C++ : moteur maison, système d'entités, multijoueur réseau. Epitech.",
          en: "The arcade game in C++: in-house engine, entity system, network multiplayer. Epitech.",
        },
        description: {
          fr: "Reproduction du jeu d'arcade R-Type en C++ : moteur maison, collisions, système d'entités, multijoueur réseau. Projet Epitech.",
          en: "A C++ remake of the arcade game R-Type: in-house engine, collisions, entity system, network multiplayer. Epitech project.",
        },
        tech: ["C++", "SFML", "Réseau"],
        github: "https://github.com/Yoh5/Rtype_project",
        demo: null,
        image: "/my_portfolio_website/images/Rtype.jpg",
        color: "linear-gradient(135deg, #e74c3c, #c0392b)"
      },
      {
        title: "Shippackage",
        resume: {
          fr: "Suivi de commandes en Laravel : authentification, upload d'images, API REST. Epitech.",
          en: "Order tracking in Laravel: authentication, image upload, REST API. Epitech.",
        },
        description: {
          fr: "Plateforme de suivi de commandes en Laravel : authentification, upload d'images, API REST. Projet Epitech.",
          en: "An order-tracking platform in Laravel: authentication, image upload, REST API. Epitech project.",
        },
        tech: ["Laravel", "PHP", "MySQL"],
        github: "https://github.com/Yoh5/Shippackage",
        demo: null,
        image: "/my_portfolio_website/images/ship.jpeg",
        color: "linear-gradient(135deg, #fd79a8, #e84393)"
      }
    ]
  }
];

// La carte montre une ligne, et une seule : le résultat mesuré. Le paragraphe
// complet existe toujours — c'est lui qui soutient la candidature — mais il
// s'ouvre à la demande.
//
// Le défaut qu'on corrige ici : vingt-et-une descriptions de cent-cinquante
// mots empilées. Un recruteur parcourt une page de projets en une vingtaine de
// secondes ; un mur de texte dense ne se lit pas « plus sérieux », il ne se lit
// pas du tout. Stratifier ne retire rien, ça décide de l'ordre de lecture.
const ProjectCard = ({ project }) => {
  const t = useT();
  const [ouvert, setOuvert] = React.useState(false);
  // Le titre peut être bilingue : on le résout avant de s'en servir comme
  // clé et comme identifiant, sinon `.replace` tombe sur un objet.
  const titre = t(project.title);
  const idDetail = `detail-${titre.replace(/\W+/g, "-").toLowerCase()}`;
  // Sans résumé, on n'ouvre rien : la description tient lieu des deux.
  const stratifie = Boolean(project.resume);

  return (
    <div className="project-card">
      <div className="project-image" style={{ background: project.color }}>
        {project.image ? (
          <>
            <img src={project.image} alt="" className="project-bg-image" />
            <div className="project-image-overlay">
              <span className="project-icon-overlay"></span>
            </div>
          </>
        ) : (
          <span className="project-icon-fallback"></span>
        )}
      </div>

      <div className="project-content">
        <h3>
          {titre}
          {/* Un projet en ligne le dit là où le titre se lit, pas seulement
              dans un bouton en bas de carte. C'est ce qui décide si on clique. */}
          {project.demo && (
            <span className="project-live">
              {t({ fr: "en ligne", en: "live" })}
            </span>
          )}
        </h3>

        <p className="project-resume">
          {t(stratifie ? project.resume : project.description)}
        </p>

        {stratifie && (
          <>
            <button
              type="button"
              className="project-plus"
              aria-expanded={ouvert}
              aria-controls={idDetail}
              onClick={() => setOuvert((o) => !o)}
            >
              {ouvert
                ? t({ fr: "Replier", en: "Collapse" })
                : t({ fr: "Comment c'est fait", en: "How it is built" })}
            </button>
            <p id={idDetail} className="project-detail" hidden={!ouvert}>
              {t(project.description)}
            </p>
          </>
        )}

        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t({ fr: "Essayer", en: "Try it" })} →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={project.demo ? "btn btn-secondary" : "btn btn-primary btn-full"}
            >
              {t({ fr: "Code", en: "Code" })}
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="project-private">
              {t({ fr: "Code client privé", en: "Client code, private" })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// Vingt-deux cartes d'un bloc, c'est une archive, pas un argument : le lecteur
// qui survole y trouve « prédiction de survie du Titanic » au même rang qu'un
// agent en production et en conclut que tout se vaut. Les sept qui portent la
// candidature passent devant ; le reste existe toujours, à un clic.
//
// Les groupes sont conservés pour la suite — ils disent ce qu'on regarde — mais
// un projet mis en avant n'y réapparaît pas : une carte vue deux fois fait
// douter de la première.
const VEDETTES = GROUPS.flatMap((g) => g.projects.filter((p) => p.vedette));
const RESTE = GROUPS.map((g) => ({
  ...g,
  projects: g.projects.filter((p) => !p.vedette),
})).filter((g) => g.projects.length > 0);
const NB_RESTE = RESTE.reduce((n, g) => n + g.projects.length, 0);

const Projects = () => {
  const t = useT();
  const [deplie, setDeplie] = React.useState(false);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">{t({ fr: "Projets", en: "Projects" })}</h2>
      <p className="section-chapeau">
        {t({
          fr: "Sept projets portent l'essentiel du travail : des agents qui décident dans du code testé, chacun avec sa mesure et son dépôt.",
          en: "Seven projects carry most of the work: agents that decide in tested code, each with its measurement and its repository.",
        })}
      </p>

      <div className="projects-container projects-vedettes">
        {VEDETTES.map((project) => (
          <ProjectCard project={project} key={project.github || project.title.fr || project.title} />
        ))}
      </div>

      <div className="projects-plus">
        <button
          type="button"
          className="btn btn-secondary"
          aria-expanded={deplie}
          aria-controls="projets-reste"
          onClick={() => setDeplie((v) => !v)}
        >
          {deplie
            ? t({ fr: "Replier les autres projets", en: "Collapse the other projects" })
            : t({
                fr: `Voir les ${NB_RESTE} autres projets`,
                en: `See the other ${NB_RESTE} projects`,
              })}
        </button>
      </div>

      {/* `hidden` plutôt qu'un démontage : le contenu reste dans le document,
          donc il est trouvable par la recherche du navigateur et il s'imprime. */}
      <div id="projets-reste" hidden={!deplie}>
        {RESTE.map((group) => (
          <div className="project-group" key={group.id}>
            <div className="project-group-head">
              <h3>{t(group.title)}</h3>
              {group.note && <p>{t(group.note)}</p>}
            </div>

            <div className="projects-container">
              {group.projects.map((project) => (
                <ProjectCard project={project} key={project.github || project.title.fr || project.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

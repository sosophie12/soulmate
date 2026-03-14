/* ============================================
   Sophie — Application Logic (iOS)
   ============================================ */

// ---- MBTI Quiz Questions (20 questions, 5 per axe) ----
const MBTI_QUESTIONS = [
    // E vs I (5 questions)
    { axis: "EI", question: "Lors d'une soirée, tu as tendance à...", options: [
        { text: "Parler avec plein de gens différents, même des inconnus", value: "E" },
        { text: "Rester avec un petit groupe de proches", value: "I" }
    ]},
    { axis: "EI", question: "Après une longue journée de travail, tu préfères...", options: [
        { text: "Sortir voir des amis pour te ressourcer", value: "E" },
        { text: "Rentrer chez toi pour un moment de calme", value: "I" }
    ]},
    { axis: "EI", question: "Quand tu réfléchis à un problème, tu...", options: [
        { text: "En parles à voix haute avec quelqu'un", value: "E" },
        { text: "Préfères y réfléchir seul(e) dans ta tête", value: "I" }
    ]},
    { axis: "EI", question: "En vacances idéales, tu choisirais plutôt...", options: [
        { text: "Un voyage en groupe avec plein d'activités", value: "E" },
        { text: "Une retraite au calme, à ton rythme", value: "I" }
    ]},
    { axis: "EI", question: "Dans un nouveau groupe, tu...", options: [
        { text: "Prends facilement la parole et engages la conversation", value: "E" },
        { text: "Observes d'abord avant de t'ouvrir", value: "I" }
    ]},

    // S vs N (5 questions)
    { axis: "SN", question: "Quand tu lis un livre, tu apprécies surtout...", options: [
        { text: "Les détails concrets et les descriptions réalistes", value: "S" },
        { text: "Les idées, les métaphores et les concepts abstraits", value: "N" }
    ]},
    { axis: "SN", question: "Au travail, tu préfères...", options: [
        { text: "Suivre des méthodes éprouvées qui fonctionnent", value: "S" },
        { text: "Innover et essayer de nouvelles approches", value: "N" }
    ]},
    { axis: "SN", question: "Quand on te raconte une histoire, tu retiens plutôt...", options: [
        { text: "Les faits, les dates et les détails précis", value: "S" },
        { text: "L'impression générale et le sens caché", value: "N" }
    ]},
    { axis: "SN", question: "Tu te décrirais plutôt comme quelqu'un de...", options: [
        { text: "Pragmatique et ancré dans le présent", value: "S" },
        { text: "Visionnaire et tourné vers le futur", value: "N" }
    ]},
    { axis: "SN", question: "Face à un nouveau projet, tu commences par...", options: [
        { text: "Lister les étapes concrètes à suivre", value: "S" },
        { text: "Imaginer le résultat final et la vision d'ensemble", value: "N" }
    ]},

    // T vs F (5 questions)
    { axis: "TF", question: "Quand un(e) ami(e) te confie un problème, tu...", options: [
        { text: "Analyses la situation et proposes des solutions logiques", value: "T" },
        { text: "Écoutes avec empathie et valides ses émotions d'abord", value: "F" }
    ]},
    { axis: "TF", question: "Pour prendre une décision importante, tu te bases sur...", options: [
        { text: "Les faits objectifs et l'analyse rationnelle", value: "T" },
        { text: "Tes valeurs personnelles et ce que tu ressens", value: "F" }
    ]},
    { axis: "TF", question: "En cas de désaccord dans un couple, tu penses qu'il faut...", options: [
        { text: "Discuter calmement avec des arguments logiques", value: "T" },
        { text: "D'abord comprendre ce que chacun ressent", value: "F" }
    ]},
    { axis: "TF", question: "Ce qui te motive le plus dans la vie, c'est...", options: [
        { text: "Atteindre tes objectifs et être compétent(e)", value: "T" },
        { text: "Aider les autres et vivre en harmonie", value: "F" }
    ]},
    { axis: "TF", question: "Quand tu regardes un film, tu juges surtout...", options: [
        { text: "La cohérence du scénario et la logique de l'histoire", value: "T" },
        { text: "Les émotions transmises et l'authenticité des personnages", value: "F" }
    ]},

    // J vs P (5 questions)
    { axis: "JP", question: "Ton espace de travail est plutôt...", options: [
        { text: "Organisé, chaque chose à sa place", value: "J" },
        { text: "Un joyeux bazar créatif, tu t'y retrouves", value: "P" }
    ]},
    { axis: "JP", question: "Face à un week-end libre, tu préfères...", options: [
        { text: "Planifier des activités à l'avance", value: "J" },
        { text: "Voir au feeling, selon l'envie du moment", value: "P" }
    ]},
    { axis: "JP", question: "Les deadlines, pour toi c'est...", options: [
        { text: "Sacré — tu finis toujours en avance", value: "J" },
        { text: "Un repère flexible — tu travailles mieux sous pression", value: "P" }
    ]},
    { axis: "JP", question: "Quand tu voyages, tu...", options: [
        { text: "Prépares un itinéraire détaillé", value: "J" },
        { text: "Pars à l'aventure et improvises sur place", value: "P" }
    ]},
    { axis: "JP", question: "Tu te sens plus à l'aise quand...", options: [
        { text: "Les choses sont décidées et structurées", value: "J" },
        { text: "Les options restent ouvertes et flexibles", value: "P" }
    ]}
];

// ---- Données Astrologiques ----
const ZODIAC_DATA = {
    belier:    { nom: "Bélier", symbol: "♈", element: "Feu", dates: "21 mars – 19 avril", qualites: "courageux, dynamique, passionné", compatible: ["lion", "sagittaire", "gemeaux", "verseau"], planete: "Mars" },
    taureau:   { nom: "Taureau", symbol: "♉", element: "Terre", dates: "20 avril – 20 mai", qualites: "fiable, patient, sensuel", compatible: ["vierge", "capricorne", "cancer", "poissons"], planete: "Vénus" },
    gemeaux:   { nom: "Gémeaux", symbol: "♊", element: "Air", dates: "21 mai – 20 juin", qualites: "curieux, communicatif, adaptable", compatible: ["balance", "verseau", "belier", "lion"], planete: "Mercure" },
    cancer:    { nom: "Cancer", symbol: "♋", element: "Eau", dates: "21 juin – 22 juillet", qualites: "intuitif, protecteur, émotionnel", compatible: ["scorpion", "poissons", "taureau", "vierge"], planete: "Lune" },
    lion:      { nom: "Lion", symbol: "♌", element: "Feu", dates: "23 juillet – 22 août", qualites: "charismatique, généreux, créatif", compatible: ["belier", "sagittaire", "gemeaux", "balance"], planete: "Soleil" },
    vierge:    { nom: "Vierge", symbol: "♍", element: "Terre", dates: "23 août – 22 septembre", qualites: "analytique, attentionné, perfectionniste", compatible: ["taureau", "capricorne", "cancer", "scorpion"], planete: "Mercure" },
    balance:   { nom: "Balance", symbol: "♎", element: "Air", dates: "23 septembre – 22 octobre", qualites: "harmonieux, diplomate, romantique", compatible: ["gemeaux", "verseau", "lion", "sagittaire"], planete: "Vénus" },
    scorpion:  { nom: "Scorpion", symbol: "♏", element: "Eau", dates: "23 octobre – 21 novembre", qualites: "intense, magnétique, loyal", compatible: ["cancer", "poissons", "vierge", "capricorne"], planete: "Pluton" },
    sagittaire:{ nom: "Sagittaire", symbol: "♐", element: "Feu", dates: "22 novembre – 21 décembre", qualites: "aventurier, optimiste, philosophe", compatible: ["belier", "lion", "balance", "verseau"], planete: "Jupiter" },
    capricorne:{ nom: "Capricorne", symbol: "♑", element: "Terre", dates: "22 décembre – 19 janvier", qualites: "ambitieux, discipliné, responsable", compatible: ["taureau", "vierge", "scorpion", "poissons"], planete: "Saturne" },
    verseau:   { nom: "Verseau", symbol: "♒", element: "Air", dates: "20 janvier – 18 février", qualites: "original, indépendant, visionnaire", compatible: ["gemeaux", "balance", "belier", "sagittaire"], planete: "Uranus" },
    poissons:  { nom: "Poissons", symbol: "♓", element: "Eau", dates: "19 février – 20 mars", qualites: "empathique, rêveur, artistique", compatible: ["cancer", "scorpion", "taureau", "capricorne"], planete: "Neptune" }
};

// ---- Données Numérologie ----
const NUMEROLOGY_DATA = {
    1: { nom: "Le Leader", qualites: "indépendant, ambitieux, original", ameSoeur: "quelqu'un qui respecte ton indépendance tout en t'apportant de la douceur. Un partenaire qui a sa propre force intérieure et qui ne cherche pas à te changer.", compatibleNums: [2, 5, 9] },
    2: { nom: "Le Diplomate", qualites: "sensible, coopératif, intuitif", ameSoeur: "une personne rassurante et stable, qui valorise l'harmonie autant que toi. Quelqu'un de patient et attentionné qui sait écouter.", compatibleNums: [1, 4, 8] },
    3: { nom: "Le Créatif", qualites: "expressif, joyeux, sociable", ameSoeur: "un esprit libre et créatif comme toi, qui aime rire et communiquer. Quelqu'un qui stimule ton imagination et partage ta joie de vivre.", compatibleNums: [5, 6, 9] },
    4: { nom: "Le Bâtisseur", qualites: "organisé, loyal, travailleur", ameSoeur: "une personne fiable et honnête, qui partage tes valeurs de stabilité. Quelqu'un qui construit avec toi, pierre par pierre, un amour solide.", compatibleNums: [2, 6, 8] },
    5: { nom: "L'Aventurier", qualites: "libre, curieux, adaptable", ameSoeur: "un partenaire aussi aventureux que toi, qui n'a pas peur du changement. Quelqu'un qui te laisse de l'espace tout en étant ton compagnon de voyage.", compatibleNums: [1, 3, 7] },
    6: { nom: "Le Protecteur", qualites: "aimant, responsable, harmonieux", ameSoeur: "quelqu'un de chaleureux et familial, qui valorise l'amour et la beauté du quotidien. Un partenaire qui te laisse prendre soin de lui/elle.", compatibleNums: [3, 4, 9] },
    7: { nom: "Le Mystique", qualites: "spirituel, réfléchi, profond", ameSoeur: "une âme profonde et intellectuelle, qui respecte ton besoin de solitude. Quelqu'un avec qui les silences sont aussi riches que les mots.", compatibleNums: [5, 7, 9] },
    8: { nom: "Le Puissant", qualites: "déterminé, stratège, ambitieux", ameSoeur: "un partenaire qui admire ta force tout en t'apportant de la tendresse. Quelqu'un d'aussi ambitieux que toi, pour former un duo inarrêtable.", compatibleNums: [2, 4, 6] },
    9: { nom: "L'Humaniste", qualites: "généreux, sage, compassionnel", ameSoeur: "une personne altruiste et ouverte d'esprit, qui partage ta vision d'un monde meilleur. Quelqu'un qui t'inspire et que tu inspires en retour.", compatibleNums: [1, 3, 6] }
};

// ---- Données MBTI ----
const MBTI_DATA = {
    INTJ: { nom: "L'Architecte", forces: "vision stratégique, indépendance intellectuelle", idealPartner: ["ENFP", "ENTP"], description: "Tu as besoin d'un partenaire qui stimule ton intellect tout en t'apportant de la chaleur émotionnelle." },
    INTP: { nom: "Le Logicien", forces: "analyse, créativité logique", idealPartner: ["ENTJ", "ENFJ"], description: "Tu cherches quelqu'un qui comprend ton monde intérieur complexe et qui t'aide à t'ouvrir aux autres." },
    ENTJ: { nom: "Le Commandant", forces: "leadership, détermination", idealPartner: ["INTP", "INFP"], description: "Tu as besoin d'un partenaire qui complète ta force par de la douceur et de la profondeur émotionnelle." },
    ENTP: { nom: "L'Innovateur", forces: "créativité, charisme, débat", idealPartner: ["INTJ", "INFJ"], description: "Tu cherches un esprit vif qui peut suivre tes 1000 idées à la seconde, tout en te gardant ancré." },
    INFJ: { nom: "L'Avocat", forces: "empathie profonde, vision", idealPartner: ["ENTP", "ENFP"], description: "Tu rêves d'une connexion d'âme, quelqu'un qui voit le monde avec la même profondeur que toi." },
    INFP: { nom: "Le Médiateur", forces: "idéalisme, authenticité", idealPartner: ["ENFJ", "ENTJ"], description: "Tu cherches un amour qui ressemble à un conte — sincère, profond et transformateur." },
    ENFJ: { nom: "Le Protagoniste", forces: "charisme, altruisme, inspiration", idealPartner: ["INFP", "INTP"], description: "Tu as besoin d'un partenaire que tu peux inspirer et qui t'inspire en retour par sa profondeur." },
    ENFP: { nom: "Le Campaigner", forces: "enthousiasme, créativité", idealPartner: ["INTJ", "INFJ"], description: "Tu cherches quelqu'un qui peut suivre ton énergie tout en étant ton ancre dans la réalité." },
    ISTJ: { nom: "Le Logisticien", forces: "fiabilité, sens du devoir", idealPartner: ["ESFP", "ESTP"], description: "Tu as besoin d'un partenaire qui respecte tes valeurs tout en t'apportant de la spontanéité." },
    ISFJ: { nom: "Le Défenseur", forces: "dévouement, attention aux détails", idealPartner: ["ESFP", "ESTP"], description: "Tu cherches quelqu'un qui apprécie ta loyauté et te montre qu'il est OK de penser à toi aussi." },
    ESTJ: { nom: "Le Directeur", forces: "organisation, leadership pratique", idealPartner: ["ISFP", "ISTP"], description: "Tu as besoin d'un partenaire qui complète ton côté structuré par de la créativité et de la flexibilité." },
    ESFJ: { nom: "Le Consul", forces: "générosité, harmonie sociale", idealPartner: ["ISFP", "ISTP"], description: "Tu cherches quelqu'un qui valorise autant que toi les liens humains et la chaleur du foyer." },
    ISTP: { nom: "Le Virtuose", forces: "pragmatisme, calme sous pression", idealPartner: ["ESFJ", "ESTJ"], description: "Tu as besoin d'un partenaire qui respecte ton espace et qui t'aide à exprimer tes émotions." },
    ISFP: { nom: "L'Aventurier", forces: "sensibilité artistique, authenticité", idealPartner: ["ESFJ", "ESTJ"], description: "Tu cherches un amour doux et authentique, quelqu'un qui voit la beauté du monde comme toi." },
    ESTP: { nom: "L'Entrepreneur", forces: "audace, énergie, adaptabilité", idealPartner: ["ISFJ", "ISTJ"], description: "Tu as besoin d'un partenaire qui peut suivre ton rythme de vie intense tout en étant ton havre de paix." },
    ESFP: { nom: "L'Animateur", forces: "joie de vivre, spontanéité", idealPartner: ["ISFJ", "ISTJ"], description: "Tu cherches quelqu'un qui partage ta passion pour la vie et qui te comprend au-delà des apparences." }
};

// ---- Descriptions d'apparence et personnalité ----
const APPARENCE_TRAITS = {
    feu:  ["un regard intense et captivant", "un sourire solaire et contagieux", "une énergie rayonnante", "une démarche assurée et charismatique", "des yeux pétillants de vie"],
    terre: ["un regard doux et rassurant", "des mains expressives et chaleureuses", "une présence apaisante", "un style élégant et intemporel", "une silhouette harmonieuse"],
    air:  ["un regard vif et curieux", "un sourire espiègle et charmant", "une légèreté dans les gestes", "un style original et surprenant", "des yeux rieurs qui brillent d'intelligence"],
    eau:  ["un regard profond et mystérieux", "une voix douce et envoûtante", "une présence magnétique", "un style fluide et artistique", "des yeux qui semblent lire dans l'âme"]
};

const LIEUX_RENCONTRE = {
    feu:  ["un festival", "un événement sportif", "une soirée animée", "un cours de danse", "un voyage spontané"],
    terre: ["une librairie", "un marché artisanal", "un restaurant cosy", "un cours de cuisine", "un parc au coucher du soleil"],
    air:  ["un musée", "une conférence", "un café littéraire", "un événement culturel", "lors d'un débat passionné"],
    eau:  ["un concert intimiste", "au bord de la mer", "un atelier artistique", "une retraite spirituelle", "sous la pluie, par hasard"]
};

// ============================================
//  iOS Page Navigation
// ============================================

function navigateTo(targetPageId, direction) {
    const pages = document.querySelectorAll(".ios-page");
    const target = document.getElementById(targetPageId);
    if (!target) return;

    pages.forEach(page => {
        if (page.id === targetPageId) {
            page.classList.remove("behind");
            page.classList.add("active");
        } else if (page.classList.contains("active")) {
            if (direction === "forward") {
                page.classList.remove("active");
                page.classList.add("behind");
            } else {
                page.classList.remove("active");
                page.classList.remove("behind");
            }
        } else {
            page.classList.remove("active", "behind");
        }
    });

    // Scroll to top
    const scrollEl = target.querySelector(".ios-scroll-content");
    if (scrollEl) scrollEl.scrollTop = 0;
}

// ============================================
//  MBTI Quiz Engine
// ============================================

let quizState = {
    currentQuestion: 0,
    answers: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
};

function startQuiz() {
    quizState = {
        currentQuestion: 0,
        answers: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
    };
    renderQuestion();
    navigateTo("mbtiQuizPage", "forward");
}

function renderQuestion() {
    const q = MBTI_QUESTIONS[quizState.currentQuestion];
    const total = MBTI_QUESTIONS.length;
    const current = quizState.currentQuestion + 1;

    document.getElementById("quizQuestionText").textContent = q.question;
    document.getElementById("quizProgressText").textContent = current + " / " + total;
    document.getElementById("quizProgressFill").style.width = ((current / total) * 100) + "%";

    const optionsEl = document.getElementById("quizOptions");
    optionsEl.innerHTML = "";

    // Shuffle options randomly
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    shuffled.forEach(opt => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-option";
        btn.textContent = opt.text;
        btn.addEventListener("click", () => selectAnswer(opt.value));
        optionsEl.appendChild(btn);
    });

    // Animate card
    const card = document.getElementById("quizQuestionCard");
    card.classList.remove("animate-in");
    void card.offsetWidth;
    card.classList.add("animate-in");
}

function selectAnswer(value) {
    quizState.answers[value]++;

    if (quizState.currentQuestion < MBTI_QUESTIONS.length - 1) {
        quizState.currentQuestion++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const a = quizState.answers;
    const mbtiType =
        (a.E >= a.I ? "E" : "I") +
        (a.S >= a.N ? "S" : "N") +
        (a.T >= a.F ? "T" : "F") +
        (a.J >= a.P ? "J" : "P");

    // Set hidden input
    document.getElementById("mbti").value = mbtiType;

    // Sync dropdown
    document.getElementById("mbtiSelect").value = mbtiType;

    // Update trigger display
    const resultEl = document.getElementById("mbtiResult");
    resultEl.textContent = mbtiType + " — " + MBTI_DATA[mbtiType].nom;
    resultEl.classList.add("completed");

    // Go back to form
    navigateTo("formPage", "back");
}

// ============================================
//  Utility Functions
// ============================================

function getZodiacSign(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "belier";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "taureau";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "gemeaux";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "lion";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "vierge";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "balance";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "scorpion";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "sagittaire";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "capricorne";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "verseau";
    return "poissons";
}

function getLifePathNumber(date) {
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "");
    let sum = 0;
    for (const ch of dateStr) {
        sum += parseInt(ch, 10);
    }
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        let newSum = 0;
        while (sum > 0) {
            newSum += sum % 10;
            sum = Math.floor(sum / 10);
        }
        sum = newSum;
    }
    return sum > 9 ? (sum % 10 || 9) : sum;
}

function getElementFromSign(sign) {
    const feu = ["belier", "lion", "sagittaire"];
    const terre = ["taureau", "vierge", "capricorne"];
    const air = ["gemeaux", "balance", "verseau"];
    if (feu.includes(sign)) return "feu";
    if (terre.includes(sign)) return "terre";
    if (air.includes(sign)) return "air";
    return "eau";
}

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function pickMultiple(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function sanitize(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
//  Profile Generation
// ============================================

function generateSoulmateProfile(prenom, genre, rechercheGenre, dateNaissance, mbtiType, interests) {
    const date = new Date(dateNaissance);
    const sign = getZodiacSign(date);
    const zodiac = ZODIAC_DATA[sign];
    const lifePathRaw = getLifePathNumber(date);
    const lifePath = lifePathRaw === 0 ? 9 : lifePathRaw;
    const numero = NUMEROLOGY_DATA[lifePath];
    const mbti = MBTI_DATA[mbtiType];
    const element = getElementFromSign(sign);

    const compatibleSigns = zodiac.compatible.map(s => ZODIAC_DATA[s]);
    const bestSign = compatibleSigns[0];

    const pronoun = rechercheGenre === "homme" ? "il" : rechercheGenre === "femme" ? "elle" : "il/elle";
    const adj = rechercheGenre === "homme" ? "" : rechercheGenre === "femme" ? "e" : "(e)";

    const traits = APPARENCE_TRAITS[element];
    const selectedTraits = pickMultiple(traits, 3);
    const lieu = pickRandom(LIEUX_RENCONTRE[element]);
    const compatScore = 70 + Math.floor(Math.random() * 25);

    return {
        zodiac, sign, lifePath, numero, mbti, mbtiType, element,
        compatibleSigns, bestSign, pronoun, adj,
        selectedTraits, lieu, compatScore, prenom: sanitize(prenom),
        interests, rechercheGenre
    };
}

// ============================================
//  Render Result Cards
// ============================================

function renderAstroCard(data) {
    const { zodiac, compatibleSigns, bestSign } = data;
    return `
        <p><span class="highlight">${zodiac.symbol} ${zodiac.nom}</span> — ${zodiac.dates}</p>
        <p>Élément : <span class="highlight">${zodiac.element}</span> · Planète : <span class="highlight">${zodiac.planete}</span></p>
        <p>Tes qualités : ${zodiac.qualites}</p>
        <p style="margin-top:10px;"><strong>Signes compatibles :</strong></p>
        <div style="margin-top:6px;">
            ${compatibleSigns.map(s => `<span class="tag">${s.symbol} ${s.nom}</span>`).join(" ")}
        </div>
        <p style="margin-top:10px;">Meilleur match : <span class="highlight">${bestSign.symbol} ${bestSign.nom}</span> — ${bestSign.qualites}.</p>
    `;
}

function renderNumeroCard(data) {
    const { lifePath, numero } = data;
    const compatNums = numero.compatibleNums.map(n => `<span class="tag">${n} — ${NUMEROLOGY_DATA[n].nom}</span>`).join(" ");
    return `
        <p>Chemin de vie : <span class="highlight" style="font-size:1.4rem;">${lifePath}</span></p>
        <p>Tu es <strong>${numero.nom}</strong> — ${numero.qualites}</p>
        <p style="margin-top:10px;"><strong>Nombres compatibles :</strong></p>
        <div style="margin-top:6px;">${compatNums}</div>
        <p style="margin-top:10px;">${numero.ameSoeur}</p>
    `;
}

function renderMbtiCard(data) {
    const { mbti, mbtiType } = data;
    const idealPartners = mbti.idealPartner.map(p => `<span class="tag">${p} — ${MBTI_DATA[p].nom}</span>`).join(" ");
    return `
        <p>Ton type : <span class="highlight" style="font-size:1.2rem;">${mbtiType}</span> — ${mbti.nom}</p>
        <p>Forces : ${mbti.forces}</p>
        <p style="margin-top:6px;">${mbti.description}</p>
        <p style="margin-top:10px;"><strong>Types compatibles :</strong></p>
        <div style="margin-top:6px;">${idealPartners}</div>
    `;
}

function renderPortraitCard(data) {
    const { prenom, bestSign, pronoun, adj, selectedTraits, lieu, compatScore, element, numero, mbti } = data;
    const idealMbti = MBTI_DATA[mbti.idealPartner[0]];
    return `
        <p style="font-style:italic; color:var(--accent);">
            ${prenom}, voici le portrait de la personne qui est faite pour toi...
        </p>
        <div class="portrait-section">
            <h4>✦ Sa Présence</h4>
            <p>Ton âme sœur a ${selectedTraits[0]}, ${selectedTraits[1]}, et ${selectedTraits[2]}. 
            Quand ${pronoun} entre dans une pièce, tu le sauras — quelque chose en toi vibrera.</p>
        </div>
        <div class="portrait-section">
            <h4>✦ Sa Personnalité</h4>
            <p>${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} est probablement ${bestSign.qualites}. 
            ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} possède les qualités d'un(e) ${idealMbti.nom} — ${idealMbti.forces}. 
            C'est quelqu'un qui ${numero.ameSoeur.toLowerCase()}</p>
        </div>
        <div class="portrait-section">
            <h4>✦ Votre Rencontre</h4>
            <p>Les astres suggèrent que vous pourriez vous rencontrer dans un lieu inattendu — peut-être ${lieu}. 
            Ce sera un de ces moments où le temps semble s'arrêter.</p>
        </div>
        <div class="portrait-section">
            <h4>✦ Votre Compatibilité</h4>
            <div class="compatibility-bar">
                <div class="compatibility-fill" data-width="${compatScore}"></div>
            </div>
            <p style="text-align:center; color:var(--accent); font-weight:600;">${compatScore}% de compatibilité cosmique</p>
        </div>
    `;
}

function renderConseilCard(data) {
    const { element, prenom } = data;
    const conseils = {
        feu: `${prenom}, ton feu intérieur est ta plus grande force. Mais n'oublie pas : le véritable amour ne se conquiert pas, il se cultive. Laisse ta passion guider ton cœur, mais permets aussi à la patience de faire son œuvre. Ton âme sœur sera attirée par ta lumière — assure-toi de briller authentiquement.`,
        terre: `${prenom}, ta stabilité est un don précieux. Dans un monde qui change sans cesse, tu es un refuge. Ton âme sœur cherche exactement cette sécurité. Mais rappelle-toi d'ouvrir ton cœur aux surprises — l'amour ne suit pas toujours le plan, et c'est ce qui le rend magique.`,
        air: `${prenom}, ton esprit brillant attire naturellement les gens vers toi. Mais l'amour véritable va au-delà des idées — il vit dans les silences partagés, les regards échangés. Quand tu trouveras cette personne avec qui même ne rien dire est parfait, tu sauras.`,
        eau: `${prenom}, ta profondeur émotionnelle est rare et précieuse. Tu ressens l'amour avec chaque fibre de ton être. Ton âme sœur sera celle qui osera plonger dans tes eaux profondes sans peur. Fais confiance à ton intuition — elle t'a toujours guidé(e) vers les bonnes personnes.`
    };
    return `<p>${conseils[element]}</p>
        <p style="margin-top:12px; text-align:center; font-style:italic; color:var(--text-muted);">
            « L'amour ne se cherche pas. L'amour se prépare, et il arrive toujours au bon moment. »
        </p>`;
}

// ============================================
//  Render Visual Schema
// ============================================

function renderSchemaCard(data) {
    const { prenom, bestSign, zodiac, mbtiType, mbti, lifePath, numero, element, compatScore, selectedTraits, pronoun, adj, rechercheGenre } = data;
    const idealMbtiType = mbti.idealPartner[0];
    const idealMbti = MBTI_DATA[idealMbtiType];

    // Choose avatar emoji based on recherche genre
    const avatarEmoji = data.rechercheGenre === "homme" ? "👨" : data.rechercheGenre === "femme" ? "👩" : "🧑";

    // Generate personality stats
    const stats = [
        { label: "Passion",    value: 60 + Math.floor(Math.random() * 35), color: "fill-pink" },
        { label: "Intellect",  value: 55 + Math.floor(Math.random() * 40), color: "fill-purple" },
        { label: "Empathie",   value: 50 + Math.floor(Math.random() * 45), color: "fill-blue" },
        { label: "Aventure",   value: 45 + Math.floor(Math.random() * 50), color: "fill-teal" }
    ];

    // Personality trait badges
    const traitBadges = bestSign.qualites.split(", ").map(t =>
        `<span class="schema-trait">✦ ${t.charAt(0).toUpperCase() + t.slice(1)}</span>`
    ).join("");

    // Ideal person name placeholder
    const signTitle = bestSign.symbol + " " + ZODIAC_DATA[zodiac.compatible[0]].nom;

    const statsHTML = stats.map(s => `
        <div class="schema-stat">
            <div class="schema-stat-header">
                <span class="schema-stat-label">${s.label}</span>
                <span class="schema-stat-value">${s.value}%</span>
            </div>
            <div class="schema-stat-bar">
                <div class="schema-stat-fill ${s.color}" data-schema-width="${s.value}"></div>
            </div>
        </div>
    `).join("");

    return `
        <div class="schema-avatar">${avatarEmoji}</div>
        <div class="schema-name">Ton Âme Sœur</div>
        <div class="schema-subtitle">${idealMbtiType} · ${idealMbti.nom}</div>

        <div class="schema-info-grid">
            <div class="schema-info-cell">
                <div class="schema-info-icon">${bestSign.symbol}</div>
                <div class="schema-info-label">Signe Idéal</div>
                <div class="schema-info-value">${ZODIAC_DATA[zodiac.compatible[0]].nom}</div>
            </div>
            <div class="schema-info-cell">
                <div class="schema-info-icon">🔮</div>
                <div class="schema-info-label">Élément</div>
                <div class="schema-info-value">${ZODIAC_DATA[zodiac.compatible[0]].element}</div>
            </div>
            <div class="schema-info-cell">
                <div class="schema-info-icon">🔢</div>
                <div class="schema-info-label">Chemin Compati.</div>
                <div class="schema-info-value">${numero.compatibleNums[0]}</div>
            </div>
            <div class="schema-info-cell">
                <div class="schema-info-icon">🧠</div>
                <div class="schema-info-label">Type MBTI</div>
                <div class="schema-info-value">${idealMbtiType}</div>
            </div>
        </div>

        <div class="schema-traits">${traitBadges}</div>

        <div class="schema-stats">${statsHTML}</div>

        <div class="schema-footer">
            <div class="schema-match-score">${compatScore}%</div>
            <div class="schema-match-label">Compatibilité cosmique</div>
        </div>
    `;
}

function animateSchemaStats() {
    setTimeout(() => {
        document.querySelectorAll(".schema-stat-fill").forEach(bar => {
            bar.style.width = bar.dataset.schemaWidth + "%";
        });
    }, 800);
}

// ============================================
//  Stars Background
// ============================================

function createStars() {
    const container = document.getElementById("stars");
    for (let i = 0; i < 60; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const size = Math.random() * 2.5 + 0.5;
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.setProperty("--duration", (Math.random() * 3 + 2) + "s");
        star.style.animationDelay = Math.random() * 5 + "s";
        container.appendChild(star);
    }
}

// ============================================
//  Chips Toggle
// ============================================

function initChips() {
    document.querySelectorAll(".ios-chip").forEach(chip => {
        chip.addEventListener("click", (e) => {
            e.preventDefault();
            const checkbox = chip.querySelector("input[type='checkbox']");
            const activeCount = document.querySelectorAll(".ios-chip.active").length;

            if (chip.classList.contains("active")) {
                chip.classList.remove("active");
                checkbox.checked = false;
            } else if (activeCount < 5) {
                chip.classList.add("active");
                checkbox.checked = true;
            }
        });
    });
}

// ============================================
//  Compatibility Bar Animation
// ============================================

function animateCompatibilityBars() {
    setTimeout(() => {
        document.querySelectorAll(".compatibility-fill").forEach(bar => {
            bar.style.width = bar.dataset.width + "%";
        });
    }, 600);
}

// ============================================
//  App Initialization
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    createStars();
    initChips();

    const form = document.getElementById("soulForm");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const mbtiTrigger = document.getElementById("mbtiTrigger");
    const mbtiBackBtn = document.getElementById("mbtiBackBtn");
    const mbtiSelect = document.getElementById("mbtiSelect");
    const mbtiHidden = document.getElementById("mbti");
    const mbtiResultEl = document.getElementById("mbtiResult");

    // Open MBTI quiz
    mbtiTrigger.addEventListener("click", () => {
        startQuiz();
    });

    // Direct MBTI selection
    mbtiSelect.addEventListener("change", () => {
        const type = mbtiSelect.value;
        if (type) {
            mbtiHidden.value = type;
            mbtiResultEl.textContent = type + " ✓";
            mbtiResultEl.classList.add("completed");
        }
    });

    // Back from quiz
    mbtiBackBtn.addEventListener("click", () => {
        navigateTo("formPage", "back");
    });

    // Submit form
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const prenom = document.getElementById("prenom").value.trim();
        const genre = document.getElementById("genre").value;
        const rechercheGenre = document.getElementById("rechercheGenre").value;
        const dateNaissance = document.getElementById("dateNaissance").value;
        const mbtiType = document.getElementById("mbti").value;

        const interests = [];
        document.querySelectorAll(".ios-chip.active input").forEach(input => {
            interests.push(input.value);
        });

        if (!prenom || !genre || !rechercheGenre || !dateNaissance || !mbtiType) {
            // Highlight missing MBTI
            if (!mbtiType) {
                const resultEl = document.getElementById("mbtiResult");
                resultEl.style.color = "#ef4444";
                resultEl.textContent = "Test requis !";
                setTimeout(() => {
                    resultEl.style.color = "";
                    resultEl.textContent = "Faire le test";
                }, 2000);
            }
            return;
        }

        // Loading animation
        submitBtn.querySelector(".btn-text").style.display = "none";
        submitBtn.querySelector(".btn-loading").style.display = "flex";
        submitBtn.disabled = true;

        setTimeout(() => {
            const data = generateSoulmateProfile(prenom, genre, rechercheGenre, dateNaissance, mbtiType, interests);

            document.getElementById("astroContent").innerHTML = renderAstroCard(data);
            document.getElementById("numeroContent").innerHTML = renderNumeroCard(data);
            document.getElementById("mbtiContent").innerHTML = renderMbtiCard(data);
            document.getElementById("portraitContent").innerHTML = renderPortraitCard(data);
            document.getElementById("conseilContent").innerHTML = renderConseilCard(data);
            document.getElementById("schemaContent").innerHTML = renderSchemaCard(data);

            // Navigate to results
            navigateTo("resultsPage", "forward");
            animateCompatibilityBars();
            animateSchemaStats();

            // Reset button state
            submitBtn.querySelector(".btn-text").style.display = "";
            submitBtn.querySelector(".btn-loading").style.display = "none";
            submitBtn.disabled = false;
        }, 1800);
    });

    // Back from results
    resetBtn.addEventListener("click", () => {
        navigateTo("formPage", "back");
    });
});

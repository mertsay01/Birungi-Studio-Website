// Local translation service with pre-defined translations
// This doesn't require any API calls and works offline

const translations = {
  en: {
    // Original translations
    welcome: "Welcome to our Website",
    description: "This demo shows a language selector popup that appears on first visit.",
    note: "You can also click the language button in the top right to change your language anytime.",
    header: "Language Selection Demo",

    // Home component translations
    birungi_title: "BIRUNGI",
    birungi_description:
      "Through gamification we teach people the impact of urbanization, pesticides on bees and how these hazards play a key in their extinction.",

    // Navbar translations
    careers: "Careers",
    about_us: "About Us",
    contact_us: "Contact Us",

    // Language selector translations
    choose_language: "Choose your language",
    select_preferred: "Select your preferred language for the website",

    // GamesSection translations
    games_title: "Our Games",
    game1_title: "I Bee Xploring",
    game1_description: "Embark on an educational adventure with bees and nature!",
    game2_title: "Hey Honey",
    game2_description: "A fun franchise about teamwork, honey collection, and colony survival.",
    game3_title: "Coming Soon",
    game3_description: "Stay tuned for our next big release. More fun awaits!",

    // ImageSlider translations
    slide1_title: "BIRUNGI STUDIO",
    slide1_description: "Explore our games that engage players on how to positively impact the environment",
    slide2_title: "I Bee Xploring",
    slide2_description: "Go on a journey as a bee in search for food",
    slide3_title: "Social impact gamification",
    slide3_description: "Through games, educating players on our actions on the environment",
  },
  es: {
    welcome: "Bienvenido a nuestro sitio web",
    description: "Esta demostración muestra un popup de selección de idioma que aparece en la primera visita.",
    note: "También puede hacer clic en el botón de idioma en la parte superior derecha para cambiar su idioma en cualquier momento.",
    header: "Demostración de selección de idioma",

    birungi_title: "BIRUNGI",
    birungi_description:
      "A través de la gamificación, enseñamos a las personas el impacto de la urbanización, los pesticidas en las abejas y cómo estos peligros juegan un papel clave en su extinción.",

    careers: "Carreras",
    about_us: "Sobre Nosotros",
    contact_us: "Contáctenos",

    choose_language: "Elige tu idioma",
    select_preferred: "Seleccione su idioma preferido para el sitio web",

    // GamesSection translations
    games_title: "Nuestros Juegos",
    game1_title: "I Bee Xploring",
    game1_description: "¡Embárcate en una aventura educativa con abejas y naturaleza!",
    game2_title: "Hey Honey",
    game2_description:
      "Una divertida franquicia sobre trabajo en equipo, recolección de miel y supervivencia de la colonia.",
    game3_title: "Próximamente",
    game3_description: "Mantente atento a nuestro próximo gran lanzamiento. ¡Más diversión te espera!",

    // ImageSlider translations
    slide1_title: "ESTUDIO BIRUNGI",
    slide1_description:
      "Explora nuestros juegos que involucran a los jugadores sobre cómo impactar positivamente el medio ambiente",
    slide2_title: "I Bee Xploring",
    slide2_description: "Emprende un viaje como abeja en busca de comida",
    slide3_title: "Gamificación de impacto social",
    slide3_description: "A través de juegos, educando a los jugadores sobre nuestras acciones en el medio ambiente",
  },
  fr: {
    welcome: "Bienvenue sur notre site",
    description: "Cette démo montre une fenêtre de sélection de langue qui apparaît lors de la première visite.",
    note: "Vous pouvez également cliquer sur le bouton de langue en haut à droite pour changer de langue à tout moment.",
    header: "Démo de sélection de langue",

    birungi_title: "BIRUNGI",
    birungi_description:
      "Grâce à la gamification, nous enseignons aux gens l'impact de l'urbanisation, des pesticides sur les abeilles et comment ces dangers jouent un rôle clé dans leur extinction.",

    careers: "Carrières",
    about_us: "À Propos de Nous",
    contact_us: "Contactez-Nous",

    choose_language: "Choisissez votre langue",
    select_preferred: "Sélectionnez votre langue préférée pour le site web",

    // GamesSection translations
    games_title: "Nos Jeux",
    game1_title: "I Bee Xploring",
    game1_description: "Embarquez pour une aventure éducative avec les abeilles et la nature !",
    game2_title: "Hey Honey",
    game2_description:
      "Une franchise amusante sur le travail d'équipe, la collecte de miel et la survie de la colonie.",
    game3_title: "Bientôt Disponible",
    game3_description: "Restez à l'écoute pour notre prochaine grande sortie. Plus de plaisir vous attend !",

    // ImageSlider translations
    slide1_title: "STUDIO BIRUNGI",
    slide1_description:
      "Explorez nos jeux qui engagent les joueurs sur la façon d'avoir un impact positif sur l'environnement",
    slide2_title: "I Bee Xploring",
    slide2_description: "Partez en voyage comme une abeille à la recherche de nourriture",
    slide3_title: "Gamification à impact social",
    slide3_description: "À travers les jeux, éduquer les joueurs sur nos actions sur l'environnement",
  },
  de: {
    welcome: "Willkommen auf unserer Website",
    description: "Diese Demo zeigt ein Sprachauswahl-Popup, das beim ersten Besuch erscheint.",
    note: "Sie können auch jederzeit auf die Sprachschaltfläche oben rechts klicken, um Ihre Sprache zu ändern.",
    header: "Sprachauswahl-Demo",

    birungi_title: "BIRUNGI",
    birungi_description:
      "Durch Gamification lehren wir Menschen die Auswirkungen von Urbanisierung, Pestiziden auf Bienen und wie diese Gefahren eine Schlüsselrolle bei ihrem Aussterben spielen.",

    careers: "Karriere",
    about_us: "Über Uns",
    contact_us: "Kontaktiere Uns",

    choose_language: "Wählen Sie Ihre Sprache",
    select_preferred: "Wählen Sie Ihre bevorzugte Sprache für die Website",

    // GamesSection translations
    games_title: "Unsere Spiele",
    game1_title: "I Bee Xploring",
    game1_description: "Begeben Sie sich auf ein lehrreiches Abenteuer mit Bienen und Natur!",
    game2_title: "Hey Honey",
    game2_description: "Ein unterhaltsames Franchise über Teamarbeit, Honigsammlung und das Überleben der Kolonie.",
    game3_title: "Demnächst",
    game3_description: "Bleiben Sie dran für unsere nächste große Veröffentlichung. Mehr Spaß erwartet Sie!",

    // ImageSlider translations
    slide1_title: "BIRUNGI STUDIO",
    slide1_description: "Entdecken Sie unsere Spiele, die Spieler dazu anregen, die Umwelt positiv zu beeinflussen",
    slide2_title: "I Bee Xploring",
    slide2_description: "Begeben Sie sich als Biene auf die Suche nach Nahrung",
    slide3_title: "Gamification mit sozialer Wirkung",
    slide3_description: "Durch Spiele die Spieler über unsere Auswirkungen auf die Umwelt aufklären",
  },
  it: {
    welcome: "Benvenuto nel nostro sito web",
    description: "Questa demo mostra un popup di selezione della lingua che appare alla prima visita.",
    note: "Puoi anche fare clic sul pulsante della lingua in alto a destra per cambiare la lingua in qualsiasi momento.",
    header: "Demo di selezione della lingua",

    birungi_title: "BIRUNGI",
    birungi_description:
      "Attraverso la gamification insegniamo alle persone l'impatto dell'urbanizzazione, dei pesticidi sulle api e come questi pericoli giochino un ruolo chiave nella loro estinzione.",

    careers: "Carriere",
    about_us: "Chi Siamo",
    contact_us: "Contattaci",

    choose_language: "Scegli la tua lingua",
    select_preferred: "Seleziona la lingua preferita per il sito web",

    // GamesSection translations
    games_title: "I Nostri Giochi",
    game1_title: "I Bee Xploring",
    game1_description: "Imbarcati in un'avventura educativa con api e natura!",
    game2_title: "Hey Honey",
    game2_description:
      "Un divertente franchise sul lavoro di squadra, la raccolta del miele e la sopravvivenza della colonia.",
    game3_title: "Prossimamente",
    game3_description: "Resta sintonizzato per il nostro prossimo grande rilascio. Ti aspetta altro divertimento!",

    // ImageSlider translations
    slide1_title: "STUDIO BIRUNGI",
    slide1_description:
      "Esplora i nostri giochi che coinvolgono i giocatori su come impattare positivamente l'ambiente",
    slide2_title: "I Bee Xploring",
    slide2_description: "Parti per un viaggio come un'ape alla ricerca di cibo",
    slide3_title: "Gamification ad impatto sociale",
    slide3_description: "Attraverso i giochi, educare i giocatori sulle nostre azioni sull'ambiente",
  },
  pt: {
    welcome: "Bem-vindo ao nosso site",
    description: "Esta demonstração mostra um popup de seleção de idioma que aparece na primeira visita.",
    note: "Você também pode clicar no botão de idioma no canto superior direito para alterar seu idioma a qualquer momento.",
    header: "Demonstração de seleção de idioma",

    birungi_title: "BIRUNGI",
    birungi_description:
      "Através da gamificação, ensinamos às pessoas o impacto da urbanização, pesticidas nas abelhas e como esses perigos desempenham um papel fundamental em sua extinção.",

    careers: "Carreiras",
    about_us: "Sobre Nós",
    contact_us: "Contate-Nos",

    choose_language: "Escolha seu idioma",
    select_preferred: "Selecione seu idioma preferido para o site",

    // GamesSection translations
    games_title: "Nossos Jogos",
    game1_title: "I Bee Xploring",
    game1_description: "Embarque em uma aventura educativa com abelhas e natureza!",
    game2_title: "Hey Honey",
    game2_description: "Uma franquia divertida sobre trabalho em equipe, coleta de mel e sobrevivência da colônia.",
    game3_title: "Em Breve",
    game3_description: "Fique atento para o nosso próximo grande lançamento. Mais diversão o aguarda!",

    // ImageSlider translations
    slide1_title: "ESTÚDIO BIRUNGI",
    slide1_description:
      "Explore nossos jogos que envolvem os jogadores sobre como impactar positivamente o meio ambiente",
    slide2_title: "I Bee Xploring",
    slide2_description: "Embarque em uma jornada como uma abelha em busca de comida",
    slide3_title: "Gamificação de impacto social",
    slide3_description: "Através de jogos, educando os jogadores sobre nossas ações no meio ambiente",
  },
  ja: {
    welcome: "ウェブサイトへようこそ",
    description: "このデモでは、初回訪問時に表示される言語選択ポップアップを示しています。",
    note: "右上の言語ボタンをクリックして、いつでも言語を変更することもできます。",
    header: "言語選択デモ",

    birungi_title: "BIRUNGI",
    birungi_description:
      "ゲーミフィケーションを通じて、都市化、蜂に対する農薬の影響、そしてこれらの危険が彼らの絶滅にどのように重要な役割を果たしているかを人々に教えています。",

    careers: "キャリア",
    about_us: "私たちについて",
    contact_us: "お問い合わせ",

    choose_language: "言語を選択してください",
    select_preferred: "ウェブサイトの優先言語を選択してください",

    // GamesSection translations
    games_title: "私たちのゲーム",
    game1_title: "I Bee Xploring",
    game1_description: "蜂と自然との教育的な冒険に乗り出しましょう！",
    game2_title: "Hey Honey",
    game2_description: "チームワーク、蜂蜜の収集、コロニーの生存に関する楽しいフランチャイズ。",
    game3_title: "近日公開",
    game3_description: "次の大きなリリースをお楽しみに。もっと楽しみが待っています！",

    // ImageSlider translations
    slide1_title: "BIRUNGIスタジオ",
    slide1_description: "環境にポジティブな影響を与える方法についてプレイヤーを引き込むゲームを探索してください",
    slide2_title: "I Bee Xploring",
    slide2_description: "食べ物を探す蜂として旅に出かけましょう",
    slide3_title: "社会的影響のあるゲーミフィケーション",
    slide3_description: "ゲームを通じて、環境に対する私たちの行動についてプレイヤーを教育する",
  },
  nl: {
    welcome: "Welkom op onze website",
    description: "Deze demo toont een taalkeuzepopup die verschijnt bij het eerste bezoek.",
    note: "U kunt ook op de taalknop rechtsboven klikken om uw taal op elk moment te wijzigen.",
    header: "Taalkeuzedemo",

    birungi_title: "BIRUNGI",
    birungi_description:
      "Door middel van gamificatie leren we mensen de impact van verstedelijking, pesticiden op bijen en hoe deze gevaren een sleutelrol spelen bij hun uitsterven.",

    careers: "Carrières",
    about_us: "Over Ons",
    contact_us: "Neem Contact Op",

    choose_language: "Kies je taal",
    select_preferred: "Selecteer je voorkeurstaal voor de website",

    // GamesSection translations
    games_title: "Onze Spellen",
    game1_title: "I Bee Xploring",
    game1_description: "Ga op een educatief avontuur met bijen en de natuur!",
    game2_title: "Hey Honey",
    game2_description: "Een leuke franchise over teamwork, honingverzameling en kolonieoverleving.",
    game3_title: "Binnenkort",
    game3_description: "Blijf op de hoogte voor onze volgende grote release. Meer plezier wacht op je!",

    // ImageSlider translations
    slide1_title: "BIRUNGI STUDIO",
    slide1_description:
      "Ontdek onze spellen die spelers betrekken bij hoe ze een positieve impact kunnen hebben op het milieu",
    slide2_title: "I Bee Xploring",
    slide2_description: "Ga op reis als een bij op zoek naar voedsel",
    slide3_title: "Gamificatie met sociale impact",
    slide3_description: "Door middel van spellen, spelers onderwijzen over onze acties op het milieu",
  },
}

// Function to get translation for a specific key
export function getTranslation(languageCode, key) {
  // Default to English if language not found
  const language = translations[languageCode] || translations.en

  // Return the translation or the key itself if not found
  return language[key] || translations.en[key] || key
}

// Function to get all translations for a language
export function getTranslations(languageCode) {
  return translations[languageCode] || translations.en
}

// Function to translate a batch of texts
export async function translateBatch(texts, targetLanguage) {
  // This is a synchronous function but we keep the async signature for compatibility
  const language = translations[targetLanguage] || translations.en

  // Map the original texts to their translations if available
  return texts.map((text) => {
    // Try to find this text in the translations
    for (const [key, value] of Object.entries(translations.en)) {
      if (value === text && language[key]) {
        return language[key]
      }
    }
    // Return original text if no translation found
    return text
  })
}

// Function to translate a single text
export async function translateText(text, targetLanguage) {
  // This is a synchronous function but we keep the async signature for compatibility
  const translatedTexts = await translateBatch([text], targetLanguage)
  return translatedTexts[0]
}

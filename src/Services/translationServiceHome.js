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

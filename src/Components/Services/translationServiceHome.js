// Local translation service with pre-defined translations
// This doesn't require any API calls and works offline

const translations = {
  en: {
    welcome: "Welcome to our Website",
    description: "This demo shows a language selector popup that appears on first visit.",
    note: "You can also click the language button in the top right to change your language anytime.",
    header: "Language Selection Demo",
  },
  es: {
    welcome: "Bienvenido a nuestro sitio web",
    description: "Esta demostración muestra un popup de selección de idioma que aparece en la primera visita.",
    note: "También puede hacer clic en el botón de idioma en la parte superior derecha para cambiar su idioma en cualquier momento.",
    header: "Demostración de selección de idioma",
  },
  fr: {
    welcome: "Bienvenue sur notre site",
    description: "Cette démo montre une fenêtre de sélection de langue qui apparaît lors de la première visite.",
    note: "Vous pouvez également cliquer sur le bouton de langue en haut à droite pour changer de langue à tout moment.",
    header: "Démo de sélection de langue",
  },
  de: {
    welcome: "Willkommen auf unserer Website",
    description: "Diese Demo zeigt ein Sprachauswahl-Popup, das beim ersten Besuch erscheint.",
    note: "Sie können auch jederzeit auf die Sprachschaltfläche oben rechts klicken, um Ihre Sprache zu ändern.",
    header: "Sprachauswahl-Demo",
  },
  it: {
    welcome: "Benvenuto nel nostro sito web",
    description: "Questa demo mostra un popup di selezione della lingua che appare alla prima visita.",
    note: "Puoi anche fare clic sul pulsante della lingua in alto a destra per cambiare la lingua in qualsiasi momento.",
    header: "Demo di selezione della lingua",
  },
  pt: {
    welcome: "Bem-vindo ao nosso site",
    description: "Esta demonstração mostra um popup de seleção de idioma que aparece na primeira visita.",
    note: "Você também pode clicar no botão de idioma no canto superior direito para alterar seu idioma a qualquer momento.",
    header: "Demonstração de seleção de idioma",
  },
  ja: {
    welcome: "ウェブサイトへようこそ",
    description: "このデモでは、初回訪問時に表示される言語選択ポップアップを示しています。",
    note: "右上の言語ボタンをクリックして、いつでも言語を変更することもできます。",
    header: "言語選択デモ",
  },
  nl: {
    welcome: "Welkom op onze website",
    description: "Deze demo toont een taalkeuzepopup die verschijnt bij het eerste bezoek.",
    note: "U kunt ook op de taalknop rechtsboven klikken om uw taal op elk moment te wijzigen.",
    header: "Taalkeuzedemo",
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

"use client"

import { useState, useEffect } from "react"
import { getCurrentLanguage, changeLanguage } from "../../utils/languageState"
import "./LanguageSelector.css"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
]

function LanguageSelector({ showOnLoad = true }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(getCurrentLanguage())

  useEffect(() => {
    // Show popup on first visit if showOnLoad is true and no language is stored
    if (showOnLoad && !localStorage.getItem("preferredLanguage")) {
      setIsOpen(true)
    }
  }, [showOnLoad])

  const handleLanguageSelect = (languageCode) => {
    console.log(`Language selected: ${languageCode}`)
    setSelectedLanguage(languageCode)
    changeLanguage(languageCode)
    setIsOpen(false)
  }

  // Find the selected language object
  const selectedLang = languages.find((lang) => lang.code === selectedLanguage) || languages[0]

  return (
    <div className="language-selector-container">
      <button className="language-selector-button" onClick={() => setIsOpen(true)}>
        {selectedLang && (
          <>
            <span>{selectedLang.flag}</span>
            <span>{selectedLang.name}</span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="language-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="language-modal" onClick={(e) => e.stopPropagation()}>
            <div className="language-modal-header">
              <h2>Choose your language</h2>
              <p>Select your preferred language for the website</p>
              <button className="close-button" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>
            <div className="language-grid">
              {languages.map((language) => (
                <button
                  key={language.code}
                  className={`language-option ${selectedLanguage === language.code ? "selected" : ""}`}
                  onClick={() => handleLanguageSelect(language.code)}
                >
                  <span className="language-flag">{language.flag}</span>
                  <span className="language-name">{language.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector

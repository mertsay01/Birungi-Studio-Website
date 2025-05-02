"use client"

import { useState, useEffect } from "react"
import "./GamesSection.css"
import { getCurrentTranslations, subscribeToLanguageChange } from "../../utils/languageState"

const GamesSection = () => {
  const [translations, setTranslations] = useState(getCurrentTranslations())

  useEffect(() => {
    // Subscribe to language changes
    const unsubscribe = subscribeToLanguageChange((language, newTranslations) => {
      setTranslations(newTranslations)
    })

    // Cleanup subscription when component unmounts
    return () => unsubscribe()
  }, [])

  return (
    <section className="games-section">
      <h2 className="games-title">{translations.games_title || "Our Games"}</h2>
      <div className="games-cards">
        <div className="game-card i-bee-xploring">
          <h3>{translations.game1_title || "I Bee Xploring"}</h3>
          <p>{translations.game1_description || "Embark on an educational adventure with bees and nature!"}</p>
        </div>
        <div className="game-card">
          <h3>{translations.game2_title || "Hey Honey"}</h3>
          <p>
            {translations.game2_description || "A fun franchise about teamwork, honey collection, and colony survival."}
          </p>
        </div>
        <div className="game-card coming-soon">
          <h3>{translations.game3_title || "Coming Soon"}</h3>
          <p>{translations.game3_description || "Stay tuned for our next big release. More fun awaits!"}</p>
        </div>
      </div>
    </section>
  )
}

export default GamesSection

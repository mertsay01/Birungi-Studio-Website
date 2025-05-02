"use client"

import { useState, useEffect } from "react"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import "./Home.css"
import "../../Components/GamesSection/GamesSection"
import GamesSection from "../../Components/GamesSection/GamesSection"
import { getCurrentTranslations, subscribeToLanguageChange } from "../../utils/languageState"

const Home = () => {
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
    <div className="hero-container">
      <ImageSlider />
      <section className="home">
        <div className="home-content">
          <h1>{translations.birungi_title || "BIRUNGI"}</h1>
          <p>
            {translations.birungi_description ||
              "Through gamification we teach people the impact of urbanization, pesticides on bees and how these hazards play a key in their extinction."}
          </p>
        </div>
      </section>
      <GamesSection />
    </div>
  )
}

export default Home

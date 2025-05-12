"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import "./hero-section.css"

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Birungi Studio
        </motion.h1>
        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Combining Gaming with Social Impact missions to <br />
          bring together enthusiastic gamers and nature enthusiasts
        </motion.h2>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="primary-button">Our Projects</button>
          <button className="secondary-button">Contact Us</button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

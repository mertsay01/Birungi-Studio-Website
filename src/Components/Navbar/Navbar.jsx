"use client"

import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Navbar.css"
import logo from "../../assets/logo2.png"
import LanguageSelector from "../../Components/LanguageSelector/LanguageSelector"
import { getCurrentTranslations, subscribeToLanguageChange } from "../../utils/languageState"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [translations, setTranslations] = useState(getCurrentTranslations())

  useEffect(() => {
    // Subscribe to language changes
    const unsubscribe = subscribeToLanguageChange((language, newTranslations) => {
      setTranslations(newTranslations)
    })

    // Cleanup subscription when component unmounts
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo-link">
          <img src={logo || "/placeholder.svg"} alt="logo" className="logo" />
        </NavLink>
      </div>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/careers" className={({ isActive }) => (isActive ? "active" : "")}>
            {translations.careers || "Careers"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={({ isActive }) => (isActive ? "active" : "")}>
            {translations.about_us || "About Us"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active" : "")}>
            {translations.contact_us || "Contact Us"}
          </NavLink>
        </li>
        <li>
          <LanguageSelector />
        </li>
      </ul>

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </nav>
  )
}

export default Navbar

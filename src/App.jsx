"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Careers from "./pages/Careers/Careers"
import Home from "./pages/Home/Home"
import AboutUs from "./pages/AboutUs/About-us"
import ContactUs from "./pages/ContactUs/ContactUs"
import Footer from "./Components/Footer/Footer"
import CookieConsent from "./Components/CookiesConsent/CookieConsent"

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(true)

  useEffect(() => {
    // For testing purposes, clear any existing cookie consent
    // localStorage.removeItem('cookieConsent'); // Uncomment this line for testing

    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem("cookieConsent")
    console.log("Cookie choice from localStorage:", cookieChoice)

    if (!cookieChoice) {
      // If no choice has been made, show the cookie consent popup
      console.log("Showing cookie consent popup")
      setShowCookieConsent(true)
    } else {
      console.log("Cookie consent already provided:", cookieChoice)
    }
  }, [])

  const handleAcceptCookies = () => {
    // Save user's choice in localStorage
    localStorage.setItem("cookieConsent", "accepted")
    setShowCookieConsent(false)

    // Here you would typically set your cookies
    console.log("Cookies accepted")
  }

  const handleDeclineCookies = () => {
    // Save user's choice in localStorage
    localStorage.setItem("cookieConsent", "declined")
    setShowCookieConsent(false)

    // Here you would typically ensure no non-essential cookies are set
    console.log("Cookies declined")
  }

  return (
    <>
      <Router>
        <div className={showCookieConsent ? "app-container blurred" : "app-container"}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>

          <Footer />
        </div>
      </Router>

      {showCookieConsent && <CookieConsent onAccept={handleAcceptCookies} onDecline={handleDeclineCookies} />}
    </>
  )
}

export default App

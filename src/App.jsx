import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useState, useEffect } from "react"
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home/Home'));
const Careers = lazy(() => import('./pages/Careers/Careers'));
const AboutUs = lazy(() => import('./pages/AboutUs/About-us'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));
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
  const handleClose = () => setShowCookieConsent(false);
  return (
    <>
    <Router>
      <div className={showCookieConsent ? "app-container blurred" : "app-container"}>

      </div>
      <Navbar />
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
    {showCookieConsent && <CookieConsent onAccept={handleAcceptCookies} onDecline={handleDeclineCookies} onClose={handleClose}/>}
    </>
  );
}

export default App;

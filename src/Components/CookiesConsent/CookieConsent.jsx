"use client"
import "./CookieConsent.css"

const CookieConsent = ({ onAccept, onDecline, onClose }) => {
  console.log("CookieConsent component rendered")

  return (
    <div className="cookie-consent-container">
      <div className="cookie-consent">
      <button className="close-button" onClick={onClose}>✕</button>
        <div className="cookie-content">
          <h2>Cookie Consent</h2>
          <p>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
            traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
          <div className="cookie-buttons">
            <button className="cookie-button accept" onClick={onAccept}>
              Accept All
            </button>
            <button className="cookie-button decline" onClick={onDecline}>
              Decline
            </button>
            <button className="cookie-button customize">Customize Settings</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent

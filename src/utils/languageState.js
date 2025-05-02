// A simple global state for language management
import { getTranslations as fetchTranslations } from "../Services/translationServiceHome"

// Default language
let currentLanguage = localStorage.getItem("preferredLanguage") || "en"

// Store for subscribers
const subscribers = new Set()

// Get current translations
let currentTranslations = fetchTranslations(currentLanguage)

// Get current language
export function getCurrentLanguage() {
  return currentLanguage
}

// Get translations
export function getCurrentTranslations() {
  return currentTranslations
}

// Change language
export function changeLanguage(languageCode) {
  currentLanguage = languageCode
  localStorage.setItem("preferredLanguage", languageCode)
  currentTranslations = fetchTranslations(languageCode)

  // Notify all subscribers
  subscribers.forEach((callback) => callback(currentLanguage, currentTranslations))

  return currentTranslations
}

// Subscribe to language changes
export function subscribeToLanguageChange(callback) {
  subscribers.add(callback)

  // Return unsubscribe function
  return () => {
    subscribers.delete(callback)
  }
}

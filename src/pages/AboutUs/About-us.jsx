import HeroSection from "./hero-section/hero-section"
import AboutSection from "./about-section/about-section"
import ValuesSection from "./values-section/values-section"
import CTASection from "./cta-section/cta-section"

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <CTASection />
    </div>
  )
}

export default AboutUsPage

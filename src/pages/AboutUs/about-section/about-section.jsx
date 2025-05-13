"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import "./about-section.css"

function AboutSection() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 })
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 })

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>

        <div ref={ref1} className={`about-row ${isInView1 ? "animate" : ""}`}>
          <div className="about-image impact-image">
            <div className="image-overlay">
              <span>Impact</span>
            </div>
          </div>
          <div className="about-content">
            <h3 className="about-heading">Social Impact Gamification</h3>
            <p className="about-text">
              We are Birungi studio, a social impact gaming studio! At Birungi we strive for experiences that create
              meaningful impact, social progress and most importantly fun gameplay experiences that give people the
              knowledge and tools to help improve their communities and their environment.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">5K+</span>
                <span className="stat-label">Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Countries</span>
              </div>
            </div>
          </div>
        </div>

        <div ref={ref2} className={`about-row reverse ${isInView2 ? "animate" : ""}`}>
          <div className="about-image collaboration-image">
            <div className="image-overlay">
              <span>Global</span>
            </div>
          </div>
          <div className="about-content">
            <h3 className="about-heading">Collaboration & Partnerships</h3>
            <p className="about-text">
              Birungi works with partners around the globe, from Uganda, The Netherlands, Serbia and many more! From
              farmers to global governments, Birungi is building a global coalition of those who want to make this world
              a better place, and we aim to do so through our video games. Birungi is determined to leave a lasting
              impact, and create a business that achieves ambitious goals on the global stage.
            </p>
            <div className="partner-logos">
              <div className="partner-logo"></div>
              <div className="partner-logo"></div>
              <div className="partner-logo"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

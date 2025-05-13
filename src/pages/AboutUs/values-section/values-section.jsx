"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Leaf, Globe, Users, Zap } from "lucide-react"
import "./values-section.css"

function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="values-section">
      <div className="values-container">
        <h2 className="values-title">Our Core Values</h2>

        <div ref={ref} className="values-grid">
          <div className={`value-card ${isInView ? "animate" : ""}`} style={{ animationDelay: "0.1s" }}>
            <div className="value-icon green">
              <Leaf size={32} />
            </div>
            <h3 className="value-heading">Environmental Impact</h3>
            <p className="value-text">
              We're committed to creating games that raise awareness about environmental issues and inspire action.
            </p>
          </div>

          <div className={`value-card ${isInView ? "animate" : ""}`} style={{ animationDelay: "0.3s" }}>
            <div className="value-icon blue">
              <Globe size={32} />
            </div>
            <h3 className="value-heading">Global Perspective</h3>
            <p className="value-text">
              Our diverse team brings global insights to create games that resonate with players worldwide.
            </p>
          </div>

          <div className={`value-card ${isInView ? "animate" : ""}`} style={{ animationDelay: "0.5s" }}>
            <div className="value-icon purple">
              <Users size={32} />
            </div>
            <h3 className="value-heading">Community Building</h3>
            <p className="value-text">
              We believe in the power of games to build communities and foster meaningful connections.
            </p>
          </div>

          <div className={`value-card ${isInView ? "animate" : ""}`} style={{ animationDelay: "0.7s" }}>
            <div className="value-icon orange">
              <Zap size={32} />
            </div>
            <h3 className="value-heading">Innovation</h3>
            <p className="value-text">
              We push the boundaries of game design to create unique experiences that educate and entertain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection

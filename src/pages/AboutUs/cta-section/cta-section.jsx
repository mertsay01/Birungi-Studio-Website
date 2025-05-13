import "./cta-section.css"

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Make an Impact?</h2>
          <p className="cta-text">
            Join us in our mission to create games that make a difference. Whether you're a player, partner, or
            investor, there's a place for you in our story.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">Get in Touch</button>
            <button className="cta-button secondary">View Our Games</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection

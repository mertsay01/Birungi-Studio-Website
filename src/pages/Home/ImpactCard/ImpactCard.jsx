import './ImpactCard.css';

function ImpactCard() {
  
  return (
    <section className="social-impact-section">
          <div className="social-impact-content">
            <h2>The Power of Social Impact Gamification</h2>
            <div className="impact-grid">
              <div className="impact-card">
                <h3>Engaging Education</h3>
                <p>Our games transform complex environmental concepts into interactive 
                  experiences that are both fun and educational, increasing knowledge 
                  retention about environmental challenges.</p>
              </div>
              <div className="impact-card">
                <h3>Behavioral Change</h3>
                <p>Through immersive gameplay, we inspire real-world action. 
                  Players who engage with our social impact games are 
                  more likely to become more positively conscience about nature in their daily lives.</p>
              </div>
              <div className="impact-card">
                <h3>Community Building</h3>
                <p>Our games connect environmentally conscious individuals, 
                  creating a community of advocates working together to protect bee populations and promote sustainable practices.</p>
              </div>
              <div className="impact-card">
                <h3>Measurable Impact</h3>
                <p>Each game session contributes to our impact metrics, 
                  allowing us to track how digital interactions translate to environmental awareness and conservation efforts in the real world.</p>
              </div>
            </div>
          </div>
          <div className="wave-bottom">
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill="#ffffff" d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"></path>
    </svg>
  </div>
        </section>
  );
}

export default ImpactCard;

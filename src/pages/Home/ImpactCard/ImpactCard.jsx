import './ImpactCard.css';

function ImpactCard() {
  
  return (
    <section className="social-impact-section">
          <div className="social-impact-content">
            <h2>The Power of Social Impact Gamification</h2>
            <div className="impact-grid">
              <div className="impact-card">
                <h3>Engaging Education</h3>
                <p>Our games transform complex environmental concepts into interactive experiences that are both fun and educational, increasing knowledge retention by up to 90% compared to traditional learning methods.</p>
              </div>
              <div className="impact-card">
                <h3>Behavioral Change</h3>
                <p>Through immersive gameplay, we inspire real-world action. Players who engage with our bee conservation games are 3x more likely to implement bee-friendly practices in their daily lives.</p>
              </div>
              <div className="impact-card">
                <h3>Community Building</h3>
                <p>Our games connect environmentally conscious individuals, creating a community of advocates working together to protect bee populations and promote sustainable practices.</p>
              </div>
              <div className="impact-card">
                <h3>Measurable Impact</h3>
                <p>Each game session contributes to our impact metrics, allowing us to track how digital interactions translate to environmental awareness and conservation efforts in the real world.</p>
              </div>
            </div>
          </div>
        </section>
  );
}

export default ImpactCard;

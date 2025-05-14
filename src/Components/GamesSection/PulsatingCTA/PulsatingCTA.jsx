import { useState } from 'react';
import './PulsatingCTA.css';

const PulsatingCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="cta-container">
      <button 
        className={`pulsating-button ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="button-text">Play Now</span>
        <span className="button-icon">→</span>
      </button>
      <div className={`bee-trail ${isHovered ? 'active' : ''}`}>
        {Array(5).fill().map((_, i) => (
          <div 
            key={i} 
            className="trail-dot"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PulsatingCTA; 

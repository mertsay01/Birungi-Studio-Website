import { useState, useEffect } from 'react';
import './HoneycombReveal.css';

const HoneycombReveal = ({ children }) => {
  const [revealed, setRevealed] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="honeycomb-container">
      <div className={`honeycomb-grid ${revealed ? 'revealed' : ''}`}>
        {Array(30).fill().map((_, i) => (
          <div 
            key={i} 
            className="honeycomb-cell"
            style={{ 
              animationDelay: `${i * 0.05}s`,
              top: `${Math.floor(i / 5) * 80}px`,
              left: `${(i % 5) * 80 + (Math.floor(i / 5) % 2 ? 40 : 0)}px`
            }}
          ></div>
        ))}
      </div>
      <div className={`content ${revealed ? 'visible' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default HoneycombReveal;

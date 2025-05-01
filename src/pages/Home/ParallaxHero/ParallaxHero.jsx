import { useEffect, useState } from 'react';
import './ParallaxHero.css';

const ParallaxHero = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div 
        className="parallax-background" 
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      ></div>
      <div 
        className="parallax-content"
        style={{ transform: `translateY(${offset * 0.2}px)` }}
      >
        <h1>BIRUNGI STUDIO</h1>
        <p>Through gamification we teach people the impact of urbanization, pesticides on bees and how these hazards
        play a key in their extinction.</p>
      </div>
    </div>
  );
};

export default ParallaxHero;

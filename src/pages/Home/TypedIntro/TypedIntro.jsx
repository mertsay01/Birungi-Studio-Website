import { useState, useEffect } from 'react';
import './TypedIntro.css';

const TypedIntro = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Through gamification we teach people the impact of urbanization, pesticides on bees and how these hazards play a key in their extinction.";
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [index, fullText]);
  
  return (
    <div className="typed-intro">
      <h1 className="typed-title">BIRUNGI STUDIO</h1>
      <p className="typed-text">{displayText}<span className="cursor">|</span></p>
    </div>
  );
};

export default TypedIntro;

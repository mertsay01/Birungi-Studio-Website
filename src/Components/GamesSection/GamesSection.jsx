import React from "react";
import "./GamesSection.css";
import PulsatingCTA from './PulsatingCTA/PulsatingCTA';
import IXploringLogo from '../../assets/IXploringLogo.png';

const GamesSection = () => {
  return (
    <section className="games-section">
      <div className="wave-top">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>
      
      <h2 className="games-title">Our Games</h2>
      
      <div className="featured-game">
        <div className="game-spotlight">
          <div className="game-info">
            <h3 className="franchise-title">Hey Honey Franchise</h3>
            <div className="game-showcase">
              <img className="game-logo" src={IXploringLogo} alt="I Bee Xploring" />
              <div className="game-description">
                <h4 className="game-title">I Bee Xploring</h4>
                <p>Join the adventure in our flagship game from the Hey Honey franchise! Navigate through beautiful landscapes, collect honey, and discover the secrets of the hive.</p>
                <div className="game-features">
                  <span className="feature">Adventure</span>
                  <span className="feature">Educational</span>
                  <span className="feature">Family-friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cta-container">
          <PulsatingCTA />
        </div>
      </div>
    </section>
  );
};

export default GamesSection;

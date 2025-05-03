import React from "react";
import "./GamesSection.css";

const GamesSection = () => {
  return (
    <section className="games-section">
      <h2 className="games-title">Our Games</h2>
      <div className="games-cards">
        <div className="game-card i-bee-xploring">
          <h3 className="game-title">I Bee Xploring</h3>
          <p>Embark on an educational adventure with bees and nature!</p>
        </div>
        <div className="game-card">
          <h3 className="game-title">Hey Honey</h3>
          <p>A fun franchise about teamwork, honey collection, and colony survival.</p>
        </div>
        <div className="game-card coming-soon">
          <h3 className="game-title">Coming Soon</h3>
          <p>Stay tuned for our next big release. More fun awaits!</p>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;

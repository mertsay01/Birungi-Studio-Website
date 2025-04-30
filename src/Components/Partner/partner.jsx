import React from 'react';
import './Partner.css';

const Partner = () => {
  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Partners</h2>
      <div className="partners-logos">
        <img className="partners-logo" src="https://via.placeholder.com/150?text=Partner+1" alt="Partner 1" />
        <img className="partners-logo" src="https://via.placeholder.com/150?text=Partner+2" alt="Partner 2" />
        <img className="partners-logo" src="https://via.placeholder.com/150?text=Partner+3" alt="Partner 3" />
        <img className="partners-logo" src="https://via.placeholder.com/150?text=Partner+4" alt="Partner 4" />
        <img className="partners-logo" src="https://via.placeholder.com/150?text=Partner+5" alt="Partner 5" />
      </div>
    </section>
  );
};

export default Partner;


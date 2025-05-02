import React from 'react';
import './Partner.css';
import OlivaBotLogo from '../../assets/OlivaBotLogo.png';
import BeeGrateful from '../../assets/BeeGrateful.png';
import logo_mycofarming from '../../assets/logo_mycofarming.png';
import MAlogo from '../../assets/MAlogo.png';
import VUlogo from '../../assets/VUlogo.png';
import NVVN from '../../assets/NVVN.jpg';


const Partner = () => {
  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Partners</h2>
      <div className='partners-container'>
        <div className='partners-arrow partners-arrow-left'></div>
        <div className="partners-logos">
        <img className="partners-logo" src={BeeGrateful} alt="Bee Grateful" />
        <img className="partners-logo" src={OlivaBotLogo} alt="Oliva Bot Logo" />
        <img className="partners-logo" src={logo_mycofarming} alt="Myco Farming" />
        <img className="partners-logo" src={MAlogo} alt="MA Logo" />
        <img className="partners-logo" src={VUlogo} alt="VU Logo" />
        <img className="partners-logo" src={NVVN} alt="NVVN" />

        <img className="partners-logo" src={BeeGrateful} alt="Bee Grateful" />
        <img className="partners-logo" src={OlivaBotLogo} alt="Oliva Bot Logo" />
        <img className="partners-logo" src={logo_mycofarming} alt="Myco Farming" />
        <img className="partners-logo" src={MAlogo} alt="MA Logo" />
        </div>
        <div className='partners-arrow partners-arrow-right'></div>
      </div>
      
    </section>
  );
};

export default Partner;


import React from 'react';
import './Footer.css';
import googlePlay1 from '../../assets/googlePlay1.png';
import Applestore1 from '../../assets/Applestore1.png';
import {FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-heading">Follow us on</p>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={40}/></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={40}/></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter size={40}/></a>
        </div> 
      </div>

      <div className="footer-middle">
        <p className="footer-heading">Contact us on</p>
        <div className="footer-contact">
          <p>Support email: support@birungi.studio</p>
        
          <p>Business email: business@birungi.studio</p>
        </div> 
      </div>



      <div className="footer-right">
        <div className="store-buttons">
        <img src={googlePlay1} alt="Get it on Google Play" className="store-badge" />
        <img src={Applestore1} alt="Download on the App Store" className="store-badge" />
        </div>       
      </div>
    </footer>
  );
}

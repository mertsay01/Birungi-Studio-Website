import React from 'react';
import './Footer.css';
import Applestore1 from '../../assets/Applestore1.png';
import googlePlay1 from '../../assets/googlePlay1.png';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className='footer-heading'>Follow us on</p>
        <div className='social-icons'>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaLinkedin size={40}/></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaInstagram size={40}/></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaTwitter size={40}/></a>

        </div >
        
      </div>

      <div className="footer-right">
        <img src={googlePlay1} alt="Get it on Google Play" className="store-badge" />
        <img src={Applestore1} alt="Download on the App Store" className="store-badge" />
      </div>
    </footer>
  )
}

export default Footer
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo2.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>

      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li>
          <NavLink to="/careers" className={({ isActive }) => (isActive ? 'active' : '')}>
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact Us
          </NavLink>
        </li>
      </ul>

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </nav>
  );
};

export default Navbar;
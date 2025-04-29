
import { NavLink } from 'react-router-dom';

import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo2.png'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
        <div className='nav-container'>
        <NavLink to='/' className='logo-link'>
            <img src={logo} alt="logo" className='logo' />
        </NavLink>
        </div>
        
        
        <button className='menu-toggle' onClick={() => setIsOpen(!isOpen)}>
         ☰
        </button>
        <ul className = {isOpen ? "nav-links open": "nav-links"}>
            <li>
                <NavLink to ='/careers' className={({ isActive}) => isActive ? "active": ""}>Careers</NavLink>
            </li>
            <li>
            <NavLink to ='/about-us' className={({ isActive}) => isActive ? "active": ""}>About Us</NavLink>
            </li>
            <li>
            <NavLink to ='/contact-us' className={({ isActive}) => isActive ? "active": ""}>Contact Us</NavLink>
            </li>
        </ul>
      
    </nav>
  )
}
export default Navbar;
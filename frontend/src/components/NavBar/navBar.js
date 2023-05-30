import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoSVG.svg';
import './style.scss';
import { useEffect } from 'react';


const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const headerNav = document.querySelector('.header-nav');
      if (window.scrollY > 300) {
        headerNav.classList.add('scrolled');
      } else {
        headerNav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className="header-nav">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="links-container">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About Us</Link>
        <Link to="/planning" className="link">planing</Link>
        <Link to="/" className="link">plane</Link>
        <Link to="/" className="link">Contact Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;

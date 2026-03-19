import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (section) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    }else {
      window.dispatchEvent(new CustomEvent('scroll-to-section', { detail: section }));
    }
  };


  return (
    /* Header Component */
<header className="main-header">
  <div className="header-container">

    <div className="logo"> UNIQU LEADS</div>
<div 
  className={`hamburger ${menuOpen ? "active" : ""}`} 
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</div>
    <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
      <Link to="/" onClick={() => {
  goToSection('home');
  setMenuOpen(false);
}}>
  Home
</Link>

<Link to="/" onClick={() => {
  goToSection('services');
  setMenuOpen(false);
}}>
  Services
</Link>

<Link to="/" onClick={() => {
  goToSection('about');
  setMenuOpen(false);
}}>
  About Us
</Link>

<Link to="/" onClick={() => {
  goToSection('contact');
  setMenuOpen(false);
}}>
  Contact Us
</Link>
      </nav>
    
    <div className="header-buttons">
      <button class="btn-outline">Get Demo</button>
      <button class="btn-primary">Get Started</button>
    </div>

  </div>
</header>
  );
}

export default Header;
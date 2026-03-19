import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (section) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    }else {
      window.dispatchEvent(new CustomEvent('scroll-to-section', { detail: section }));
    }
  };


  return (
    /* Header Component */
<header class="main-header">
  <div class="header-container">

    <div class="logo"> UNIQU LEADS</div>

    <nav class="nav-links">
      <Link to="/" onClick={() => goToSection('home')}>Home</Link>
      <Link to="/" onClick={() => goToSection('services')}>Services</Link>
      <Link to="/" onClick={() => goToSection('about')}>About Us</Link>
      <Link to="/" onClick={() => goToSection('contact')}>Contact Us</Link>
    </nav>
    
    <div class="header-buttons">
      <button class="btn-outline">Get Demo</button>
      <button class="btn-primary">Get Started</button>
    </div>

  </div>
</header>
  );
}

export default Header;
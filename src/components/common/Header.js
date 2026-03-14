import './Header.css';

function Header() {
  return (
    /* Header Component */
<header class="main-header">
  <div class="header-container">

    <div class="logo"> UNIQU LEADS</div>

    <nav class="nav-links">
      <a href="#Home">Home</a>
      <a href="#Services">Services</a>
      <a href="#About">About Us</a>
      <a href="#Contact">Contact Us</a>
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
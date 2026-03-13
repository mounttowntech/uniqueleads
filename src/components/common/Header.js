import './Header.css';

function Header() {
  return (
    /* Header Component */
<header class="main-header">
  <div class="header-container">

    <div class="logo">LOGO</div>

    <nav class="nav-links">
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
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
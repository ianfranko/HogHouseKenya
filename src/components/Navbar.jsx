import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>Hog House Kenya</Link>
      </div>
      <button 
        className="navbar-hamburger" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
        <span className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
        <span className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
      </button>
      <ul className={isMenuOpen ? "navbar-links active" : "navbar-links"}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Our Products</Link></li>
        <li><Link to="/recipes" onClick={closeMenu}>Recipes</Link></li>
        <li><Link to="/farming" onClick={closeMenu}>Farming</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 
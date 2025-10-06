import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Hog House Kenya. All rights reserved.</p>
      <div className="footer-socials">
        <span className="footer-socials-text">Connect with us on socials: </span>
        <div className="footer-icons">
          <a href="https://facebook.com/hoghousekenya" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com/hoghousekenya" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/254111504199" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Hog House Kenya. All rights reserved.</p>
      <div style={{ marginTop: '0.7em' }}>
        <span style={{ fontWeight: 500 }}>Connect with us on socials: </span>
        <a href="https://facebook.com/hoghousekenya" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 0.5em' }} aria-label="Facebook">
          <FaFacebook size={24} />
        </a>
        <a href="https://instagram.com/hoghousekenya" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 0.5em' }} aria-label="Instagram">
          <FaInstagram size={24} />
        </a>
        <a href="https://wa.me/254111504199" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 0.5em' }} aria-label="WhatsApp">
          <FaWhatsapp size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer; 
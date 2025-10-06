import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero enhanced-hero">
        <div className="hero-overlay">
          <h1 className="hero-title" style={{ color: '#ffffff' }}>Welcome to Hog House Kenya</h1>
          <p className="hero-subtitle" style={{ color: '#ffffff' }}>Nairobi's premier butchery for world-class pork and gourmet meats. We deliver excellence in every cut, with a commitment to quality, hygiene, and customer satisfaction.</p>
          <a href="#products" className="cta-btn">Order Now</a>
        </div>
      </section>
      <section className="intro">
        <h2>Quality Meats, Trusted by Chefs & Families</h2>
        <p>Experience the finest selection of pork and specialty meats, sourced from trusted farms and prepared to the highest international standards. Free delivery on orders over Ksh 5,000 (within 16km).</p>
        <div className="features">
          <div className="feature">
            <span className="feature-icon" role="img" aria-label="Farm Fresh">🌱</span>
            <h3>Farm Fresh</h3>
            <p>Directly sourced from trusted local farms for unbeatable freshness.</p>
          </div>
          <div className="feature">
            <span className="feature-icon" role="img" aria-label="Hygienic Processing"></span>
            <h3>Hygienic Processing</h3>
            <p>Processed in state-of-the-art, hygienic facilities for your safety.</p>
          </div>
          <div className="feature">
            <span className="feature-icon" role="img" aria-label="Fast Delivery"></span>
            <h3>Fast Delivery</h3>
            <p>Enjoy free, fast delivery on orders over Ksh 5,000 within 16km.</p>
          </div>
        </div>
      </section>

      {/* Promotional Deals Section */}
      <section className="promo-section">
        <div className="promo-header">
          <h2> Special Offers & Combo Deals</h2>
          <p>Limited time offers on premium cuts and family-sized packages!</p>
        </div>
        <div className="promo-deals">
          <div className="promo-card highlight">
            <div className="promo-badge">HOT DEAL</div>
            <h3>Family BBQ Bundle</h3>
            <p className="promo-description">Perfect for weekend grilling! Includes 2kg pork ribs, 1kg sausages, and 1kg bacon.</p>
            <p className="promo-price">
              <span className="old-price">Ksh 4,500</span>
              <span className="new-price">Ksh 3,999</span>
            </p>
            <a href="https://wa.me/254111504199?text=I'm%20interested%20in%20the%20Family%20BBQ%20Bundle" className="promo-cta" target="_blank" rel="noopener noreferrer">Order Now</a>
          </div>
          <div className="promo-card">
            <h3>Gourmet Breakfast Pack</h3>
            <p className="promo-description">Start your day right with premium streaky bacon, farm eggs, and artisan sausages.</p>
            <p className="promo-price">
              <span className="old-price">Ksh 2,200</span>
              <span className="new-price">Ksh 1,899</span>
            </p>
            <a href="https://wa.me/254111504199?text=I'm%20interested%20in%20the%20Gourmet%20Breakfast%20Pack" className="promo-cta" target="_blank" rel="noopener noreferrer">Order Now</a>
          </div>
          <div className="promo-card">
            <h3>Chef's Choice Selection</h3>
            <p className="promo-description">Premium pork shoulder chops, belly cuts, and gourmet burger patties for culinary excellence.</p>
            <p className="promo-price">
              <span className="old-price">Ksh 3,800</span>
              <span className="new-price">Ksh 3,299</span>
            </p>
            <a href="https://wa.me/254111504199?text=I'm%20interested%20in%20the%20Chef's%20Choice%20Selection" className="promo-cta" target="_blank" rel="noopener noreferrer">Order Now</a>
          </div>
          <div className="promo-card">
            <h3>Pet Lover's Special</h3>
            <p className="promo-description">Premium pet mince, rabbit meat, and chicken cuts - perfect for your furry friends' nutrition.</p>
            <p className="promo-price">
              <span className="old-price">Ksh 2,800</span>
              <span className="new-price">Ksh 2,399</span>
            </p>
            <a href="https://wa.me/254111504199?text=I'm%20interested%20in%20the%20Pet%20Lover's%20Special" className="promo-cta" target="_blank" rel="noopener noreferrer">Order Now</a>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2> Order Fresh Pork Today!</h2>
          <p>Get premium, hygienically processed pork and gourmet meats delivered straight to your doorstep. Free delivery on orders over Ksh 5,000 within 16km!</p>
          <div className="cta-buttons">
            <a href="https://wa.me/254111504199?text=Hello!%20I'd%20like%20to%20place%20an%20order" className="cta-primary" target="_blank" rel="noopener noreferrer">
              📱 WhatsApp Order
            </a>
            <a href="tel:+254111504199" className="cta-secondary">
              📞 Call Us Now
            </a>
          </div>
          <p className="cta-subtext">Open Daily • Fast Delivery • Quality Guaranteed</p>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="secondary-cta">
        <h3>Get Premium Meat Delivered</h3>
        <p>Experience the convenience of having restaurant-quality meats delivered to your home. Order now and taste the Hog House difference!</p>
        <a href="/products" className="cta-btn-secondary">Browse Our Products</a>
      </section>
    </div>
  );
}

export default Home; 
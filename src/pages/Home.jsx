import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero enhanced-hero">
        <div className="hero-overlay">
          <h1 className="hero-title" style={{ color: '#ffffff' }}>Welcome to Hog House Kenya</h1>
          <p className="hero-subtitle" style={{ color: '#ffffff' }}ß>Nairobi's premier butchery for world-class pork and gourmet meats. We deliver excellence in every cut, with a commitment to quality, hygiene, and customer satisfaction.</p>
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
            <span className="feature-icon" role="img" aria-label="Hygienic Processing">🧼</span>
            <h3>Hygienic Processing</h3>
            <p>Processed in state-of-the-art, hygienic facilities for your safety.</p>
          </div>
          <div className="feature">
            <span className="feature-icon" role="img" aria-label="Fast Delivery">🚚</span>
            <h3>Fast Delivery</h3>
            <p>Enjoy free, fast delivery on orders over Ksh 5,000 within 16km.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 
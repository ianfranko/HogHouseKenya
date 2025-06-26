function Contact() {
  return (
    <div className="contact">
      <h1>Contact Hog House Kenya</h1>
      <form className="contact-form">
        <label>Name:<input type="text" name="name" /></label>
        <label>Email:<input type="email" name="email" /></label>
        <label>Message:<textarea name="message" /></label>
        <button type="submit">Send</button>
      </form>
      <div style={{marginTop: '2rem'}}>
        <p>📍 Visit us: Kingara Road, Lavington, Nairobi</p>
        <p>📞 Call: <a href="tel:+254111504199">+254 111 504199</a></p>
        <p>📱 WhatsApp: <a href="https://wa.me/254111504199" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
      </div>
    </div>
  );
}

export default Contact; 
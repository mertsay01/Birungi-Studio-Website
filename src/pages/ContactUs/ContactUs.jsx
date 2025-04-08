import "./ContactUs.css";
import contactImage from '../../assets/contactImage.jpg';

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Background Image */}
      <div className="contact-image">
        <img src={contactImage} alt="Contact Us" />
        <div className="overlay-text">
          <h1>CONTACT US</h1>
          <p>We'd love to hear from you. Let's connect!</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
          convallis tincidunt arcu, eu ullamcorper elit gravida non.
        </p>

        {/* Contact Form */}
        <section className="contact-section">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <textarea id="message" placeholder="Write your message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        </section>
        
      </div>
    </div>
  );
};

export default ContactUs;

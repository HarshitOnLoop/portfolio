import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Make sure your CSS is updated for React


let quoteIndex = 0;

const Contact = () => {
  useEffect(() => {
    emailjs.init("AHrHKBB5iJ1ksH1I9");

    const interval = setInterval(() => {
      const quoteP = document.querySelector('.experience-detail.active p');
      if (!quoteP) return;

      // Fade-out
      quoteP.style.transition = 'opacity 0.5s, transform 0.5s';
      quoteP.style.opacity = 0;
      quoteP.style.transform = 'scale(0.95)';

      setTimeout(() => {
        quoteP.textContent = quotes[quoteIndex];
        quoteP.style.backgroundColor = colors[quoteIndex];

        // Fade-in
        quoteP.style.opacity = 1;
        quoteP.style.transform = 'scale(1)';

        quoteIndex = (quoteIndex + 1) % quotes.length;
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_q5r4far", "template_8h0b6if", e.target)
      .then(() => {
        alert("✅ Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("❌ Failed to send message: " + error.text);
      });
  };

  return (
    <div className="contact">
      {/* Curved Text */}
      <svg width="100%" height="300" viewBox="0 0 1200 300" style={{ position: "absolute", left: 0, overflow: "visible", zIndex: 2, paddingTop: "40px" }}>
        <path id="curve" d="M50,210 C600,-2 600,-2 1150,210" fill="transparent" />
        <text width="1200">
          <textPath href="#curve" startOffset="50%" textAnchor="middle"
            style={{ fontSize: "120px", fontFamily: "'Instrument Serif', serif", fontWeight: 900, fill: "white", letterSpacing: "10px" }}>
            CONTACT ME
          </textPath>
        </text>
      </svg>

      {/* Eyes */}
      <div className="eyescenter">
      <div className="eyes">
        <div className="eye"><div className="pupil"></div></div>
        <div className="eye"><div className="pupil"></div></div>
        <img src="img/pngimg.com - moustache_PNG8.png" alt="Moustache" />
      </div>
</div>

      <div className="contact-section-wrapper" id="uniqueContactSection">
        {/* Left: Quick Details */}
        <div className="contact-details-card" id="uniqueDetailsCard">
          <h3 id="uniqueDetailsHeader">Quick Details</h3>

          <div className="contact-detail-item" id="detailEmail">
            <i className="fa-solid fa-envelope contact-icon"></i>
            <span className="contact-text">example@email.com</span>
          </div>

          <div className="contact-detail-item" id="detailPhone">
            <i className="fa-solid fa-phone contact-icon"></i>
            <span className="contact-text">+91 12345 67890</span>
          </div>

          <div className="contact-detail-item" id="detailWebsite">
            <i className="fa-solid fa-globe contact-icon"></i>
            <span className="contact-text">www.example.com</span>
          </div>

          <div className="contact-detail-item" id="detailPosition">
            <i className="fa-solid fa-briefcase contact-icon"></i>
            <span className="contact-text">Frontend Developer</span>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-card" id="uniqueFormCard">
          <h2 id="uniqueFormHeader">Contact Me</h2>
          <form id="uniqueContactForm" onSubmit={handleSubmit}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  
);
};

export default Contact;

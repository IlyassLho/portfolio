import React from "react";
import Sparkles from "../Sparkles/Sparkles";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer-section">

      <h2 className="footer-mini-title">Contact</h2>

      <div className="footer-content-center">
        <div className="heading-center">
          <Sparkles>
            <h1 className="footer-main-title">Get In Touch</h1>
          </Sparkles>
        </div>
        
        <p className="contact-text">
          Have questions? Ping me with a <a href="https://linkedin.com/in/ilyas-lhouari/" target="_blank" rel="noreferrer" className="highlight-link">LinkedIn</a> DM 
          or email at <a href="mailto:ilyasslhouari@gmail.com" className="highlight-link">ilyasslhouari@gmail.com</a>.
        </p>
      </div>

    </section>
  );
}

export default Footer;
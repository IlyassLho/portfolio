import React from "react";
import { Trans } from "react-i18next";
import Tilt from 'react-parallax-tilt';
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">

        {/* LEFT SIDE: Image */}
        <div className="about-image-wrapper">
          <Tilt tiltMaxAngleX={35} tiltMaxAngleY={35} scale={1.1} transitionSpeed={450} className="tilt-box">
            <div className="img-card">
              <img src="/lilyass.jpg" alt="Ilyas Lhouari" className="about-img" />
            </div>
          </Tilt>
        </div>

        {/* RIGHT SIDE: Text */}
        <div className="about-text">
          <h2 className="section-title">
            <Trans 
              i18nKey="about_title" 
              components={{ 
                highlight: <span className="text-primary" /> 
              }} 
            />
          </h2>

          <p className="intro-text">
            <Trans
              i18nKey="about_intro"
              components={{
                highlight: <span className="text-primary" />,
                bold: <strong />
              }}
            />
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;
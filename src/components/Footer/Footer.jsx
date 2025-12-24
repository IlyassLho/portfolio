import React from "react";
import { useTranslation, Trans } from "react-i18next";
import Sparkles from "../Sparkles/Sparkles";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <section className="footer-section">

      <h2 className="footer-mini-title">{t('footer_contact')}</h2>

      <div className="footer-content-center">
        <div className="heading-center">
          <Sparkles>
            <h1 className="footer-main-title">{t('footer_get_in_touch')}</h1>
          </Sparkles>
        </div>
        
        <p className="contact-text">
          <Trans 
            i18nKey="footer_contact_text" 
            components={{
              linkedin: <a href="https://linkedin.com/in/ilyas-lhouari/" target="_blank" rel="noreferrer" className="highlight-link" />,
              email: <a href="mailto:ilyasslhouari@gmail.com" className="highlight-link" />
            }}
          />
        </p>
      </div>

    </section>
  );
}

export default Footer;
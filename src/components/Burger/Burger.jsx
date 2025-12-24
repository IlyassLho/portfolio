import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Burger.css';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { key: "nav_home", href: "#home" },
    { key: "nav_about", href: "#about" },
    { key: "nav_skills", href: "#skills" },
    { key: "nav_projects", href: "#projects" },
    { key: "nav_education", href: "#education" },
    { key: "nav_certificate", href: "#certificate" },
  ];

  return (
    <>
      <button 
        className={`burger-btn ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="menu-nav">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="menu-link"
              onClick={() => setIsOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Burger;
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

// Components
import Preloader from './components/loading/Preloader';
import Dock from './components/Dock/Dock';
import Burger from './components/Burger/Burger';
import Footer from './components/Footer/Footer';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Education from './pages/Education/Education';
import Project from './pages/Project/Projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useTranslation();

  // Handle RTL/LTR direction changes
  useEffect(() => {
    const currentLang = i18n.language;
    const isRTL = currentLang === 'ar';
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
  }, [i18n.language]);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="App">
          <Burger />
          <LanguageSwitcher />
          <Home />
          <About />
          <Skills />
          <Education />
          <Project />
          <Footer />
          <Dock />
        </div>
      )}
    </>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';

// Components
import Preloader from './components/loading/Preloader';
import Dock from './components/Dock/Dock';
import Burger from './components/Burger/Burger';
// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Education from './pages/Education/Education';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="App">
          <Burger />
          <Home />
          <About />
          <Skills />
          <Education />
          <Dock />
        </div>
      )}
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ActionCards from './components/ActionCards';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <main className="w-full">
        <Hero />
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <ActionCards />
          <HowItWorks />
          <About />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;

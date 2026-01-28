import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Segments from './components/Segments';
import About from './components/About';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Segments />
      <About />
      <Stats />
      <HowItWorks />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
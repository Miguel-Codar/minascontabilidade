import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Segments from './components/Segments';
import About from './components/About';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  const [route, setRoute] = useState<string>('');
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (!hash || hash === '/' || hash === '') {
        setRoute('home');
        setSlug(null);
        return;
      }
      const parts = hash.split('/').filter(Boolean);
      if (parts[0] === 'blog' && parts.length === 1) {
        setRoute('blog-list');
        setSlug(null);
      } else if (parts[0] === 'blog' && parts[1]) {
        setRoute('blog-post');
        setSlug(parts[1]);
      } else {
        setRoute('home');
        setSlug(null);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {route === 'home' && (
        <>
          <Hero />
          <Segments />
          <About />
          <Stats />
          <HowItWorks />
          <Blog />
          <ContactForm />
        </>
      )}
      {route === 'blog-list' && <BlogList />}
      {route === 'blog-post' && slug && <BlogPost slug={slug} />}
      <Footer />
    </div>
  );
}

export default App;

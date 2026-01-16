import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Comparison from './components/Comparison';
import NationwideReach from './components/NationwideReach';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CreditSimulator from './components/CreditSimulator';
import BeforeAfter from './components/BeforeAfter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <CreditSimulator />
        <Services />
        <WhyUs />
        <NationwideReach />
        <Comparison />
        <BeforeAfter />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
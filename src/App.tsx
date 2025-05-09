import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsSection } from './components/SolutionsSection';
import { TeamSection } from './components/TeamSection';
import { WorkflowSection } from './components/workflow/WorkflowSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import Chatbot from './components/Chatbot';
import { CookieConsent } from './components/CookieConsent';

function App() {
  return (
    <div className="relative min-h-screen z-10">
        <Navbar />
        <Hero />
        <SolutionsSection />
        <TeamSection />
        <WorkflowSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <Chatbot />
        <CookieConsent />
    </div>
  );
}

export default App;
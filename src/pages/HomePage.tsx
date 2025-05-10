import React from 'react';
import { Hero } from '../components/Hero';
import { SolutionsSection } from '../components/SolutionsSection';
import { TeamSection } from '../components/TeamSection';
import { WorkflowSection } from '../components/workflow/WorkflowSection';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { ContactSection } from '../components/contact/ContactSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <SolutionsSection />
      <TeamSection />
      <WorkflowSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

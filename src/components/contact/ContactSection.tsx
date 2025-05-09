import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { SectionContainer } from '../SectionContainer';
import { ContactInfo } from './ContactInfo';

export const ContactSection = () => {
  return (
    <SectionContainer id="contacto" className="py-24" >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contáctanos
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { SectionContainer } from '../SectionContainer';

export const TestimonialsSection = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Testimonios de Clientes
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos
            a través de soluciones innovadoras y personalizadas.
          </p>
        </motion.div>

        <TestimonialsCarousel />
      </div>
    </div>
  );
};
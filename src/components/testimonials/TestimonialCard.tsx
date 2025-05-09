import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from './testimonials-data';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="p-8">
      <motion.div
        className="relative p-8 rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(169.4deg, rgba(57, 132, 244, 0.04) -6.01%, rgba(12, 211, 255, 0.04) 36.87%, rgba(47, 124, 240, 0.04) 78.04%, rgba(14, 101, 232, 0.04) 103.77%)'
        }}
      >
        <div className="absolute inset-0 backdrop-blur-xl" />
        <div className="relative z-10">
          <Quote className="w-12 h-12 text-[#00f2ff] mb-6 opacity-50" />
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
              <p className="text-white/60">{testimonial.position}</p>
            </div>
          </div>
          
          <p className="text-lg text-white/80 leading-relaxed">
            {testimonial.content}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
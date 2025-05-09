import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Lightbulb } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { FloatingCard } from './FloatingCard';

const features = [
  {
    icon: Rocket,
    title: "Automatización impulsada por IA",
    description: "Desarrollamos sistemas que simplifican y optimizan tus operaciones diarias",
    color: "text-[#00f2ff]"
  },
  {
    icon: Target,
    title: "Marketing Digital",
    description: "Creamos estrategias efectivas para maximizar tu presencia en línea",
    color: "text-[#b400ff]"
  },
  {
    icon: Lightbulb,
    title: "Consultoría y desarrollo",
    description: "Desde apps personalizadas hasta asesoría estratégica, te acompañamos en cada paso",
    color: "text-[#00f2ff]"
  }
];

export const FeatureSection = () => {
  return (
    <div className="relative py-12">
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <FloatingCard delay={index * 0.2} className="h-full">
                <FeatureCard {...feature} />
              </FloatingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
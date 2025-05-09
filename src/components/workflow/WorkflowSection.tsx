import React from 'react';
import { motion } from 'framer-motion';
import { WorkflowStep } from './WorkflowStep';
import { SectionContainer } from '../SectionContainer';
import { workflowSteps } from './workflow-data';

export const WorkflowSection = () => {
  return (
    <SectionContainer className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Así es como trabajamos
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Un proceso estructurado y eficiente para garantizar el éxito de tu proyecto
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00f2ff]/20 to-transparent -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <WorkflowStep
                key={index}
                step={step}
                index={index}
                total={workflowSteps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
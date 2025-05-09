import React from 'react';
import { motion } from 'framer-motion';
import { WorkflowStepType } from './workflow-data';

interface WorkflowStepProps {
  step: WorkflowStepType;
  index: number;
  total: number;
}

export const WorkflowStep: React.FC<WorkflowStepProps> = ({ step, index }) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      <div className="flex flex-col items-center text-center">
        {/* Number Circle */}
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00f2ff] to-[#00f2ff]/50 flex items-center justify-center mb-6 relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-2xl font-bold text-black">
            {index + 1}
          </span>
        </motion.div>

        {/* Icon */}
        <div className="mb-4">
          <Icon className="w-8 h-8 text-[#00f2ff]" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">
            {step.title}
          </h3>
          <p className="text-white/70">
            {step.description}
          </p>
        </div>

        {/* Hover Effect Container */}
        <motion.div
          className="absolute inset-0 -m-4 rounded-xl bg-white/5 opacity-0 transition-opacity"
          whileHover={{ opacity: 1 }}
        />
      </div>
    </motion.div>
  );
};
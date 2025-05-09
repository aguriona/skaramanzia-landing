import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  delay = 0,
  className
}) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
      className={clsx(
        "relative p-8 rounded-2xl",
        "bg-black/30 backdrop-blur-md",
        "border border-white/10",
        "shadow-[0_0_15px_rgba(0,242,255,0.1)]",
        "hover:shadow-[0_0_30px_rgba(0,242,255,0.2)]",
        "transition-shadow duration-500",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
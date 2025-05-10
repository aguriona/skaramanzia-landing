import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/skaramanziaLogo.JPG" 
        alt="skaramanzia Logo" 
        className="h-8 w-auto"
      />
      {showText && (
        <span className="text-white font-bold text-xl">Skaramanzia</span>
      )}
    </motion.div>
  );
};
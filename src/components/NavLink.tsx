import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile }) => {
  return (
    <motion.a
      href={href}
      className={`text-white hover:text-[#00f2ff] relative ${
        mobile ? 'text-lg' : 'text-sm'
      }`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f2ff]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
};
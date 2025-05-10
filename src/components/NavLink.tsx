import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile, onClick }) => {
  const isExternalLink = !href.startsWith('#');
  
  const linkContent = (
    <>
      {children}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f2ff]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
  
  const linkClass = `text-white hover:text-[#00f2ff] relative ${
    mobile ? 'text-lg' : 'text-sm'
  }`;
  
  // Si el enlace es interno (comienza con #), usamos un elemento <a>
  if (!isExternalLink) {
    return (
      <motion.a
        href={href}
        className={linkClass}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
      >
        {linkContent}
      </motion.a>
    );
  }
  
  // Si el enlace es a otra página, usamos el componente Link de react-router-dom
  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/${href}`} className={linkClass} onClick={onClick}>
        {linkContent}
      </Link>
    </motion.div>
  );
};
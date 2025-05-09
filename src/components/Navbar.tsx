import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.95)']
  );
  const borderRadius = useTransform(scrollY, [0, 100], [0, 12]);

  return (
    <motion.nav
      style={{ backgroundColor, borderRadius }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#soluciones">Soluciones</NavLink>
          <NavLink href="#equipo">Equipo</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
          <NavLink href="#blog">Blog</NavLink>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[#00f2ff] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-gray-800"
        >
          <div className="flex flex-col p-4 space-y-4">
            <NavLink href="#soluciones" mobile>Soluciones</NavLink>
            <NavLink href="#equipo" mobile>Equipo</NavLink>
            <NavLink href="#contacto" mobile>Contacto</NavLink>
            <NavLink href="#blog" mobile>Blog</NavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
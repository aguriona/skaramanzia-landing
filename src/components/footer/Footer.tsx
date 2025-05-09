import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Logo } from '../Logo';

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/skaramanz.ia/' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61575761200618' },
    { icon: Linkedin, href: 'https://linkedin.com/company/morpheus-ai' }
  ];

  const links = [
    { text: 'Inicio', href: '#' },
    { text: 'Servicios', href: '#servicios' },
    { text: 'Sobre Nosotros', href: '#about' },
    { text: 'Blog', href: '#blog' },
    { text: 'Contacto', href: '#contacto' }
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 py-12">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-white/70">
              Transformando negocios con soluciones tecnológicas innovadoras.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-[#00f2ff] transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-white/70">
              <li>Argentina</li>
              <li>skaramanziatech@gmail.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#00f2ff]" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-white/50">
          <p>© {new Date().getFullYear()} Morpheus AI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} data-section-container className={`relative ${className}`}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B0B1E]/40 backdrop-blur-sm section-bg-tint" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141432]/30 to-transparent section-bg-via" />
        {/* Divisor superior sutil */}
        <div className="section-divider absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};
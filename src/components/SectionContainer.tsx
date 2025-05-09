import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B0B1E]/40 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141432]/30 to-transparent" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};
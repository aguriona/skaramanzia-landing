import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ words, className = '' }) => {
  const text = useTypewriter({ words });

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};
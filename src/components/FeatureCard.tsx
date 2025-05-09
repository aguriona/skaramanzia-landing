import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  color
}) => {
  return (
    <div className="flex flex-col items-center text-center p-8">
      <div className={`${color} p-4 rounded-2xl bg-black/40 shadow-[0_0_15px_rgba(0,242,255,0.2)] mb-6`}>
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-white/70 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
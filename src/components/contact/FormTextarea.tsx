import React from 'react';

interface FormTextareaProps {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
  placeholder,
  required
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-white">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00f2ff]/50 focus:border-transparent transition-all resize-none"
      />
    </div>
  );
};
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: 'pink' | 'cyan' | 'purple' | 'none';
  children: React.ReactNode;
  padding?: string;
}

export function Card({ 
  glowColor = 'none', 
  className = '', 
  children, 
  padding = 'p-6',
  ...props 
}: CardProps) {
  const baseStyles = 'glass-panel rounded-2xl relative overflow-hidden transition-all duration-300';
  
  const glowStyles = {
    none: '',
    pink: 'hover:glow-pink-box border-[#FF007F]/30',
    cyan: 'hover:glow-cyan-box border-[#00FFFF]/30',
    purple: 'hover:glow-purple-box border-[#8A2BE2]/30',
  };

  return (
    <div className={`${baseStyles} ${glowStyles[glowColor]} ${padding} ${className}`} {...props}>
      {children}
    </div>
  );
}

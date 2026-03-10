import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  glowColor?: 'pink' | 'cyan' | 'purple';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  glowColor = 'cyan', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-out flex items-center justify-center gap-2 relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200',
    secondary: 'bg-transparent text-white border border-white/20 hover:bg-white/10',
    outline: 'bg-transparent border-2 hover:bg-transparent',
  };

  const glowStyles = {
    pink: 'shadow-[0_0_15px_rgba(255,0,127,0.5)] hover:shadow-[0_0_25px_rgba(255,0,127,0.8)] border-[#FF007F] text-[#FF007F] hover:text-white hover:bg-[#FF007F]',
    cyan: 'shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.8)] border-[#00FFFF] text-[#00FFFF] hover:text-black hover:bg-[#00FFFF]',
    purple: 'shadow-[0_0_15px_rgba(138,43,226,0.5)] hover:shadow-[0_0_25px_rgba(138,43,226,0.8)] border-[#8A2BE2] text-[#8A2BE2] hover:text-white hover:bg-[#8A2BE2]',
  };

  const combinedStyles = `${baseStyles} ${variant === 'outline' ? glowStyles[glowColor] : variants[variant]} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      <span className="relative z-10">{children}</span>
      {variant !== 'outline' && (
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none 
          ${glowColor === 'pink' ? 'bg-[#FF007F]/20' : glowColor === 'cyan' ? 'bg-[#00FFFF]/20' : 'bg-[#8A2BE2]/20'}`} 
        />
      )}
    </button>
  );
}

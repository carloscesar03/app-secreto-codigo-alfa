import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  pulse?: boolean;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  fullWidth = false, 
  pulse = false, 
  variant = 'primary',
  children, 
  className = '',
  href,
  ...props 
}) => {
  const baseClasses = "group inline-flex items-center justify-center gap-2 py-4 px-8 font-bold text-lg uppercase tracking-wider rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-lg cursor-pointer decoration-0";
  
  const variants = {
    primary: "bg-brand-accent hover:bg-orange-500 text-white shadow-orange-500/30",
    secondary: "bg-green-600 hover:bg-green-500 text-white shadow-green-600/30"
  };

  const pulseAnimation = pulse ? "animate-pulse" : "";
  const widthClass = fullWidth ? "w-full" : "w-auto";
  const classes = `${baseClasses} ${variants[variant]} ${widthClass} ${pulseAnimation} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {children}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <button 
      className={classes}
      {...props}
    >
      {children}
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
};
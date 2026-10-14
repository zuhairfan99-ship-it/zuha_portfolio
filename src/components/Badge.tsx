import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lavender' | 'blue' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'lavender',
  size = 'md',
  className = '',
  icon,
}) => {
  const variantStyles = {
    lavender: 'bg-[#EDE9FE] text-[#7C3AED] border border-[#DDD6FE]',
    blue: 'bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]',
    neutral: 'bg-white/80 text-[#1F1B2D] border border-[#8B5CF6]/15 shadow-2xs',
    outline: 'bg-transparent text-[#6B6478] border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1 gap-1.5 rounded-full font-medium',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2 rounded-full font-medium',
  };

  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap tracking-tight transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badgeText?: string;
  title: string;
  highlightWords?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  highlightWords,
  description,
  align = 'left',
  className = '',
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`space-y-4 ${isCentered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badgeText && (
        <div className={isCentered ? 'flex justify-center' : ''}>
          <Badge variant="lavender" size="md">
            {badgeText}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F1B2D] leading-[1.15]">
        {title}{' '}
        {highlightWords && (
          <span className="bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#60A5FA] bg-clip-text text-transparent">
            {highlightWords}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-[#6B6478] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

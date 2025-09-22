'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-11 h-11 text-2xl',
    lg: 'w-16 h-16 text-3xl'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`
        ${sizeClasses[size]}
        bg-gradient-to-br from-blue-500 to-purple-600
        rounded-xl
        flex
        items-center
        justify-center
        text-white
        font-black
        shadow-lg
        shadow-blue-500/30
        relative
        overflow-hidden
        transition-all
        duration-300
        hover:scale-110
        hover:-rotate-2
        hover:shadow-xl
        hover:shadow-blue-500/40
        group
      `}>
        <span className="relative z-10 select-none">RT</span>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex items-baseline">
        <span className={`${textSizeClasses[size]} font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
          ReddyTalk
        </span>
        <span className={`${size === 'sm' ? 'text-base' : size === 'md' ? 'text-lg' : 'text-2xl'} font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent opacity-80 ml-0.5`}>
          .ai
        </span>
      </div>
    </div>
  );
};

export default Logo;
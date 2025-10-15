import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-block px-2 py-1 rounded-md bg-gray-100 text-xs text-black ${className}`}>
      {children}
    </span>
  );
}

import React from 'react';

const FeatureCheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-sky-500" }) => (
  <svg className={`flex-shrink-0 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default FeatureCheckIcon;

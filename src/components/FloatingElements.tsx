import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMjIzMzU1IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSI3MjAiIGN5PSIzODAiIHI9IjEwMCIvPjxjaXJjbGUgY3g9IjcyMCIgY3k9IjM4MCIgcj0iMjAwIi8+PGNpcmNsZSBjeD0iNzIwIiBjeT0iMzgwIiByPSIzMDAiLz48Y2lyY2xlIGN4PSI3MjAiIGN5PSIzODAiIHI9IjQwMCIvPjxjaXJjbGUgY3g9IjcyMCIgY3k9IjM4MCIgcj0iNTAwIi8+PGNpcmNsZSBjeD0iNzIwIiBjeT0iMzgwIiByPSI2MDAiLz48L2c+PC9zdmc+')]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/5 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-float1"></div>
      <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-green-400 rounded-full opacity-60 animate-float2"></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-purple-500 rounded-full opacity-50 animate-float3"></div>
      
      {/* Tech icons */}
      <div className="absolute top-20 left-10 md:left-32 text-blue-400 animate-float2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
          <line x1="8" y1="16" x2="8.01" y2="16"></line>
          <line x1="8" y1="20" x2="8.01" y2="20"></line>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
          <line x1="12" y1="22" x2="12.01" y2="22"></line>
          <line x1="16" y1="16" x2="16.01" y2="16"></line>
          <line x1="16" y1="20" x2="16.01" y2="20"></line>
        </svg>
      </div>
      
      <div className="absolute top-1/3 right-12 md:right-48 text-yellow-400 animate-float3">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
          <circle cx="17" cy="7" r="5"></circle>
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 left-16 text-pink-500 animate-float1">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      </div>
      
      <div className="absolute right-10 bottom-1/3 text-green-400 animate-float2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="12" y1="2" x2="12" y2="22"></line>
        </svg>
      </div>
    </>
  );
};

export default FloatingElements;
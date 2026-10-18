import React from 'react';

export default function SciFiButton({ children, onClick, disabled = false, variant = 'primary' }) {
  const baseStyles = 'font-mono font-bold px-5 py-2.5 rounded transition-all duration-200 flex items-center justify-center gap-2 text-sm uppercase tracking-wider';
  
  const variants = {
    primary: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)] disabled:bg-slate-800 disabled:text-slate-600 disabled:shadow-none',
    secondary: 'bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/50 disabled:opacity-40',
    danger: 'bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
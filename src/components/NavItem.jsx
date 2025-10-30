import React from 'react';

export default function NavItem({ to = '#', icon: Icon, label, active = false, onClick }) {
  return (
    <a
      href={to}
      onClick={onClick}
      className={`group w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors
        ${active ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span>{label}</span>
    </a>
  );
}

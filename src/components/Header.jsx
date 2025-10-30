import React from 'react';
import { Rocket } from 'lucide-react';

function Header() {
  return (
    <div className="flex items-center gap-3 p-4">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-md">
        <Rocket className="h-5 w-5 text-white" />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-white leading-tight">MERN Dashboard</h1>
        <p className="text-xs text-white/70">Starter sidebar with header</p>
      </div>
    </div>
  );
}

export default Header;

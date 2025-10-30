import React, { useState } from 'react';
import Header from './Header';
import NavItem from './NavItem';
import { Home, LayoutDashboard, Folder, Users, Settings, LogOut, Menu } from 'lucide-react';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const NavSection = () => (
    <div className="px-2 space-y-1">
      <NavItem icon={Home} label="Home" active />
      <NavItem icon={LayoutDashboard} label="Dashboard" />
      <NavItem icon={Folder} label="Projects" />
      <NavItem icon={Users} label="Team" />
      <div className="pt-2 mt-2 border-t border-white/10" />
      <NavItem icon={Settings} label="Settings" />
      <NavItem icon={LogOut} label="Logout" />
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        aria-label="Toggle sidebar"
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 inline-flex items-center justify-center rounded-lg bg-indigo-600 p-2 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay for mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 md:static md:z-auto inset-y-0 left-0 w-72 transform transition-transform duration-300 
        bg-gradient-to-b from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-2xl border-r border-white/10
        ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <Header />
        <div className="px-3 pb-4">
          <div className="rounded-xl bg-white/10 p-3 mb-3">
            <p className="text-xs text-white/80">Welcome back 👋</p>
            <p className="text-sm font-medium text-white">Here's your quick nav</p>
          </div>
          <NavSection />
        </div>
      </aside>
    </>
  );
}

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MainContent() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Welcome to your MERN workspace</h2>
            <p className="text-slate-600 text-sm">This is a clean starting point with a sidebar and header inside it.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Projects',
              desc: 'Organize your repositories, deployments, and environments.',
            },
            {
              title: 'Team',
              desc: 'Invite collaborators and manage roles and permissions.',
            },
            {
              title: 'Activity',
              desc: 'See recent commits, builds, and production health.',
            },
            {
              title: 'Integrations',
              desc: 'Connect to GitHub, Vercel, Slack, and more.',
            },
            {
              title: 'Analytics',
              desc: 'Track usage, performance, and key metrics at a glance.',
            },
            {
              title: 'Settings',
              desc: 'Configure app preferences and security options.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-slate-900">{card.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{card.desc}</p>
              <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

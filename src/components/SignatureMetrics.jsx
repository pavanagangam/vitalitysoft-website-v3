import React from 'react';
import { Award, Users, Clock, ShieldCheck, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Enterprise Projects', value: '11+', icon: Award },
  { label: 'Hours of Support', value: '4,800+', icon: Clock },
  { label: 'Senior Engineers', value: '15+', icon: Users },
  { label: 'Global Clients', value: '5+', icon: ShieldCheck },
  { label: 'Client Satisfaction', value: '100%', icon: CheckCircle },
];

export default function SignatureMetrics({ theme }) {
  return (
    <section
      className={`px-6 py-20 md:px-12 md:py-28 border-t transition-colors duration-500 ${
        theme === 'light'
          ? 'bg-[#f4f5f8] text-[#0f172a] border-gray-200'
          : 'bg-gradient-to-b from-[#060913] to-[#0a0e1c] text-white border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className={`eyebrow mb-3 ${theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-400'}`}>
            Track Record
          </p>
          <h2 className={`font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.05] tracking-tight ${
            theme === 'light' ? 'text-[#0f172a]' : 'text-white'
          }`}>
            Numbers that define our craftsmanship.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all text-center group ${
                  theme === 'light'
                    ? 'bg-white border-gray-200 text-[#0f172a] shadow-md hover:border-indigo-400'
                    : 'glass-panel border-white/10 text-white hover:border-cyan-500/40'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${
                  theme === 'light'
                    ? 'bg-indigo-50 border border-indigo-200 text-indigo-600'
                    : 'bg-indigo-500/10 border border-indigo-500/30 text-cyan-400'
                }`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <p className={`font-serif text-4xl sm:text-5xl italic font-extrabold mb-2 ${
                  theme === 'light'
                    ? 'text-indigo-600'
                    : 'text-white bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent'
                }`}>
                  {s.value}
                </p>
                <p className={`eyebrow text-[10px] tracking-wider ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

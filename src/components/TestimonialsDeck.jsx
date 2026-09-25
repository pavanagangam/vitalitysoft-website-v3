import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Saul Goodman',
    role: 'CEO & Founder',
    company: 'Enterprise FinTech',
    location: 'Hyderabad',
    quote: 'VitalitySoft didn’t just deliver code. They restructured our entire .NET core microservices architecture to handle 4x traffic with zero downtime.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sara Wilsson',
    role: 'Product Lead',
    company: 'SaaS Platform',
    location: 'Bangalore',
    quote: 'Their Salesforce integration transformed how our sales team tracks deals. The custom Apex workflow reduced quotation processing time by 60%.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Jena Karlis',
    role: 'Chief Technology Officer',
    company: 'AgriTech Solutions',
    location: 'Hyderabad',
    quote: 'Working with VitalitySoft on our Smart Farming IoT platform was a game changer. Exceptional technical execution and 24/7 SLA maintenance.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
];

export default function TestimonialsDeck({ theme }) {
  return (
    <section
      className={`py-24 md:py-36 border-t transition-colors duration-500 ${
        theme === 'light'
          ? 'bg-[#f4f5f8] text-[#0f172a] border-gray-200'
          : 'bg-[#060913] text-white border-white/5'
      }`}
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className={`eyebrow mb-3 ${theme === 'light' ? 'text-indigo-600 font-bold' : 'text-indigo-400'}`}>
            Client Endorsements
          </p>
          <h2 className={`font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.05] tracking-tight ${
            theme === 'light' ? 'text-[#0f172a]' : 'text-white'
          }`}>
            From technology leaders themselves.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border transition-all flex flex-col justify-between relative group ${
                theme === 'light'
                  ? 'bg-white border-gray-200 shadow-md text-[#0f172a] hover:border-indigo-400'
                  : 'glass-panel border-white/10 text-white hover:border-indigo-500/40'
              }`}
            >
              <Quote className={`w-10 h-10 mb-6 transition-colors ${
                theme === 'light' ? 'text-indigo-300' : 'text-indigo-500/30 group-hover:text-cyan-400/60'
              }`} />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className={`font-serif text-lg italic leading-relaxed mb-8 font-medium ${
                theme === 'light' ? 'text-gray-800' : 'text-gray-200'
              }`}>
                "{t.quote}"
              </p>

              <div className={`flex items-center gap-4 pt-6 border-t ${
                theme === 'light' ? 'border-gray-100' : 'border-white/10'
              }`}>
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-cyan-400/40"
                />
                <div>
                  <h4 className={`font-serif text-base italic font-bold ${
                    theme === 'light' ? 'text-[#0f172a]' : 'text-white'
                  }`}>{t.name}</h4>
                  <p className={`eyebrow text-[9px] ${
                    theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-400'
                  }`}>{t.role} • {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

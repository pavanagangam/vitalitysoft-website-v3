import React from 'react';
import { ArrowUpRight, Sparkles, Layers, ShieldCheck, Code } from 'lucide-react';

const galleryCards = [
  {
    id: 1,
    title: 'Microsoft .NET Core',
    category: 'Enterprise Stack',
    rotateY: 44,
    translateZ: -120,
    marginLeft: 0,
    zIndex: 10,
    image: '/brand/hero_dotnet_cloud.jpg',
  },
  {
    id: 2,
    title: 'Salesforce Integration',
    category: 'CRM & Pipeline',
    rotateY: 30,
    translateZ: -70,
    marginLeft: -64,
    zIndex: 20,
    image: '/brand/salesforce_crm_3d.jpg',
  },
  {
    id: 3,
    title: 'DevOps & Azure Cloud',
    category: 'Kubernetes CI/CD',
    rotateY: 16,
    translateZ: -30,
    marginLeft: -64,
    zIndex: 30,
    image: '/brand/devops_cloud_native.jpg',
  },
  {
    id: 4,
    title: 'Mobile App Engineering',
    category: 'iOS & Android',
    rotateY: 0,
    translateZ: 40,
    marginLeft: -64,
    zIndex: 40,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'QA Automated Testing',
    category: 'Quality Assurance',
    rotateY: -16,
    translateZ: -30,
    marginLeft: -64,
    zIndex: 30,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'SAP ABAP Modules',
    category: 'ERP Systems',
    rotateY: -30,
    translateZ: -70,
    marginLeft: -64,
    zIndex: 20,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Healthcare Tech Suite',
    category: 'HIPAA Solution',
    rotateY: -44,
    translateZ: -120,
    marginLeft: -64,
    zIndex: 10,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Gallery3DFan({ onOpenQuote, theme }) {
  return (
    <section
      id="showcase"
      className={`overflow-hidden py-24 md:py-36 border-t transition-colors duration-500 ${
        theme === 'light'
          ? 'bg-[#f4f5f8] text-[#0f172a] border-gray-200'
          : 'bg-[#080c18] text-white border-white/5'
      }`}
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 px-6 md:px-12 max-w-7xl mx-auto">
        <div>
          <p className={`eyebrow mb-3 ${theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-400'}`}>
            Interactive 3D Portfolio
          </p>
          <h2 className={`font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.05] tracking-tight ${
            theme === 'light' ? 'text-[#0f172a]' : 'text-white'
          }`}>
            A software gallery in depth.
          </h2>
        </div>
        <button
          onClick={onOpenQuote}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border font-semibold text-xs uppercase tracking-[0.2em] transition-all ${
            theme === 'light'
              ? 'border-gray-300 bg-white hover:border-indigo-600 text-gray-800 hover:text-indigo-600 shadow-sm'
              : 'border-white/20 hover:border-cyan-400 bg-white/5 hover:bg-white/10 text-white'
          }`}
        >
          <span>Request Custom Showcase</span>
          <ArrowUpRight className={`w-4 h-4 ${theme === 'light' ? 'text-indigo-600' : 'text-cyan-400'}`} />
        </button>
      </div>

      {/* 3D Overlapping Fan Deck */}
      <div className="flex h-[460px] md:h-[580px] items-center justify-center relative px-4" style={{ perspective: '1800px' }}>
        {galleryCards.map((card) => (
          <div
            key={card.id}
            className={`cf3d relative h-[320px] w-[200px] md:h-[420px] md:w-[280px] shrink-0 overflow-hidden rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.25)] border group cursor-pointer ${
              theme === 'light' ? 'border-gray-300 bg-white' : 'border-white/15 bg-[#060913]'
            }`}
            style={{
              marginLeft: `${card.marginLeft}px`,
              zIndex: card.zIndex,
              transform: `rotateY(${card.rotateY}deg) translateZ(${card.translateZ}px)`,
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700 opacity-85 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/40 to-transparent"></div>

            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
              <span className="eyebrow text-cyan-300 text-[9px] mb-1">{card.category}</span>
              <h3 className="font-serif text-xl italic font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <p className={`eyebrow mt-6 text-center ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
        Hover a card frame to pull it forward in 3D space
      </p>
    </section>
  );
}

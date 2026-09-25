import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

const categories = [
  'All',
  'HealthCare',
  'Mortgage Insurance',
  'Farming',
  'Auto & Home loans',
  'Telecom Billing',
  'Engineering',
];

const portfolioItems = [
  {
    id: 1,
    title: 'HealthCare Clinical Records',
    category: 'HealthCare',
    desc: 'HIPAA-compliant medical records portal with telemetry telemetry integration.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tech: ['.NET Core', 'SQL Server', 'Blazor'],
  },
  {
    id: 2,
    title: 'Mortgage Risk Underwriting Engine',
    category: 'Mortgage Insurance',
    desc: 'Automated mortgage risk calculation and insurance premium quotation API.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    tech: ['Salesforce Apex', '.NET 8', 'Azure'],
  },
  {
    id: 3,
    title: 'Smart Farming IoT Sensor Suite',
    category: 'Farming',
    desc: 'Precision agricultural soil analytics and automated irrigation triggers.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
    tech: ['React Native', 'IoT APIs', 'Python'],
  },
  {
    id: 4,
    title: 'Auto & Home Loan Financing Portal',
    category: 'Auto & Home loans',
    desc: 'Instant loan origination system with automated credit check integration.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    tech: ['.NET Core', 'Blazor', 'DevOps'],
  },
  {
    id: 5,
    title: 'Telecom Billing & Usage Analytics',
    category: 'Telecom Billing',
    desc: 'High-throughput call detail record (CDR) rating and monthly automated invoicing.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    tech: ['SAP ABAP', '.NET Microservices'],
  },
  {
    id: 6,
    title: 'Industrial Engineering CAD Workflow',
    category: 'Engineering',
    desc: 'Asset lifecycle management and CAD schematic data parser for plant operations.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    tech: ['.NET 8', 'Azure Blob', 'WPF'],
  },
];

export default function PortfolioGrid({ onOpenQuote, theme }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className={`px-6 py-24 md:px-12 md:py-36 border-t transition-colors duration-500 ${
        theme === 'light'
          ? 'bg-[#f4f5f8] text-[#0f172a] border-gray-200'
          : 'bg-[#04060d] text-white border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <p className={`eyebrow mb-3 ${theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-400'}`}>
              Selected Works
            </p>
            <h2 className={`font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.05] tracking-tight ${
              theme === 'light' ? 'text-[#0f172a]' : 'text-white'
            }`}>
              Enterprise Case Portfolio.
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                    : theme === 'light'
                      ? 'bg-white border border-gray-300 text-gray-700 hover:text-indigo-600 shadow-sm'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border shadow-xl transition-all duration-500 ${
                theme === 'light'
                  ? 'bg-white border-gray-200 text-[#0f172a] hover:border-indigo-500'
                  : 'bg-[#0d1326] border-white/15 text-white hover:border-cyan-400'
              }`}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/90 via-[#060913]/30 to-transparent"></div>
                <span className="absolute top-4 left-4 glass-pill px-3 py-1 rounded-full text-[9px] uppercase tracking-wider text-cyan-300 font-medium">
                  {item.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className={`font-serif text-xl italic font-bold transition-colors mb-2 ${
                  theme === 'light' ? 'text-[#0f172a] group-hover:text-indigo-600' : 'text-white group-hover:text-cyan-300'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed font-sans mb-4 ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-[10px] px-2.5 py-1 rounded-md font-mono ${
                        theme === 'light'
                          ? 'bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold'
                          : 'bg-white/5 border border-white/10 text-indigo-300'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenQuote}
                  className={`w-full py-2.5 rounded-xl border font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    theme === 'light'
                      ? 'border-gray-300 bg-white hover:bg-indigo-50 hover:border-indigo-500 text-gray-800 hover:text-indigo-600 shadow-sm'
                      : 'border-white/15 hover:border-cyan-400 bg-white/5 hover:bg-cyan-500/10 text-white'
                  }`}
                >
                  <span>Build Similar Solution</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${theme === 'light' ? 'text-indigo-600' : 'text-cyan-400'}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

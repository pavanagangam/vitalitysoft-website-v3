import React from 'react';
import { ArrowRight, Sparkles, Code2, Database, Cloud, Smartphone, ShieldCheck, Users } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Custom App & .NET Development',
    category: 'Microsoft Stack',
    desc: 'Scalable REST APIs, C# 12, Blazor server components, and enterprise web applications tailored to your daily operations.',
    price: '₹1,50,000',
    image: '/brand/hero_dotnet_cloud.jpg',
    features: ['RESTful Web API', 'Blazor Server & WebAssembly', '.NET Core 8 & C# 12', 'Database Architecture'],
  },
  {
    num: '02',
    title: 'Salesforce CRM Implementation',
    category: 'CRM Solutions',
    desc: 'Manage deal stages, product quotations, Apex triggers, and automated workflows to progress and close deals faster.',
    price: '₹1,20,000',
    image: '/brand/salesforce_crm_3d.jpg',
    features: ['Sales Cloud Setup', 'Apex & Lightning Web Components', 'Quotation Engine', 'Pipeline Management'],
  },
  {
    num: '03',
    title: 'Cloud DevOps & CI/CD Pipeline',
    category: 'Infrastructure',
    desc: 'Accelerate your hybrid cloud investment with automated deployment, Azure DevOps pipelines, and Kubernetes clusters.',
    price: '₹95,000',
    image: '/brand/devops_cloud_native.jpg',
    features: ['Azure DevOps Setup', 'Kubernetes Orchestration', 'Automated CI/CD', 'Security Compliance'],
  },
  {
    num: '04',
    title: 'QA & Automated Testing',
    category: 'Quality Assurance',
    desc: 'Systematic testing methodologies involving hardware-software interfacing, Selenium regression, and performance audits.',
    price: '₹45,000',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    features: ['Selenium Regression', 'Load & Stress Audits', 'API Security Testing', 'Bug Management'],
  },
  {
    num: '05',
    title: 'Mobile Application Engineering',
    category: 'iOS & Android',
    desc: 'Cross-platform mobile applications engineered with React Native and Flutter for seamless user experiences.',
    price: '₹85,000',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    features: ['React Native / Flutter', 'Offline Sync Engine', 'Push Notifications', 'App Store Publishing'],
  },
  {
    num: '06',
    title: 'IT Lab & Infrastructure Support',
    category: 'Operations',
    desc: 'Comprehensive IT field services, lab maintenance, platform assembly, data center operations, and cost optimization.',
    price: '₹60,000',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    features: ['Lab Maintenance', 'Platform Assembly & Test', 'Data Centre Services', 'IT Cost Analysis'],
  },
  {
    num: '07',
    title: 'Talent Management & Staffing',
    category: 'Workforce Services',
    desc: 'Inspire your workforce with skilled technical staffing, developer reskilling, and dedicated project squads.',
    price: '₹50,000 / mo',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    features: ['Talent Acquisition', 'Developer Reskilling', 'On-Demand Squads', 'Workforce Upskilling'],
  },
  {
    num: '08',
    title: 'SAP ABAP Integration',
    category: 'ERP Systems',
    desc: 'AS ABAP server integration across presentation, application, and database layers of three-tier client architectures.',
    price: '₹1,10,000',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    features: ['AS ABAP Programming', 'SAP NetWeaver', 'Client-Server Architecture', 'Database Layer Sync'],
  },
];

export default function ServicesFlipCards({ onOpenQuote, theme }) {
  return (
    <section
      id="services"
      className={`px-6 py-24 md:px-12 md:py-36 border-t transition-colors duration-500 ${
        theme === 'light'
          ? 'bg-[#f4f5f8] text-[#0f172a] border-gray-200'
          : 'bg-[#060913] text-white border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <p className={`eyebrow mb-3 ${theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-400'}`}>
              3D Interactive Services
            </p>
            <h2 className={`font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.05] tracking-tight ${
              theme === 'light' ? 'text-[#0f172a]' : 'text-white'
            }`}>
              What we bring to your software lifecycle.
            </h2>
          </div>
          <p className={`max-w-md text-sm font-sans ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-400'
          }`}>
            Every business process is unique. Hover over any 3D card to reveal deliverables, starting pricing estimates, and proposal options.
          </p>
        </div>

        {/* 3D Flip Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.num} className="flip3d h-[440px] group cursor-pointer">
              <div className="flip3d-inner">
                {/* Front Face */}
                <div className={`flip3d-face border shadow-xl ${
                  theme === 'light' ? 'border-gray-200 bg-white text-[#0f172a]' : 'border-white/15 bg-[#0d1326] text-white'
                }`}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover scale-110 opacity-80 group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/40 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="eyebrow text-cyan-300 text-[10px] mb-1 block">{s.num} • {s.category}</span>
                    <h3 className="font-serif text-2xl italic leading-tight font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="text-xs text-indigo-300 mt-3 flex items-center gap-1 font-semibold uppercase tracking-wider">
                      Hover to flip card 180° →
                    </p>
                  </div>
                </div>

                {/* Back Face */}
                <div className={`flip3d-face flip3d-back flex flex-col justify-between p-7 border shadow-2xl ${
                  theme === 'light'
                    ? 'bg-gradient-to-b from-indigo-50 via-white to-indigo-100 border-indigo-300 text-[#0f172a]'
                    : 'bg-gradient-to-b from-indigo-950 via-[#0a0e1c] to-[#060913] border-cyan-500/30 text-white'
                }`}>
                  <div>
                    <span className={`eyebrow text-[10px] ${
                      theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-400'
                    }`}>{s.num} • {s.category}</span>
                    <h3 className={`font-serif text-2xl italic leading-tight font-bold mt-1 mb-3 ${
                      theme === 'light' ? 'text-[#0f172a]' : 'text-white'
                    }`}>
                      {s.title}
                    </h3>
                    <p className={`text-xs leading-relaxed font-sans mb-4 ${
                      theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                    }`}>
                      {s.desc}
                    </p>
                    <ul className="space-y-1.5 mb-4">
                      {s.features.map((feat, i) => (
                        <li key={i} className={`text-[11px] flex items-center gap-2 ${
                          theme === 'light' ? 'text-gray-800 font-medium' : 'text-gray-300'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            theme === 'light' ? 'bg-indigo-600' : 'bg-cyan-400'
                          }`}></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`pt-4 border-t ${
                    theme === 'light' ? 'border-indigo-200' : 'border-white/15'
                  }`}>
                    <p className={`eyebrow text-[9px] ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}>Starting from</p>
                    <p className={`font-serif text-3xl italic font-bold ${
                      theme === 'light' ? 'text-indigo-700' : 'text-cyan-300'
                    }`}>{s.price}</p>
                    <button
                      onClick={onOpenQuote}
                      className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                      Get Your Quote →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

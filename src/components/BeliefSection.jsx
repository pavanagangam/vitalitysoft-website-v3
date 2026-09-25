import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle2, Cpu, Database, Cloud, ShieldCheck } from 'lucide-react';

const handleImgError = (e, path) => {
  const currentSrc = e.target.src;
  if (path && path.startsWith('/brand/') && !currentSrc.includes('/static/')) {
    const filename = path.split('/').pop();
    e.target.src = `/static/brand/${filename}`;
  }
};

export default function BeliefSection({ theme }) {
  return (
    <section
      className={`relative min-h-[850px] flex flex-col justify-center items-center overflow-hidden px-6 py-28 border-t transition-colors duration-500 ${
        theme === 'light'
          ? 'bg-[#f4f5f8] text-[#0f172a] border-gray-200'
          : 'bg-[#0a0e1c] text-white border-white/5'
      }`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* 4 Corner Symmetrical 3D Floating Visual Cards */}
      {/* 1. Top-Left Card: .NET Architecture */}
      <div className={`absolute left-[2%] xl:left-[4%] top-[8%] h-[240px] w-[170px] xl:h-[320px] xl:w-[230px] overflow-hidden rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.15)] border hidden lg:block transform -rotate-6 hover:rotate-0 transition-transform duration-700 z-10 group ${
        theme === 'light' ? 'bg-white border-indigo-200' : 'border-cyan-500/30'
      }`}>
        <img
          src="/brand/hero_dotnet_cloud.jpg"
          alt="Cloud Architecture"
          className="w-full h-full object-cover scale-110 opacity-85 group-hover:scale-125 transition-transform duration-700"
          onError={(e) => handleImgError(e, '/brand/hero_dotnet_cloud.jpg')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/80 via-[#060913]/20 to-transparent"></div>
        <div className={`absolute bottom-3 left-3 right-3 p-3 rounded-xl border backdrop-blur-md ${
          theme === 'light' ? 'bg-white/90 border-gray-200 text-[#0f172a]' : 'glass-panel border-white/10 text-white'
        }`}>
          <p className={`eyebrow text-[9px] flex items-center gap-1 ${
            theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-400'
          }`}>
            <Cpu className="w-3 h-3" /> Architecture
          </p>
          <p className={`font-serif italic text-xs xl:text-sm font-bold ${
            theme === 'light' ? 'text-[#0f172a]' : 'text-white'
          }`}>Microservice Telemetry</p>
        </div>
      </div>

      {/* 2. Bottom-Left Card: QA & Automation */}
      <div className={`absolute left-[2%] xl:left-[4%] bottom-[8%] h-[240px] w-[170px] xl:h-[320px] xl:w-[230px] overflow-hidden rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.15)] border hidden lg:block transform rotate-3 hover:rotate-0 transition-transform duration-700 z-10 group ${
        theme === 'light' ? 'bg-white border-indigo-200' : 'border-indigo-500/30'
      }`}>
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
          alt="QA Automation"
          className="w-full h-full object-cover scale-110 opacity-85 group-hover:scale-125 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/80 via-[#060913]/20 to-transparent"></div>
        <div className={`absolute bottom-3 left-3 right-3 p-3 rounded-xl border backdrop-blur-md ${
          theme === 'light' ? 'bg-white/90 border-gray-200 text-[#0f172a]' : 'glass-panel border-white/10 text-white'
        }`}>
          <p className={`eyebrow text-[9px] flex items-center gap-1 ${
            theme === 'light' ? 'text-indigo-600 font-bold' : 'text-indigo-400'
          }`}>
            <ShieldCheck className="w-3 h-3" /> Quality Assurance
          </p>
          <p className={`font-serif italic text-xs xl:text-sm font-bold ${
            theme === 'light' ? 'text-[#0f172a]' : 'text-white'
          }`}>Automated Testing & QA</p>
        </div>
      </div>

      {/* 3. Top-Right Card: Salesforce CRM */}
      <div className={`absolute right-[2%] xl:right-[4%] top-[8%] h-[240px] w-[170px] xl:h-[320px] xl:w-[230px] overflow-hidden rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.15)] border hidden lg:block transform rotate-6 hover:rotate-0 transition-transform duration-700 z-10 group ${
        theme === 'light' ? 'bg-white border-indigo-200' : 'border-indigo-500/30'
      }`}>
        <img
          src="/brand/salesforce_crm_3d.jpg"
          alt="Salesforce Platform"
          className="w-full h-full object-cover scale-110 opacity-85 group-hover:scale-125 transition-transform duration-700"
          onError={(e) => handleImgError(e, '/brand/salesforce_crm_3d.jpg')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/80 via-[#060913]/20 to-transparent"></div>
        <div className={`absolute bottom-3 left-3 right-3 p-3 rounded-xl border backdrop-blur-md ${
          theme === 'light' ? 'bg-white/90 border-gray-200 text-[#0f172a]' : 'glass-panel border-white/10 text-white'
        }`}>
          <p className={`eyebrow text-[9px] flex items-center gap-1 ${
            theme === 'light' ? 'text-indigo-600 font-bold' : 'text-indigo-400'
          }`}>
            <Database className="w-3 h-3" /> Salesforce CRM
          </p>
          <p className={`font-serif italic text-xs xl:text-sm font-bold ${
            theme === 'light' ? 'text-[#0f172a]' : 'text-white'
          }`}>Deal Pipeline & Analytics</p>
        </div>
      </div>

      {/* 4. Bottom-Right Card: Kubernetes & DevOps */}
      <div className={`absolute right-[2%] xl:right-[4%] bottom-[8%] h-[240px] w-[170px] xl:h-[320px] xl:w-[230px] overflow-hidden rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.15)] border hidden lg:block transform -rotate-3 hover:rotate-0 transition-transform duration-700 z-10 group ${
        theme === 'light' ? 'bg-white border-indigo-200' : 'border-emerald-500/40'
      }`}>
        <img
          src="/brand/devops_cloud_native.jpg"
          alt="DevOps Automation"
          className="w-full h-full object-cover scale-110 opacity-85 group-hover:scale-125 transition-transform duration-700"
          onError={(e) => handleImgError(e, '/brand/devops_cloud_native.jpg')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/80 via-[#060913]/20 to-transparent"></div>
        <div className={`absolute bottom-3 left-3 right-3 p-3 rounded-xl border backdrop-blur-md ${
          theme === 'light' ? 'bg-white/90 border-gray-200 text-[#0f172a]' : 'glass-panel border-white/10 text-white'
        }`}>
          <p className={`eyebrow text-[9px] flex items-center gap-1 ${
            theme === 'light' ? 'text-emerald-700 font-bold' : 'text-emerald-400'
          }`}>
            <Cloud className="w-3 h-3" /> DevOps Native
          </p>
          <p className={`font-serif italic text-xs xl:text-sm font-bold ${
            theme === 'light' ? 'text-[#0f172a]' : 'text-white'
          }`}>Kubernetes & CI/CD</p>
        </div>
      </div>

      {/* Main Core Belief Content Container */}
      <div className="relative z-20 max-w-3xl mx-auto text-center px-4">
        <p className={`eyebrow mb-4 ${theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-400'}`}>
          Our Founding Belief
        </p>
        <h2 className={`font-serif text-4xl sm:text-6xl md:text-7xl italic leading-[1.05] tracking-tight mb-8 ${
          theme === 'light' ? 'text-[#0f172a]' : 'text-white'
        }`}>
          Every process is a story worth digitalizing.
        </h2>
        <p className={`text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto mb-12 ${
          theme === 'light' ? 'text-gray-700 font-medium' : 'text-gray-300'
        }`}>
          VitalitySoft helps forward-thinking enterprises achieve the full impact of modern application engineering. 
          By combining deep Microsoft .NET expertise, Salesforce integration, Cloud Native DevOps, and rigorous QA testing, 
          we turn operational bottlenecks into high-velocity digital growth.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className={`p-6 rounded-2xl border transition-all ${
            theme === 'light'
              ? 'bg-white border-gray-200 text-[#0f172a] shadow-md hover:border-indigo-400'
              : 'glass-panel border-white/10 text-white hover:border-cyan-500/40'
          }`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
              theme === 'light'
                ? 'bg-indigo-50 border border-indigo-200 text-indigo-600'
                : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
            }`}>
              <Shield className="w-6 h-6" />
            </div>
            <h3 className={`font-serif text-xl italic font-semibold mb-2 ${
              theme === 'light' ? 'text-[#0f172a]' : 'text-white'
            }`}>High Quality Solutions</h3>
            <p className={`text-xs leading-relaxed font-sans ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Resilient, scalable software architectures built with enterprise compliance and zero compromise.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border transition-all ${
            theme === 'light'
              ? 'bg-white border-gray-200 text-[#0f172a] shadow-md hover:border-indigo-400'
              : 'glass-panel border-white/10 text-white hover:border-indigo-500/40'
          }`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
              theme === 'light'
                ? 'bg-indigo-50 border border-indigo-200 text-indigo-600'
                : 'bg-indigo-500/10 border border-indigo-500/30 text-indigo-400'
            }`}>
              <Award className="w-6 h-6" />
            </div>
            <h3 className={`font-serif text-xl italic font-semibold mb-2 ${
              theme === 'light' ? 'text-[#0f172a]' : 'text-white'
            }`}>Agile & Cost-Effective</h3>
            <p className={`text-xs leading-relaxed font-sans ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Customized delivery models that lower TCO while speeding up time-to-market.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border transition-all ${
            theme === 'light'
              ? 'bg-white border-gray-200 text-[#0f172a] shadow-md hover:border-indigo-400'
              : 'glass-panel border-white/10 text-white hover:border-purple-500/40'
          }`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
              theme === 'light'
                ? 'bg-indigo-50 border border-indigo-200 text-indigo-600'
                : 'bg-purple-500/10 border border-purple-500/30 text-purple-400'
            }`}>
              <Clock className="w-6 h-6" />
            </div>
            <h3 className={`font-serif text-xl italic font-semibold mb-2 ${
              theme === 'light' ? 'text-[#0f172a]' : 'text-white'
            }`}>4,800+ Support Hours</h3>
            <p className={`text-xs leading-relaxed font-sans ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Continuous operations, SLA-backed maintenance, and dedicated technical assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

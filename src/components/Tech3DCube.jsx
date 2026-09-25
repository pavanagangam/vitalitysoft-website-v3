import React, { useState, useEffect } from 'react';
import { RotateCw, Cpu, Layers, Cloud, Shield, Database, Smartphone } from 'lucide-react';

const cubeFaces = [
  {
    face: 'front',
    transform: 'translateZ(160px)',
    title: 'Microsoft .NET Core',
    subtitle: 'Microservices & Blazor',
    desc: 'High performance REST APIs, C# 12, SignalR realtime interop, and scalable enterprise web apps.',
    color: 'from-indigo-600 to-cyan-600',
    icon: Cpu,
    image: '/brand/hero_dotnet_cloud.jpg',
  },
  {
    face: 'back',
    transform: 'rotateY(180deg) translateZ(160px)',
    title: 'Salesforce Enterprise',
    subtitle: 'Apex & Sales Cloud',
    desc: 'Automated deal pipelines, quotation workflows, Salesforce Lightning, and custom CRM architecture.',
    color: 'from-blue-600 to-indigo-700',
    icon: Database,
    image: '/brand/salesforce_crm_3d.jpg',
  },
  {
    face: 'right',
    transform: 'rotateY(90deg) translateZ(160px)',
    title: 'Cloud & DevOps Native',
    subtitle: 'CI/CD & Kubernetes',
    desc: 'Automated infrastructure pipelines, Docker container orchestration, and hybrid multicloud deployment.',
    color: 'from-emerald-600 to-cyan-700',
    icon: Cloud,
    image: '/brand/devops_cloud_native.jpg',
  },
  {
    face: 'left',
    transform: 'rotateY(-90deg) translateZ(160px)',
    title: 'Mobile Engineering',
    subtitle: 'React Native & iOS',
    desc: 'Responsive cross-platform mobile architecture with high-fidelity UI and offline sync capabilities.',
    color: 'from-purple-600 to-pink-600',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
  {
    face: 'top',
    transform: 'rotateX(90deg) translateZ(160px)',
    title: 'QA & Test Automation',
    subtitle: 'Selenium & Load Testing',
    desc: 'Full regression suites, security penetration testing, automated CI quality gates, and bug tracking.',
    color: 'from-amber-600 to-orange-600',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    face: 'bottom',
    transform: 'rotateX(-90deg) translateZ(160px)',
    title: 'SAP ABAP Modules',
    subtitle: 'AS ABAP & NetWeaver',
    desc: 'Three-tier AS ABAP client-server architecture, database layer integration, and SAP NetWeaver enterprise modules.',
    color: 'from-cyan-600 to-blue-700',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Tech3DCube({ theme }) {
  const [cubeRotation, setCubeRotation] = useState({ x: -15, y: 25 });
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    let interval;
    if (autoRotate) {
      interval = setInterval(() => {
        setCubeRotation((prev) => ({
          x: prev.x,
          y: prev.y + 90,
        }));
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoRotate]);

  const rotateTo = (face) => {
    setAutoRotate(false);
    switch (face) {
      case 'front':
        setCubeRotation({ x: 0, y: 0 });
        break;
      case 'back':
        setCubeRotation({ x: 0, y: 180 });
        break;
      case 'right':
        setCubeRotation({ x: 0, y: -90 });
        break;
      case 'left':
        setCubeRotation({ x: 0, y: 90 });
        break;
      case 'top':
        setCubeRotation({ x: -90, y: 0 });
        break;
      case 'bottom':
        setCubeRotation({ x: 90, y: 0 });
        break;
      default:
        break;
    }
  };

  return (
    <section
      id="cube"
      className={`grid items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-12 md:py-36 border-t transition-colors duration-500 ${
        theme === 'light'
          ? 'bg-[#f4f5f8] text-[#0f172a] border-gray-200'
          : 'bg-[#060913] text-white border-white/5'
      }`}
    >
      {/* 3D Cube Canvas */}
      <div className="cube3d-stage flex h-[420px] items-center justify-center md:h-[520px]">
        <div
          className="cube3d"
          style={{
            transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`,
          }}
        >
          {cubeFaces.map((f) => {
            const IconComp = f.icon;
            return (
              <div
                key={f.face}
                className={`absolute inset-0 overflow-hidden rounded-2xl border shadow-[0_30px_70px_rgba(0,0,0,0.25)] backdrop-blur-md group ${
                  theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#0d1326]/95 border-white/20'
                }`}
                style={{
                  transform: f.transform,
                }}
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover scale-110 opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/40 to-transparent"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-cyan-300 text-[9px] px-2.5 py-1 rounded-full glass-pill">
                      {f.subtitle}
                    </span>
                    <IconComp className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl italic font-bold text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-xs text-gray-200 leading-relaxed font-sans line-clamp-3">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Control Details */}
      <div className="max-w-md mx-auto md:mx-0">
        <p className={`eyebrow mb-4 ${theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-400'}`}>
          Interactive 3D Matrix
        </p>
        <h2 className={`font-serif text-4xl sm:text-5xl italic leading-[1.05] tracking-tight mb-6 ${
          theme === 'light' ? 'text-[#0f172a]' : 'text-white'
        }`}>
          A technology stack, explored from every angle.
        </h2>
        <p className={`text-sm md:text-base leading-relaxed font-sans mb-8 ${
          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
        }`}>
          VitalitySoft integrates best-in-class frameworks across cloud infrastructure, enterprise CRM, mobile ecosystems, and backend microservices.
        </p>

        {/* Cube Face Triggers */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {['front', 'right', 'back', 'left', 'top', 'bottom'].map((face) => (
            <button
              key={face}
              onClick={() => rotateTo(face)}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all text-center ${
                theme === 'light'
                  ? 'border-gray-300 bg-white hover:bg-indigo-50 hover:border-indigo-500 text-gray-700 hover:text-indigo-600 shadow-sm'
                  : 'border-white/15 bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-400 text-gray-200 hover:text-white'
              }`}
            >
              {face} Face
            </button>
          ))}
        </div>

        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`inline-flex items-center gap-2 text-xs transition-colors ${
            theme === 'light' ? 'text-indigo-600 font-semibold hover:text-indigo-800' : 'text-indigo-300 hover:text-white'
          }`}
        >
          <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} />
          <span>{autoRotate ? 'Auto Cube Rotation Active' : 'Enable Auto Rotation'}</span>
        </button>
      </div>
    </section>
  );
}

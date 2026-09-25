import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, RotateCw, Pause, Play, Sparkles, Code2, Cloud, Database, Layers, Smartphone, ShieldCheck, Cpu } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: '.NET Microservices',
    category: 'Microsoft Architecture',
    desc: 'Scalable REST APIs, C# 12, Blazor & enterprise web applications.',
    image: '/brand/hero_dotnet_cloud.jpg',
    tag: 'Core Domain',
  },
  {
    id: 2,
    title: 'Salesforce Enterprise',
    category: 'CRM & Pipeline',
    desc: 'Sales Cloud, Apex customization & automated deal workflow management.',
    image: '/brand/salesforce_crm_3d.jpg',
    tag: 'Cloud CRM',
  },
  {
    id: 3,
    title: 'Cloud & DevOps Native',
    category: 'Infrastructure',
    desc: 'CI/CD pipelines, Kubernetes, Azure DevOps & hybrid multicloud automation.',
    image: '/brand/devops_cloud_native.jpg',
    tag: 'Automation',
  },
  {
    id: 4,
    title: 'Mobile App Engineering',
    category: 'Cross-Platform',
    desc: 'Native iOS & Android mobile platforms built with React Native & Flutter.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    tag: 'Mobile Tech',
  },
  {
    id: 5,
    title: 'QA & Automated Testing',
    category: 'Software Quality',
    desc: 'End-to-end regression, Selenium scripts, security audits & load testing.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    tag: 'Quality Assurance',
  },
  {
    id: 6,
    title: 'SAP ABAP Integration',
    category: 'Enterprise ERP',
    desc: 'High-performance AS ABAP modules, NetWeaver & data warehousing.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    tag: 'ERP Solutions',
  },
  {
    id: 7,
    title: 'Custom Application Dev',
    category: 'Bespoke Software',
    desc: 'Tailored enterprise platforms engineered for high throughput.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    tag: 'Full-Stack',
  },
  {
    id: 8,
    title: 'Talent Management',
    category: 'IT Staff Augmentation',
    desc: 'Dedicated technical squads, skills upskilling & staff augmentation.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    tag: 'IT Consulting',
  },
];

export default function Hero3DRing({ onOpenQuote, theme }) {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  // 3D Cylinder Math Parameters
  const cardCount = solutions.length;
  const radius = 540; // 3D ring radius in pixels

  useEffect(() => {
    let interval;
    if (isAutoRotate) {
      interval = setInterval(() => {
        setRotationAngle((prev) => prev - 360 / cardCount);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isAutoRotate, cardCount]);

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX || (e.touches && e.touches[0].clientX);
    setIsAutoRotate(false);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX);
    const diffX = currentX - startXRef.current;
    setRotationAngle((prev) => prev + diffX * 0.35);
    startXRef.current = currentX;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const rotateToCard = (idx) => {
    setIsAutoRotate(false);
    const targetAngle = -(idx * (360 / cardCount));
    setRotationAngle(targetAngle);
    setActiveCardIndex(idx);
  };

  return (
    <section
      id="hero"
      className={`relative min-h-[100vh] w-full overflow-hidden pt-36 md:pt-44 pb-16 flex flex-col justify-between select-none transition-colors duration-500 ${
        theme === 'light' ? 'bg-[#f4f5f8] text-[#0f172a]' : 'bg-[#060913] text-white'
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Background Watermark & Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <p
          className={`absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 font-serif text-[32vw] md:text-[22vw] font-extrabold italic leading-none select-none tracking-tighter ${
            theme === 'light' ? 'text-indigo-600/5' : 'text-indigo-500/5'
          }`}
        >
          Vitality
        </p>
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      {/* 3D Ring Canvas */}
      <div className="ring3d-container relative inset-0 h-[440px] md:h-[520px] w-full flex items-center justify-center my-auto mt-6 md:mt-12 cursor-grab active:cursor-grabbing">
        {/* Top & Bottom Soft Fade Masks */}
        <div
          className={`absolute inset-x-0 top-0 h-20 pointer-events-none z-10 ${
            theme === 'light' ? 'bg-gradient-to-b from-[#f4f5f8] to-transparent' : 'bg-gradient-to-b from-[#060913] to-transparent'
          }`}
        ></div>
        <div
          className={`absolute inset-x-0 bottom-0 h-16 pointer-events-none z-10 ${
            theme === 'light' ? 'bg-gradient-to-t from-[#f4f5f8] to-transparent' : 'bg-gradient-to-t from-[#060913] to-transparent'
          }`}
        ></div>

        <div
          className="ring3d-stage absolute left-1/2 top-[58%] h-0 w-0"
          style={{
            transform: `rotateY(${rotationAngle}deg)`,
          }}
        >
          {solutions.map((item, idx) => {
            const angleDeg = idx * (360 / cardCount);
            return (
              <div
                key={item.id}
                onClick={() => rotateToCard(idx)}
                className={`ring3d-card absolute -left-[115px] -top-[160px] w-[230px] h-[320px] md:-left-[145px] md:-top-[200px] md:w-[290px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border backdrop-blur-md group ${
                  theme === 'light'
                    ? 'bg-white border-gray-200 text-[#0f172a]'
                    : 'bg-gradient-to-b from-indigo-950/80 to-[#060913]/90 border-white/15 text-white'
                }`}
                style={{
                  transform: `rotateY(${angleDeg}deg) translateZ(${radius}px)`,
                }}
              >
                {/* Image */}
                <div className="relative w-full h-[60%] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      const currentSrc = e.target.src;
                      if (item.image.startsWith('/brand/') && !currentSrc.includes('/static/')) {
                        const filename = item.image.split('/').pop();
                        e.target.src = `/static/brand/${filename}`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/60 via-transparent to-transparent"></div>
                  <span
                    className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[9px] uppercase tracking-wider font-semibold ${
                      theme === 'light' ? 'bg-indigo-600 text-white' : 'glass-pill text-cyan-300'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`p-4 md:p-5 flex flex-col justify-between h-[40%] ${
                    theme === 'light' ? 'bg-white text-[#0f172a]' : 'bg-[#0d1326]/90 text-white'
                  }`}
                >
                  <div>
                    <p className={`eyebrow text-[9px] mb-1 ${theme === 'light' ? 'text-indigo-600 font-bold' : 'text-indigo-400'}`}>
                      {item.category}
                    </p>
                    <h3
                      className={`font-serif text-base md:text-lg italic font-bold transition-colors ${
                        theme === 'light' ? 'text-[#0f172a] group-hover:text-indigo-600' : 'text-white group-hover:text-cyan-300'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className={`text-[11px] mt-1 line-clamp-2 leading-relaxed font-sans ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                  <div className={`flex items-center justify-between pt-2 border-t mt-1.5 ${
                    theme === 'light' ? 'border-gray-100' : 'border-white/10'
                  }`}>
                    <span className={`text-[9px] uppercase tracking-widest font-semibold transition-colors ${
                      theme === 'light' ? 'text-indigo-600 group-hover:text-indigo-800' : 'text-indigo-300 group-hover:text-white'
                    }`}>
                      Explore Solution →
                    </span>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                      theme === 'light' ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' : 'bg-white/5 group-hover:bg-cyan-500 group-hover:text-black'
                    }`}>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hero Headline Overlay */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-4">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-3 ${
          theme === 'light' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-indigo-950/40 border-indigo-500/30 text-cyan-300'
        }`}>
          <Sparkles className={`w-3.5 h-3.5 animate-pulse ${theme === 'light' ? 'text-indigo-600' : 'text-cyan-400'}`} />
          <span className="eyebrow text-[10px]">
            Enterprise Digitalization Engine
          </span>
        </div>
        <p className={`font-script text-2xl md:text-4xl mb-2 font-bold ${
          theme === 'light' ? 'text-indigo-900' : 'text-indigo-300'
        }`}>
          Digitalization engineered with precision
        </p>
        <h1 className={`font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl italic font-bold tracking-tight leading-[0.95] mb-6 ${
          theme === 'light' ? 'text-[#0f172a]' : 'text-white'
        }`}>
          Your vision deserves <br />
          <span className={theme === 'light' ? 'bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-950 bg-clip-text text-transparent font-extrabold' : 'bg-gradient-to-r from-white via-cyan-200 to-indigo-400 bg-clip-text text-transparent font-bold'}>
            exceptional code.
          </span>
        </h1>

        {/* Buttons & Drag Prompt */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <button
            onClick={onOpenQuote}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-xl shadow-indigo-600/30 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            <span>Start Digitalizing</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#solutions"
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full border text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
              theme === 'light'
                ? 'bg-white border-gray-300 text-gray-800 hover:border-indigo-500 hover:text-indigo-600 shadow-sm'
                : 'border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white'
            }`}
          >
            <span>Explore 3D Stack</span>
          </a>
        </div>

        {/* Controls Bar */}
        <div className={`mt-8 flex items-center justify-center gap-4 text-xs ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
        }`}>
          <button
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors ${
              theme === 'light'
                ? 'bg-white border-gray-300 text-gray-700 hover:border-indigo-500'
                : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
            }`}
          >
            {isAutoRotate ? <Pause className="w-3.5 h-3.5 text-cyan-600" /> : <Play className="w-3.5 h-3.5 text-indigo-600" />}
            <span>{isAutoRotate ? 'Pause 3D Ring' : 'Auto Rotate'}</span>
          </button>
          <span className="text-gray-400">•</span>
          <span className="eyebrow text-[10px]">
            Drag mouse horizontally to rotate 3D ring
          </span>
        </div>
      </div>
    </section>
  );
}

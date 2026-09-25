import React, { useState } from 'react';
import { ArrowRight, Cpu, Database, Cloud, Smartphone, ShieldCheck, Layers, CheckCircle2 } from 'lucide-react';

const solutionTabs = [
  {
    id: 'dotnet',
    name: '.NET Core & Microservices',
    category: 'Microsoft Stack',
    icon: Cpu,
    headline: 'Modernizing Legacy Code into .NET Core Microservices',
    desc: 'Transitioning enterprise legacy monolithic systems into responsive, scalable Microsoft .NET Core 8 microservices. By leveraging Blazor server-side components over SignalR interop and automated CI/CD deployment on Azure DevOps, we achieved a 4.2x increase in transaction throughput with 99.99% uptime.',
    metrics: [
      { label: 'Faster Execution Speed', val: '4.2x' },
      { label: 'System Uptime SLA', val: '99.99%' },
    ],
    features: [
      '.NET 8 & C# 12 Web API Microservices',
      'Blazor Server & WebAssembly Realtime Interop',
      'Entity Framework Core & SQL Server Optimization',
      'Azure App Service & Container Apps Deployment',
    ],
    image: '/brand/hero_dotnet_cloud.jpg',
  },
  {
    id: 'salesforce',
    name: 'Salesforce CRM Suite',
    category: 'Cloud CRM',
    icon: Database,
    headline: 'Automating Deal Pipelines & Quotation Engines',
    desc: 'Empowering sales teams with custom Salesforce Apex triggers, Lightning Web Components (LWC), and automated product quotation workflows. Track deal stages, progress opportunities, and streamline client onboarding with seamless ERP integration.',
    metrics: [
      { label: 'Faster Deal Closure', val: '60%' },
      { label: 'Automated Pipeline', val: '100%' },
    ],
    features: [
      'Sales Cloud & Service Cloud Customization',
      'Apex Triggers & Lightning Web Components (LWC)',
      'Automated Product Quotations & Billing Sync',
      'Lead-to-Order Pipeline Analytics',
    ],
    image: '/brand/salesforce_crm_3d.jpg',
  },
  {
    id: 'devops',
    name: 'Cloud DevOps & CI/CD',
    category: 'Infrastructure',
    icon: Cloud,
    headline: 'Kubernetes Container Orchestration & Azure Pipelines',
    desc: 'Unlock your hybrid cloud investment with automated CI/CD deployment, Kubernetes cluster scaling, Infrastructure as Code (IaC), and zero-downtime rolling updates for enterprise applications.',
    metrics: [
      { label: 'Deployment Velocity', val: '10x' },
      { label: 'Rolling Release Uptime', val: '100%' },
    ],
    features: [
      'Azure DevOps & GitHub Actions Automation',
      'Kubernetes Cluster Orchestration & Docker',
      'Terraform & Infrastructure as Code (IaC)',
      'Continuous Security & Compliance Scanning',
    ],
    image: '/brand/devops_cloud_native.jpg',
  },
  {
    id: 'mobile',
    name: 'Mobile App Engineering',
    category: 'iOS & Android',
    icon: Smartphone,
    headline: 'High-Fidelity Cross-Platform Mobile Applications',
    desc: 'Engineering cross-platform mobile apps using React Native and Flutter. Features offline data synchronization, biometric authentication, push notifications, and high-performance native bridges.',
    metrics: [
      { label: 'App Store Rating', val: '4.9★' },
      { label: 'Offline Sync Speed', val: '<100ms' },
    ],
    features: [
      'React Native & Flutter Cross-Platform Engine',
      'Offline Data Synchronization & SQLite Storage',
      'Biometric Security & Encrypted Tokens',
      'App Store & Google Play Publishing Support',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'qa',
    name: 'QA & Automated Testing',
    category: 'Quality Assurance',
    desc: 'Systematic testing methodologies involving hardware-software interfacing, Selenium regression, load testing, and API security audits to guarantee zero-bug production releases.',
    icon: ShieldCheck,
    headline: 'Automated Regression Suites & Load Testing',
    metrics: [
      { label: 'Test Coverage', val: '98%' },
      { label: 'Zero Critical Bugs', val: '100%' },
    ],
    features: [
      'Selenium & Playwright Test Automation',
      'JMeter API Load & Stress Performance Testing',
      'Hardware-Software Interfacing Diagnostics',
      'Automated CI/CD Quality Gate Integration',
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sap',
    name: 'SAP ABAP Modules',
    category: 'Enterprise ERP',
    icon: Layers,
    headline: 'Three-Tier AS ABAP NetWeaver Architecture',
    desc: 'Custom AS ABAP programming across presentation, application, and database layers of SAP NetWeaver architectures. Data warehousing, custom module development, and ERP sync.',
    metrics: [
      { label: 'ERP Data Throughput', val: '5.0x' },
      { label: 'Sync Accuracy', val: '100%' },
    ],
    features: [
      'Application Server ABAP (AS ABAP) Programming',
      'SAP NetWeaver Integration & BAPI Modules',
      'Three-Tier Client-Server Architecture Sync',
      'Enterprise Data Warehouse & Analytics',
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
];

export default function FeaturedSolution({ onOpenQuote, theme }) {
  const [activeTabId, setActiveTabId] = useState('dotnet');
  const activeSolution = solutionTabs.find((s) => s.id === activeTabId) || solutionTabs[0];

  return (
    <section
      id="solutions"
      className={`relative px-6 py-24 md:px-12 md:py-36 border-t scroll-mt-20 transition-colors duration-500 ${
        theme === 'light'
          ? 'bg-[#f4f5f8] text-[#0f172a] border-gray-200'
          : 'bg-[#060913] text-white border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 ${
              theme === 'light'
                ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                : 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300'
            }`}
          >
            <span className="eyebrow text-[10px]">Enterprise Solution Matrix</span>
          </div>
          <h2
            className={`font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.05] tracking-tight mb-4 ${
              theme === 'light' ? 'text-[#0f172a]' : 'text-white'
            }`}
          >
            Software Solutions Architecture.
          </h2>
          <p className={theme === 'light' ? 'text-gray-700 text-sm md:text-base font-sans' : 'text-gray-300 text-sm md:text-base font-sans'}>
            Explore our specialized enterprise solution domains below. Select any domain to inspect specifications, performance metrics, and features.
          </p>
        </div>

        {/* Domain Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {solutionTabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 scale-105 border border-cyan-400'
                    : theme === 'light'
                      ? 'bg-white border border-gray-300 text-gray-700 hover:text-indigo-600 hover:border-indigo-400 shadow-sm'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Solution Details Showcase Card */}
        <div
          className={`grid gap-12 md:grid-cols-2 items-center p-8 md:p-12 rounded-3xl border shadow-xl transition-colors duration-500 ${
            theme === 'light'
              ? 'bg-white border-gray-200 text-[#0f172a]'
              : 'glass-panel border-cyan-500/30 text-white'
          }`}
        >
          {/* Left Details */}
          <div>
            <span
              className={`eyebrow text-[10px] block mb-2 ${
                theme === 'light' ? 'text-indigo-600' : 'text-cyan-400'
              }`}
            >
              {activeSolution.category} Domain
            </span>
            <h3
              className={`font-serif text-3xl sm:text-4xl italic font-bold leading-tight mb-4 ${
                theme === 'light' ? 'text-[#0f172a]' : 'text-white'
              }`}
            >
              {activeSolution.headline}
            </h3>
            <p
              className={`text-sm leading-relaxed font-sans mb-8 ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
            >
              {activeSolution.desc}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {activeSolution.metrics.map((m, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl border ${
                    theme === 'light' ? 'bg-indigo-50/70 border-indigo-100' : 'bg-white/5 border-white/10'
                  }`}
                >
                  <p
                    className={`font-serif text-3xl italic font-extrabold ${
                      theme === 'light' ? 'text-indigo-600' : 'text-cyan-300'
                    }`}
                  >
                    {m.val}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Features Checklist */}
            <ul className="space-y-2.5 mb-8">
              {activeSolution.features.map((feat, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-3 text-xs ${
                    theme === 'light' ? 'text-gray-800 font-medium' : 'text-gray-200'
                  }`}
                >
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 ${
                      theme === 'light' ? 'text-indigo-600' : 'text-cyan-400'
                    }`}
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all group"
            >
              <span>Get Proposal for {activeSolution.name}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visual Image */}
          <div className="relative h-[380px] md:h-[480px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
            <img
              src={activeSolution.image}
              alt={activeSolution.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              onError={(e) => {
                const currentSrc = e.target.src;
                if (activeSolution.image.startsWith('/brand/') && !currentSrc.includes('/static/')) {
                  const filename = activeSolution.image.split('/').pop();
                  e.target.src = `/static/brand/${filename}`;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/90 via-[#060913]/30 to-transparent"></div>
            <div
              className={`absolute bottom-6 left-6 right-6 p-4 rounded-2xl border backdrop-blur-md ${
                theme === 'light'
                  ? 'bg-white/90 border-gray-200 text-[#0f172a]'
                  : 'glass-panel border-white/15 text-white'
              }`}
            >
              <span
                className={`eyebrow text-[9px] ${
                  theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-300'
                }`}
              >
                {activeSolution.category}
              </span>
              <p
                className={`font-serif italic text-lg font-bold mt-0.5 ${
                  theme === 'light' ? 'text-[#0f172a]' : 'text-white'
                }`}
              >
                {activeSolution.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

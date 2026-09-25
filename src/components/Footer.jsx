import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, Cpu, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenQuote, theme }) {
  return (
    <footer
      id="contact"
      className={`pt-24 pb-12 border-t relative overflow-hidden transition-colors duration-500 ${
        theme === 'light'
          ? 'bg-[#e2e8f0] text-[#0f172a] border-gray-300'
          : 'bg-[#03050a] text-white border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top CTA Banner */}
        <div
          className={`p-10 md:p-14 rounded-3xl border mb-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl ${
            theme === 'light'
              ? 'bg-white border-indigo-200 text-[#0f172a]'
              : 'glass-panel border-indigo-500/30 text-white'
          }`}
        >
          <div className="relative z-10 max-w-xl">
            <p className={`eyebrow mb-2 ${theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-400'}`}>
              Ready to Digitalize?
            </p>
            <h3 className={`font-serif text-3xl sm:text-4xl md:text-5xl italic font-bold leading-tight mb-3 ${
              theme === 'light' ? 'text-[#0f172a]' : 'text-white'
            }`}>
              Every system is unique. Your proposal should be too.
            </h3>
            <p className={`text-xs md:text-sm font-sans ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Schedule a technical discovery call with our senior architects in Hyderabad or over video call.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="relative z-10 shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all"
          >
            Create Custom Proposal
          </button>
          <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        {/* Footer Navigation Columns */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b ${
          theme === 'light' ? 'border-gray-300' : 'border-white/10'
        }`}>
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/brand/logo.png"
                alt="VitalitySoft"
                className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                onError={(e) => {
                  const currentSrc = e.target.src;
                  if (!currentSrc.includes('/static/')) {
                    e.target.src = '/static/brand/logo.png';
                  } else if (!currentSrc.includes('logo_light.png')) {
                    e.target.src = '/static/brand/logo_light.png';
                  } else {
                    e.target.src = '/static/logo.png';
                  }
                }}
              />
            </div>
            <p className={`text-xs leading-relaxed font-sans mb-6 ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-400'
            }`}>
              VitalitySoft provides enterprise software development, Microsoft .NET microservices, Salesforce integration, Cloud DevOps, and IT talent management.
            </p>
            <div className={`flex items-center gap-2 text-xs font-semibold ${
              theme === 'light' ? 'text-indigo-700' : 'text-cyan-400'
            }`}>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>ISO & Quality Compliant Delivery</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className={`eyebrow text-[10px] mb-4 ${
              theme === 'light' ? 'text-gray-800 font-bold' : 'text-gray-300'
            }`}>Quick Links</p>
            <ul className={`space-y-2.5 text-xs ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-400'
            }`}>
              <li><a href="#hero" className="hover:text-indigo-600 transition-colors">Home & 3D Ring</a></li>
              <li><a href="#solutions" className="hover:text-indigo-600 transition-colors">Software Solutions</a></li>
              <li><a href="#showcase" className="hover:text-indigo-600 transition-colors">3D Portfolio Showcase</a></li>
              <li><a href="#cube" className="hover:text-indigo-600 transition-colors">Tech Stack Matrix</a></li>
              <li><a href="#services" className="hover:text-indigo-600 transition-colors">3D Service Flip Cards</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-600 transition-colors">Enterprise Portfolio</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <p className={`eyebrow text-[10px] mb-4 ${
              theme === 'light' ? 'text-gray-800 font-bold' : 'text-gray-300'
            }`}>Core Services</p>
            <ul className={`space-y-2.5 text-xs ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-400'
            }`}>
              <li><span className="hover:text-indigo-600 transition-colors">.NET Core & Blazor Web Apps</span></li>
              <li><span className="hover:text-indigo-600 transition-colors">Salesforce CRM Integration</span></li>
              <li><span className="hover:text-indigo-600 transition-colors">Azure Cloud & DevOps CI/CD</span></li>
              <li><span className="hover:text-indigo-600 transition-colors">QA & Automated Testing</span></li>
              <li><span className="hover:text-indigo-600 transition-colors">Mobile App Engineering</span></li>
              <li><span className="hover:text-indigo-600 transition-colors">IT Staffing & Talent Services</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <p className={`eyebrow text-[10px] mb-4 ${
              theme === 'light' ? 'text-gray-800 font-bold' : 'text-gray-300'
            }`}>Hyderabad Office</p>
            <div className={`space-y-3.5 text-xs ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-400'
            }`}>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>Kukatpally, Hyderabad, Telangana - 500090, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-600 shrink-0" />
                <a href="tel:+919866648973" className="hover:text-indigo-600 transition-colors">+91 98666 48973</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <a href="mailto:info@vitalitysoft.com" className="hover:text-indigo-600 transition-colors">info@vitalitysoft.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-500'
        }`}>
          <p>© {new Date().getFullYear()} VitalitySoft. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Security Overview</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

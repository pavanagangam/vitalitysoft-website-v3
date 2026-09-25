import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Send, Cpu, Database, Cloud, Smartphone, ShieldCheck, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

const techOptions = [
  { id: 'dotnet', label: '.NET Core & Microservices', icon: Cpu },
  { id: 'salesforce', label: 'Salesforce CRM & Apex', icon: Database },
  { id: 'devops', label: 'Azure DevOps & Kubernetes', icon: Cloud },
  { id: 'mobile', label: 'Mobile App (iOS/Android)', icon: Smartphone },
  { id: 'qa', label: 'QA & Automated Testing', icon: ShieldCheck },
  { id: 'sap', label: 'SAP ABAP Modules', icon: Layers },
];

export default function QuoteBuilderModal({ isOpen, onClose, theme }) {
  const [selectedTech, setSelectedTech] = useState(['dotnet']);
  const [budgetRange, setBudgetRange] = useState('₹1L - ₹3L');
  const [timeline, setTimeline] = useState('1 to 3 Months');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleTech = (id) => {
    if (selectedTech.includes(id)) {
      if (selectedTech.length > 1) {
        setSelectedTech(selectedTech.filter((t) => t !== id));
      }
    } else {
      setSelectedTech([...selectedTech, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const resetModal = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div
        className={`relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl border shadow-2xl my-8 ${
          theme === 'light'
            ? 'bg-white border-gray-200 text-[#0f172a]'
            : 'glass-panel border-indigo-500/30 text-white shadow-[0_40px_90px_rgba(0,0,0,0.9)]'
        }`}
      >
        <button
          onClick={resetModal}
          className={`absolute top-6 right-6 p-2 rounded-full border transition-colors ${
            theme === 'light'
              ? 'text-gray-600 hover:text-black bg-gray-100 border-gray-200'
              : 'text-gray-400 hover:text-white bg-white/5 border-white/10'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className={`w-4 h-4 ${theme === 'light' ? 'text-indigo-600' : 'text-cyan-400'}`} />
              <span className={`eyebrow text-[10px] ${theme === 'light' ? 'text-indigo-600 font-bold' : 'text-cyan-300'}`}>
                Instant Proposal Engine
              </span>
            </div>
            <h3 className={`font-serif text-3xl italic font-bold mb-2 ${
              theme === 'light' ? 'text-[#0f172a]' : 'text-white'
            }`}>
              Create Your Custom Quote
            </h3>
            <p className={`text-xs font-sans mb-6 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Select your technologies and scope. We will generate a tailored proposal within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tech Selector */}
              <div>
                <label className={`eyebrow text-[10px] block mb-3 ${
                  theme === 'light' ? 'text-gray-800 font-bold' : 'text-gray-300'
                }`}>
                  1. Select Target Technologies (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {techOptions.map((opt) => {
                    const IconComp = opt.icon;
                    const isSelected = selectedTech.includes(opt.id);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => toggleTech(opt.id)}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                          isSelected
                            ? theme === 'light'
                              ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                              : 'bg-gradient-to-r from-indigo-900/80 to-cyan-950/80 border-cyan-400 text-white shadow-md'
                            : theme === 'light'
                              ? 'bg-gray-50 border-gray-200 text-gray-700 hover:border-indigo-400'
                              : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                        }`}
                      >
                        <IconComp className={`w-4 h-4 shrink-0 ${
                          isSelected
                            ? 'text-white'
                            : theme === 'light' ? 'text-indigo-600' : 'text-gray-500'
                        }`} />
                        <span className="text-[11px] font-semibold">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`eyebrow text-[10px] block mb-2 ${
                    theme === 'light' ? 'text-gray-800 font-bold' : 'text-gray-300'
                  }`}>
                    2. Estimated Budget Range
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className={`w-full p-3 rounded-xl border text-xs outline-none ${
                      theme === 'light'
                        ? 'bg-gray-50 border-gray-300 text-[#0f172a] focus:border-indigo-600'
                        : 'glass-panel border-white/15 text-white bg-[#060913] focus:border-cyan-400'
                    }`}
                  >
                    <option value="₹45,000 - ₹1,00,000">₹45,000 - ₹1,00,000</option>
                    <option value="₹1L - ₹3L">₹1,00,000 - ₹3,00,000</option>
                    <option value="₹3L - ₹5L">₹3,00,000 - ₹5,00,000</option>
                    <option value="₹5L+ Enterprise">₹5,00,000+ Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className={`eyebrow text-[10px] block mb-2 ${
                    theme === 'light' ? 'text-gray-800 font-bold' : 'text-gray-300'
                  }`}>
                    3. Target Delivery Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className={`w-full p-3 rounded-xl border text-xs outline-none ${
                      theme === 'light'
                        ? 'bg-gray-50 border-gray-300 text-[#0f172a] focus:border-indigo-600'
                        : 'glass-panel border-white/15 text-white bg-[#060913] focus:border-cyan-400'
                    }`}
                  >
                    <option value="Under 1 Month">Under 1 Month (Fast-Track)</option>
                    <option value="1 to 3 Months">1 to 3 Months (Standard)</option>
                    <option value="3 to 6 Months">3 to 6 Months (Complex Enterprise)</option>
                    <option value="Ongoing SLA Support">Ongoing SLA Technical Support</option>
                  </select>
                </div>
              </div>

              {/* Contact Fields */}
              <div className="space-y-3">
                <label className={`eyebrow text-[10px] block mb-1 ${
                  theme === 'light' ? 'text-gray-800 font-bold' : 'text-gray-300'
                }`}>
                  4. Your Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`p-3 rounded-xl border text-xs outline-none ${
                      theme === 'light'
                        ? 'bg-gray-50 border-gray-300 text-[#0f172a] placeholder-gray-400 focus:border-indigo-600'
                        : 'glass-panel border-white/15 text-white placeholder-gray-500 focus:border-cyan-400'
                    }`}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Corporate Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`p-3 rounded-xl border text-xs outline-none ${
                      theme === 'light'
                        ? 'bg-gray-50 border-gray-300 text-[#0f172a] placeholder-gray-400 focus:border-indigo-600'
                        : 'glass-panel border-white/15 text-white placeholder-gray-500 focus:border-cyan-400'
                    }`}
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number (e.g. +91 98666 48973)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full p-3 rounded-xl border text-xs outline-none ${
                    theme === 'light'
                      ? 'bg-gray-50 border-gray-300 text-[#0f172a] placeholder-gray-400 focus:border-indigo-600'
                      : 'glass-panel border-white/15 text-white placeholder-gray-500 focus:border-cyan-400'
                  }`}
                />
                <textarea
                  rows="3"
                  placeholder="Briefly describe your business process or project vision..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className={`w-full p-3 rounded-xl border text-xs outline-none ${
                    theme === 'light'
                      ? 'bg-gray-50 border-gray-300 text-[#0f172a] placeholder-gray-400 focus:border-indigo-600'
                      : 'glass-panel border-white/15 text-white placeholder-gray-500 focus:border-cyan-400'
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-xl shadow-cyan-500/30 hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Generate Proposal</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className={`font-serif text-3xl italic font-bold mb-2 ${
              theme === 'light' ? 'text-[#0f172a]' : 'text-white'
            }`}>
              Proposal Request Received!
            </h3>
            <p className={`text-sm max-w-md mx-auto mb-6 ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Thank you <strong className={theme === 'light' ? 'text-indigo-600' : 'text-cyan-300'}>{formData.name}</strong>. Our senior solution architect will review your project requirements and email your custom proposal to <strong className={theme === 'light' ? 'text-indigo-600' : 'text-cyan-300'}>{formData.email}</strong> shortly.
            </p>
            <div className={`p-4 rounded-2xl border text-left max-w-md mx-auto mb-6 text-xs space-y-1 ${
              theme === 'light' ? 'bg-gray-50 border-gray-200' : 'glass-panel border-white/10'
            }`}>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>Selected Tech: <span className={`font-semibold ${theme === 'light' ? 'text-[#0f172a]' : 'text-white'}`}>{selectedTech.join(', ')}</span></p>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>Budget Range: <span className={`font-semibold ${theme === 'light' ? 'text-[#0f172a]' : 'text-white'}`}>{budgetRange}</span></p>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>Timeline: <span className={`font-semibold ${theme === 'light' ? 'text-[#0f172a]' : 'text-white'}`}>{timeline}</span></p>
            </div>
            <button
              onClick={resetModal}
              className={`px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider ${
                theme === 'light'
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

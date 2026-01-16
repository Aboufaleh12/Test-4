import React from 'react';
import { Check, X, Zap, Sparkles } from 'lucide-react';

const Comparison: React.FC = () => {
  const others = [
    "Generic one-size-fits-all dispute letters",
    "Vague promises with no clear timeline",
    "High upfront fees with hidden charges",
    "Slow response times, poor communication",
    "No credit education or long-term guidance"
  ];

  const us = [
    "Personalized credit analysis & tailored strategy",
    "No upfront fees - only pay for results",
    "Dedicated specialist with 24/7 portal access",
    "Credit education for long-term financial health",
    "Proven track record with real client results"
  ];

  return (
    <section className="section-spacing bg-white overflow-visible">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-6">
             <Zap className="w-4 h-4 fill-slate-600" />
             <span className="uppercase tracking-wider">Advantage</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Why choose us over others
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-regular">
            Here's how ClearPath delivers more value, clarity, and results compared to typical service providers.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative items-stretch">
            
            {/* VS Badge (Absolute Center) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-primary rounded-2xl rotate-12 flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-white font-bold text-lg -rotate-12">VS</span>
                </div>
            </div>

            {/* Left Card: Others */}
            <div className="bg-[#F8FAFC] rounded-[2.5rem] p-8 md:p-12 border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="mb-8 border-b border-slate-200 pb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Others</h3>
                    <p className="text-slate-500 text-sm mt-2">Typical Agencies</p>
                </div>
                <ul className="space-y-5 flex-grow">
                    {others.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                                <X className="w-3.5 h-3.5 text-slate-500" />
                            </div>
                            <span className="text-slate-600 text-base font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Card: ClearPath (Dark) */}
            <div className="bg-dark rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl text-white flex flex-col h-full transform md:-translate-y-4 border border-primary/20">
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6 relative z-10">
                     <div>
                        <h3 className="text-2xl font-bold text-white">ClearPath</h3>
                        <p className="text-blue-200 text-sm mt-2">Premium Service</p>
                     </div>
                     <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
                        <Sparkles className="w-6 h-6 text-secondary" />
                     </div>
                </div>
                 
                <ul className="space-y-4 relative z-10 flex-grow">
                     {us.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-lg">
                                <Check className="w-3.5 h-3.5 text-dark font-bold" />
                            </div>
                            <span className="text-white font-medium text-base tracking-wide">{item}</span>
                        </li>
                    ))}
                </ul>
                
                {/* Background Glow */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
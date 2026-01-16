import React from 'react';
import { FileSearch, Scale, TrendingUp, ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Audit & Analysis",
      desc: "We import your 3-bureau credit reports and conduct a line-by-line audit to identify inaccuracies, outdated information, and compliance violations under the FCRA.",
      icon: FileSearch
    },
    {
      num: "02",
      title: "Challenge & Validation",
      desc: "Our team constructs custom data-validation requests sent to bureaus and creditors. We demand proof of the negative items; if they cannot verify it, they must remove it.",
      icon: Scale
    },
    {
      num: "03",
      title: "Optimization & Growth",
      desc: "As erroneous items are removed, we provide specific guidance on credit utilization and mix to help maximize your score's recovery potential.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="process" className="section-spacing bg-[#F8FAFC] border-b border-slate-200">
      <div className="layout-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primaryDark text-xs font-bold uppercase tracking-wider mb-6">
             <span className="w-2 h-2 rounded-full bg-primary"></span>
             The Methodology
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            A compliant, data-driven approach.
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We navigate the complexities of credit reporting statutes so you don't have to. Here is how we advocate for your financial reputation.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent z-0"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                
                {/* Icon Circle */}
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 group-hover:border-primary/20 group-hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] transition-all duration-500 relative">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-lg ring-4 ring-[#F8FAFC]">
                    {step.num}
                  </div>
                  <IconComponent className="w-10 h-10 text-slate-400 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[280px] mx-auto">
                    {step.desc}
                </p>

                {/* Mobile Connector (Vertical) */}
                {index !== steps.length - 1 && (
                    <div className="md:hidden w-px h-12 bg-slate-200 my-6"></div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
            <a href="tel:+19999999999" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primaryDark transition-colors group text-sm uppercase tracking-wide">
                Start your analysis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

      </div>
    </section>
  );
};

export default Process;
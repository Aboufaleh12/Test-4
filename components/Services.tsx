import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Zap } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="section-spacing bg-slate-50 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="layout-container relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
               <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
               <span>Targeted Disputes</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              What We Fix & <span className="text-primary">Restore</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We leverage consumer protection laws (FCRA, FDCPA) to challenge negative items that are inaccurate, untimely, or unverifiable.
            </p>
          </div>

          <div className="hidden md:block pb-2">
             <a href="tel:+19999999999" className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-900 font-bold text-sm shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <span>Start Free Analysis</span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                </div>
             </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            // Explicitly assigning to capitalized variable ensures JSX treats it as a component function
            const Icon = service.Icon;
            return (
              <div 
                key={`service-${index}`} 
                className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-500/20 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] transition-all duration-500 flex flex-col overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:rotate-3 transition-all duration-300 shadow-sm relative z-10">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-base font-medium flex-grow mb-8">
                        {service.description}
                    </p>
                    
                    {/* Bottom Action */}
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between group-hover:border-blue-100 transition-colors">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">Recover Score</span>
                        <ArrowRight className="w-5 h-5 text-slate-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-300" />
                    </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
           <a href="tel:+19999999999" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg hover:bg-primaryDark transition-colors w-full">
            Start Your Repair Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
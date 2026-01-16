import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';

const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: "US-Based Experts",
      description: "Dedicated specialists who understand US credit laws inside and out."
    },
    {
      icon: Award,
      title: "Personalized Plans",
      description: "No cookie-cutter disputes. We build a custom strategy for your specific report."
    },
    {
      icon: Clock,
      title: "24/7 Client Portal",
      description: "Track your progress, see deletions, and upload documents anytime, anywhere."
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "We're confident in our results. If we can't help, you don't pay. Simple as that."
    }
  ];

  return (
    <section id="why-us" className="section-spacing bg-dark text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      <div className="layout-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ClearPath?</h2>
            <p className="text-white/80 text-lg mb-12 leading-relaxed font-regular max-w-xl"> We are more than just a repair service; we are your partner in financial freedom.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {benefits.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col gap-3 group">
                    <div className="flex items-center gap-4">
                      <div className="bg-secondary/10 p-2.5 rounded-xl border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                    </div>
                    <p className="text-white/60 text-base leading-relaxed pl-[3.25rem]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 w-full relative pl-0 lg:pl-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-850 p-2">
               <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply"></div>
               <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Consultants working" 
                className="w-full h-auto rounded-2xl opacity-90 relative z-0"
              />
              
              {/* Stats Card Overlay - Gold Numbers as requested */}
              <div className="absolute bottom-8 right-8 bg-white text-dark p-6 rounded-2xl shadow-xl max-w-[260px] hidden sm:block z-20 border border-gray-100 hover-lift">
                <div className="text-4xl font-bold text-secondary mb-1">98%</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Client Satisfaction</div>
                <div className="mt-4 flex -space-x-3 items-center">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-10 h-10 rounded-full border-[3px] border-white object-cover" src={`https://picsum.photos/50/50?random=${i+10}`} alt="client" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-[3px] border-white bg-dark text-white flex items-center justify-center text-xs font-bold shadow-md relative z-10">+2k</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Zap, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Duplicate testimonials to create a seamless infinite loop
  const sliderTestimonials = [
    ...TESTIMONIALS, ...TESTIMONIALS, 
    ...TESTIMONIALS, ...TESTIMONIALS
  ];

  return (
    <section id="testimonials" className="section-spacing bg-[#0B1121] text-white relative overflow-hidden border-t border-white/5">
       {/* Background Ambience matches Hero */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px]"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="layout-container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-6">
             <Zap className="w-3.5 h-3.5" />
             <span>Client Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
            We partner with individuals to drive growth and lasting financial impact. Here's what our clients say.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-[2.5rem] p-0 mb-20 relative overflow-hidden shadow-2xl border border-white/10">
             {/* Background Decoration */}
             <div className="absolute right-0 bottom-0 w-2/3 h-full bg-white/5 rounded-tl-[100px] -z-0 pointer-events-none hidden lg:block"></div>
             
             <div className="grid lg:grid-cols-12 gap-0 relative z-10">
                
                {/* Left Column: Profile */}
                <div className="lg:col-span-4 flex flex-col gap-4 p-6 lg:p-10 border-r border-white/10">
                     <div className="bg-slate-900/50 p-6 rounded-[20px] flex items-center justify-between border border-white/5">
                        <div>
                            <h4 className="font-bold text-xl text-white leading-tight">Marcus Thompson</h4>
                            <p className="text-emerald-600 text-sm font-medium mt-1">Verified Client</p>
                        </div>
                        <img 
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                            alt="Marcus Thompson" 
                            className="w-14 h-14 rounded-full object-cover ring-2 ring-white/10 grayscale brightness-90 contrast-125" 
                        />
                     </div>
                     
                     {/* Stat Block */}
                     <div className="bg-slate-900/50 p-6 rounded-[20px] flex-1 flex flex-col justify-center min-h-[140px] border border-white/5">
                        <div className="text-4xl font-bold text-emerald-600 mb-2">+162</div>
                        <div className="text-slate-400 font-medium">Points increased in 90 days</div>
                     </div>
                </div>

                {/* Right Column: Quote */}
                <div className="lg:col-span-8 p-8 lg:p-16 flex flex-col justify-center relative">
                    <p className="text-xl md:text-2xl font-light text-slate-200 italic leading-relaxed mb-8">
                        "I was denied a mortgage due to inaccurate collections. ClearPath removed them in under 90 days. My score jumped 162 points, and I finally closed on my dream home."
                    </p>
                    <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />)}
                    </div>
                    
                    {/* Quote Icon Bottom Right */}
                     <Quote className="absolute bottom-8 right-8 w-12 h-12 text-white/5 fill-white/5 rotate-180" />
                </div>
             </div>
        </div>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative w-full overflow-hidden">
        {/* Fade Gradients (Dark) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-[#0B1121] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-[#0B1121] to-transparent pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="flex gap-8 animate-marquee w-max hover:[animation-play-state:paused] px-4">
          {sliderTestimonials.map((t, i) => (
            <div 
              key={i} 
              className="w-[300px] md:w-[400px] bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] flex flex-col h-full hover:bg-white/10 transition-all duration-300 group border border-white/5"
            >
              <div className="flex gap-1 mb-6">
                 {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-secondary fill-secondary" />)}
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-1 font-light italic">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10 grayscale brightness-90" 
                />
                <div>
                  <h4 className="font-bold text-white text-base">{t.name}</h4>
                  <p className="text-slate-500 text-xs font-semibold uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
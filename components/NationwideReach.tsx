import React from 'react';
import { MapPin } from 'lucide-react';

const NationwideReach: React.FC = () => {
  return (
    <section className="hidden md:block section-spacing bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{
             backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)',
             backgroundSize: '32px 32px'
           }}>
      </div>
      
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full opacity-60 blur-[120px]"></div>
      </div>

      <div className="layout-container relative z-10 flex flex-col justify-between min-h-[750px] py-10">
        
        {/* Header Section */}
        <div className="max-w-3xl relative z-20 mx-auto md:mx-0 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-8">
            <MapPin className="w-4 h-4 fill-slate-600" />
            <span className="uppercase tracking-wider">Coverage</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Restoring credit <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-secondary">across America.</span>
          </h2>
        </div>

        {/* Interactive Map Layer */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none mt-10 md:mt-0">
          <div className="relative w-full max-w-7xl aspect-[16/9] scale-110 md:scale-100 origin-center">
            
            {/* Solid Map Base with Gradient */}
            <div 
              className="absolute inset-0"
              style={{
                WebkitMaskImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Blank_US_Map_%28states_only%29.svg/1920px-Blank_US_Map_%28states_only%29.svg.png')`,
                maskImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Blank_US_Map_%28states_only%29.svg/1920px-Blank_US_Map_%28states_only%29.svg.png')`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                WebkitMaskSize: 'contain',
                maskSize: 'contain'
              }}
            >
               {/* Map Fill - Updated to Radial Gradient */}
               <div 
                className="absolute inset-0 nationwide-map-fill" 
                style={{
                  background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.18) 0%, transparent 80%)',
                  backgroundColor: '#f1f5f9' // slight base tint fallback
                }}
               ></div>
            </div>

            {/* Pins / Popups - Data Driven Look */}
            
            {/* New York - Score Increase */}
            <div className="absolute top-[22%] right-[21%] flex flex-col items-center animate-fade-in" style={{ animationDelay: '0s' }}>
                 <div className="map-pin bg-white px-3 py-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center gap-2 mb-2 transform hover:scale-110 transition-transform duration-300 group cursor-default">
                     <span className="pin-icon w-2 h-2 rounded-full bg-[#F0B429] animate-pulse"></span>
                     <span className="pin-label text-xs font-bold text-[#1a365d] whitespace-nowrap">NY <span className="text-[#1a365d] font-extrabold ml-1">+112pts</span></span>
                 </div>
                 <div className="w-0.5 h-6 bg-slate-300"></div>
                 <div className="w-2 h-2 bg-slate-400 rounded-full ring-4 ring-slate-100"></div>
            </div>

            {/* California - Approval */}
            <div className="absolute top-[40%] left-[8%] flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                 <div className="map-pin bg-white px-3 py-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center gap-2 mb-2 transform hover:scale-110 transition-transform duration-300 cursor-default">
                     <span className="pin-icon w-2 h-2 rounded-full bg-[#F0B429] animate-pulse"></span>
                     <span className="pin-label text-xs font-bold text-[#1a365d] whitespace-nowrap">CA <span className="text-[#1a365d] font-extrabold ml-1">Approved</span></span>
                 </div>
                 <div className="w-0.5 h-8 bg-slate-300"></div>
                 <div className="w-2 h-2 bg-slate-400 rounded-full ring-4 ring-slate-100"></div>
            </div>

             {/* Texas - Deletions */}
            <div className="absolute bottom-[20%] left-[45%] flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                 <div className="map-pin bg-white px-3 py-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center gap-2 mb-2 transform hover:scale-110 transition-transform duration-300 cursor-default">
                     <span className="pin-icon w-2 h-2 rounded-full bg-[#F0B429] animate-pulse"></span>
                     <span className="pin-label text-xs font-bold text-[#1a365d] whitespace-nowrap">TX <span className="text-[#1a365d] font-extrabold ml-1">5 Deletions</span></span>
                 </div>
                 <div className="w-0.5 h-4 bg-slate-300"></div>
                 <div className="w-2 h-2 bg-slate-400 rounded-full ring-4 ring-slate-100"></div>
            </div>
            
            {/* Florida - Score Increase */}
            <div className="absolute bottom-[8%] right-[23%] flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                 <div className="map-pin bg-white px-3 py-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center gap-2 mb-2 transform hover:scale-110 transition-transform duration-300 cursor-default">
                     <span className="pin-icon w-2 h-2 rounded-full bg-[#F0B429] animate-pulse"></span>
                     <span className="pin-label text-xs font-bold text-[#1a365d] whitespace-nowrap">FL <span className="text-[#1a365d] font-extrabold ml-1">+85pts</span></span>
                 </div>
                 <div className="w-0.5 h-4 bg-slate-300"></div>
                 <div className="w-2 h-2 bg-slate-400 rounded-full ring-4 ring-slate-100"></div>
            </div>

          </div>
        </div>

        {/* Stats Section Matching Screenshot Style */}
        <div className="mt-auto relative z-20 pt-24 md:pt-0">
           <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-12">
              
              {/* Button Left */}
              <div className="w-full xl:w-auto flex justify-center xl:block shrink-0">
                 <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-950 text-white rounded-full font-medium text-lg transition-all hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Check Your State
                  </a>
              </div>

              {/* Vertical Divider for Desktop */}
              <div className="hidden xl:block w-px h-24 bg-slate-200"></div>

              {/* Stats Grid */}
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 xl:gap-16 text-center xl:text-left items-center">
                  
                  {/* Stat 1 */}
                  <div className="flex flex-col items-center xl:items-start">
                      <div className="flex items-baseline leading-none">
                          <span className="text-6xl md:text-7xl font-bold text-dark tracking-tighter">50</span>
                          <span className="text-4xl md:text-5xl font-bold text-dark ml-1">+</span>
                      </div>
                      <div className="text-dark text-lg font-medium mt-3">States Covered</div>
                  </div>
                  
                  {/* Stat 2 */}
                  <div className="flex flex-col items-center xl:items-start relative">
                      {/* Mobile/Tablet Divider (Hidden on XL since we use flex gap) */}
                      <div className="hidden md:block xl:hidden absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200 -ml-4"></div>
                      
                      <div className="flex items-baseline leading-none">
                          <span className="text-6xl md:text-7xl font-bold text-dark tracking-tighter">12K</span>
                          <span className="text-4xl md:text-5xl font-bold text-dark ml-1">+</span>
                      </div>
                      <div className="text-dark text-lg font-medium mt-3">Families Helped</div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex flex-col items-center xl:items-start relative">
                       {/* Mobile/Tablet Divider */}
                      <div className="hidden md:block xl:hidden absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200 -ml-4"></div>

                      <div className="flex items-baseline leading-none">
                          <span className="text-6xl md:text-7xl font-bold text-dark tracking-tighter">$10M</span>
                          <span className="text-4xl md:text-5xl font-bold text-dark ml-1">+</span>
                      </div>
                      <div className="text-dark text-lg font-medium mt-3">Debt Removed</div>
                  </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};

export default NationwideReach;
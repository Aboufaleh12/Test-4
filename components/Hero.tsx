import React from 'react';
import { ArrowRight, Calendar, ShieldCheck, CheckCircle2, Star, TrendingUp, Zap } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#020617]">

            {/* Premium Background Architecture */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Layered Neon Blobs */}
                <div className="absolute -top-[10%] -left-[10%] w-[1000px] h-[1000px] bg-blue-600/20 rounded-full blur-[160px] animate-pulse opacity-50"></div>
                <div className="absolute top-[20%] -right-[10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[140px] opacity-40"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-sky-500/10 rounded-full blur-[140px] opacity-30"></div>

                {/* Animated Neon Globe / Abstract Motion */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-30 mix-blend-screen">
                    {/* Ring 1 - Vertical Slow Spin */}
                    <div className="absolute inset-0 border border-emerald-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    {/* Ring 2 - Horizontal Tilted Spin */}
                    <div className="absolute inset-10 border border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{ transform: 'rotateX(60deg)' }}></div>
                    {/* Ring 3 - Inner Core */}
                    <div className="absolute inset-32 border-2 border-indigo-400/20 rounded-full animate-[pulse_4s_ease-in-out_infinite] shadow-[0_0_50px_rgba(99,102,241,0.2)]"></div>
                    {/* Ring 4 - Cross Axis */}
                    <div className="absolute inset-0 border border-cyan-400/20 rounded-full animate-[spin_25s_linear_infinite]" style={{ transform: 'rotateY(45deg)' }}></div>
                </div>

                {/* Texture & Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#020617] to-transparent"></div>
            </div>

            <div className="layout-container relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                {/* Left Column: Content */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

                    {/* Trust Badge */}
                    {/* Trust Badge */}
                    <div className="animate-fade-in opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards] mb-6 md:mb-8">
                        <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl group cursor-default hover:bg-white/10 transition-colors">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <img key={i} src={`https://picsum.photos/32/32?random=${i + 50}`} className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-slate-900 ring-1 ring-white/10" alt="user" />
                                ))}
                            </div>
                            <div className="h-3 md:h-4 w-px bg-white/10 mx-1"></div>
                            <div className="flex items-center gap-1.5">
                                <div className="flex gap-0.5">
                                    <div className="p-1 bg-[#00b67a] rounded-[2px] mr-1">
                                        <Star className="w-3 h-3 text-white fill-white" />
                                    </div>
                                    <span className="text-white text-[11px] md:text-xs font-bold tracking-wide">Excellent</span>
                                </div>
                                <div className="flex gap-0.5 ml-1">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="bg-[#00b67a] p-0.5">
                                            <Star className="w-2 h-2 text-white fill-white" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-slate-400 text-[10px] ml-1">4.9/5</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[1.1] md:leading-[0.95] mb-6 md:mb-8 tracking-tight animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                        Clean Credit. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 drop-shadow-sm">Limitless Future.</span>
                    </h1>

                    {/* Mobile-Only Hero Image (Interleaved) */}
                    <div className="w-full relative mb-8 lg:hidden animate-fade-in opacity-0 [animation-delay:250ms] [animation-fill-mode:forwards]">
                        <div className="relative group perspective-1000">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/30 to-emerald-400/30 rounded-[2rem] blur-lg opacity-70"></div>
                            <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl bg-slate-900 aspect-[4/3] border border-white/10">
                                <img
                                    src="/assets/hero-family.jpg"
                                    alt="Professional family success"
                                    className="w-full h-full object-cover"
                                />
                                {/* Mobile Credit Score Badge Overlay */}
                                <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3">
                                    <div className="relative w-10 h-10 flex items-center justify-center">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                            <circle className="text-white/10" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                                            <circle className="text-emerald-500" strokeWidth="8" strokeDasharray="251" strokeDashoffset="50" strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                                        </svg>
                                        <span className="absolute text-sm font-black text-white">710</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-white">Score Up</span>
                                        <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Excellent</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-slate-400 text-base md:text-xl font-medium leading-relaxed mb-8 md:mb-10 max-w-xl animate-fade-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards] text-balance">
                        We leverage advanced consumer laws to delete negative items and build positive history. Most clients see results in as little as 35 days.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto mb-10 md:mb-12 animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                        <a
                            href="tel:+19999999999"
                            className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-primary hover:bg-primaryDark text-white rounded-2xl font-bold text-base md:text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1.5 flex items-center justify-center gap-2 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Start My Analysis</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[marquee_2s_linear_infinite]"></div>
                        </a>
                        <a
                            href="https://calendly.com/aboufaleh3you/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-semibold text-base md:text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:-translate-y-1.5"
                        >
                            <Calendar className="w-5 h-5 text-blue-400" />
                            Book Consultation
                        </a>
                    </div>

                    {/* Open-Air Trust Row */}
                    {/* Technical Trust Row */}
                    <div className="w-full border-t border-white/5 pt-8 animate-fade-in opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">

                            {/* Item 1 */}
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-white text-sm md:text-base font-bold tracking-tight">No Result, No Fee</span>
                                    <div className="h-4 w-px bg-white/10"></div>
                                    <span className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">Guarantee</span>
                                </div>
                            </div>

                            {/* Center Dot (Desktop) */}
                            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/10"></div>

                            {/* Item 2 */}
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-white text-sm md:text-base font-bold tracking-tight">FCRA Compliant</span>
                                    <div className="h-4 w-px bg-white/10"></div>
                                    <span className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">Legal Analysis</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Column: High-End Visuals */}
                <div className="lg:col-span-5 relative hidden lg:block animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                    <div className="relative z-20 w-full px-4 md:px-0">

                        {/* Main Image Container */}
                        <div className="relative group perspective-1000">
                            {/* Glowing Backlight */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 to-emerald-400/30 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

                            {/* Main Image with Gradient Border */}
                            <div className="relative p-[1px] bg-gradient-to-br from-white/20 to-transparent rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 md:hover:rotate-y-2 md:hover:rotate-x-1">
                                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900">
                                    <img
                                        src="/assets/hero-family.jpg"
                                        alt="Professional success"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                    {/* Modern Scrim Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                                    {/* Content Overlays */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                                        <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                                            "My score went from 540 to 710 in 3 months. Truly life changing."
                                        </p>
                                        <p className="text-slate-400 text-xs md:text-sm mt-2">— Robert D., New Homeowner</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Micro-UI 2: Credit Score Gauge */}
                        <div className="absolute -left-4 md:-left-12 bottom-[10%] md:bottom-[20%] bg-white/10 backdrop-blur-2xl border border-white/10 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-[float_6s_ease-in-out_infinite_1s] z-30 scale-90 md:scale-100 origin-bottom-left">
                            <div className="flex flex-col items-center gap-1">
                                <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                        <circle className="text-white/10" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                                        <circle className="text-emerald-500" strokeWidth="8" strokeDasharray="251" strokeDashoffset="50" strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                                    </svg>
                                    <span className="absolute text-lg md:text-xl font-black text-white">710</span>
                                </div>
                                <span className="text-[8px] md:text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mt-2">Excellent</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
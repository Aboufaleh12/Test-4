import React from 'react';
import { ArrowRight, Calendar, ShieldCheck, CheckCircle2, Star, TrendingUp, Zap } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">

            {/* Premium Background Architecture */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Layered Neon Blobs */}
                <div className="absolute -top-[10%] -left-[10%] w-[1000px] h-[1000px] bg-blue-600/20 rounded-full blur-[160px] animate-pulse opacity-50"></div>
                <div className="absolute top-[20%] -right-[10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[140px] opacity-40"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-sky-500/10 rounded-full blur-[140px] opacity-30"></div>

                {/* Texture & Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#020617] to-transparent"></div>
            </div>

            <div className="layout-container relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Left Column: Content */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

                    {/* Trust Badge */}
                    <div className="animate-fade-in opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards] mb-6">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl group cursor-default hover:bg-white/10 transition-colors">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <img key={i} src={`https://picsum.photos/32/32?random=${i + 50}`} className="w-6 h-6 rounded-full border-2 border-slate-900 ring-1 ring-white/10" alt="user" />
                                ))}
                            </div>
                            <div className="h-4 w-px bg-white/10 mx-1"></div>
                            <div className="flex items-center gap-1.5">
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <span className="text-slate-300 text-[11px] font-bold tracking-widest uppercase">4.9/5 TrustScore</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[0.95] mb-8 tracking-tight animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                        Clean Credit. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 drop-shadow-sm">Limitless Future.</span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-xl animate-fade-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards] text-balance">
                        We leverage advanced consumer laws to delete negative items and build positive history. Most clients see results in as little as 35 days.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12 animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primaryDark text-white rounded-2xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1.5 flex items-center justify-center gap-2 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Start My Analysis</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[marquee_2s_linear_infinite]"></div>
                        </a>
                        <a
                            href="tel:+19999999999"
                            className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-semibold text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:-translate-y-1.5"
                        >
                            <Calendar className="w-5 h-5 text-blue-400" />
                            Book Consultation
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-8 w-full animate-fade-in opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
                        <div className="flex items-center gap-2 group">
                            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            </div>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">No Results, No Fee</span>
                        </div>
                        <div className="flex items-center gap-2 group">
                            <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                <ShieldCheck className="w-4 h-4 text-blue-500" />
                            </div>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">FCRA Compliant</span>
                        </div>
                        <div className="flex items-center gap-2 group">
                            <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                                <Zap className="w-4 h-4 text-amber-500" />
                            </div>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Fast Disputes</span>
                        </div>
                        <div className="flex items-center gap-2 group">
                            <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                                <TrendingUp className="w-4 h-4 text-purple-500" />
                            </div>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Score Tracking</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: High-End Visuals */}
                <div className="lg:col-span-5 relative hidden lg:block animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                    <div className="relative z-20 w-full">

                        {/* Main Image Container */}
                        <div className="relative group perspective-1000">
                            {/* Glowing Backlight */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 to-emerald-400/30 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

                            {/* Main Image with Gradient Border */}
                            <div className="relative p-[1px] bg-gradient-to-br from-white/20 to-transparent rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-1">
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-900">
                                    <img
                                        src="/assets/hero-family.jpg"
                                        alt="Professional success"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                    {/* Modern Scrim Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                                    {/* Content Overlays */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8">

                                        <p className="text-2xl font-bold text-white leading-tight">
                                            "My score went from 540 to 710 in 3 months. Truly life changing."
                                        </p>
                                        <p className="text-slate-400 text-sm mt-2">— Robert D., New Homeowner</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Micro-UI 2: Credit Score Gauge */}
                        <div className="absolute -left-12 bottom-[20%] bg-white/10 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-[float_6s_ease-in-out_infinite_1s] z-30">
                            <div className="flex flex-col items-center gap-1">
                                <div className="relative w-16 h-16 flex items-center justify-center">
                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                        <circle className="text-white/10" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                                        <circle className="text-emerald-500" strokeWidth="8" strokeDasharray="251" strokeDashoffset="50" strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                                    </svg>
                                    <span className="absolute text-xl font-black text-white">752</span>
                                </div>
                                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mt-2">Excellent</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
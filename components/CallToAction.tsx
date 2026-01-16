import React from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
        {/* Background Gradient & Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-primaryDark"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        
        {/* Decorative Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[100px] -left-[100px] w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-[100px] -right-[100px] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] mix-blend-overlay"></div>
        </div>

        <div className="layout-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-50 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
                   <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                   Limited Time Offer
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                    Stop letting bad credit <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">control your life.</span>
                </h2>
                
                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                    Join thousands of Americans who have successfully deleted negative items and reclaimed their financial freedom with ClearPath.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <a 
                        href="#contact" 
                        className="w-full sm:w-auto px-10 py-5 bg-white text-primaryDark font-bold text-lg rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        Get My Free Analysis
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                        href="tel:+19999999999" 
                        className="w-full sm:w-auto px-10 py-5 bg-primaryDark/30 border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        <Phone className="w-5 h-5" />
                        (999) 999-9999
                    </a>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-blue-200/80 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <span>No Upfront Fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <span>Cancel Anytime</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default CallToAction;
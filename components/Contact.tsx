import React from 'react';
import { CheckCircle2, Lock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';


const Contact: React.FC = () => {

  return (
    <section id="contact" className="section-spacing bg-white relative overflow-hidden">

      {/* Background Decor - Subtle & Professional */}
      <div className="absolute inset-0 bg-slate-50/80"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="layout-container relative z-10">
        <div className="max-w-2xl mx-auto">

          {/* High-Converting Lead Form */}
          <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10 border border-slate-100 relative overflow-hidden">

            {/* Form Header */}
            <div className="text-center mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free Analysis</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Your Free Analysis</h3>
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-slate-500">No obligation. No impact to score.</span>
              </div>
            </div>

            <form
              className="space-y-5"
              action="https://formsubmit.co/aboufaleh10@gmail.com"
              method="POST"
            >
              {/* Special FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Lead: Free Analysis Request" />
              <input type="hidden" name="_autoresponse" value="Thank you for contacting ClearPath. We have received your request and will be in touch shortly to schedule your free analysis." />

              {/* Honeypot for spam protection */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">First Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Michael"
                  autoComplete="given-name"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-medium text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Email Field - Type 'email' for mobile keyboard */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="michael@example.com"
                  autoComplete="email"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-medium text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Phone Field - Type 'tel' for mobile numpad */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(555) 123-4567"
                  autoComplete="tel"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-medium text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your credit goals..."
                  rows={4}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-medium text-slate-900 placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              {/* Privacy Notice Micro-copy */}
              <div className="flex items-start gap-2 text-xs text-slate-400 px-1">
                <Lock className="w-3 h-3 mt-0.5 shrink-0" />
                <p>Your information is 256-bit SSL encrypted. We hate spam and will never sell your data.</p>
              </div>

              {/* Primary CTA */}
              <button
                type="submit"
                className="w-full group relative bg-primary hover:bg-primaryDark text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get My Free Credit Review
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>


            </form>

            {/* Trust Badge Below CTA */}
            <div className="mt-6 flex items-center justify-center gap-6 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-1.5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                <span className="text-xs font-bold text-slate-600">Bank-Level Security</span>
              </div>
              <div className="w-px h-4 bg-slate-200"></div>
              <div className="flex items-center gap-1.5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <CheckCircle2 className="w-4 h-4 text-slate-600" />
                <span className="text-xs font-bold text-slate-600">No Upfront Fees</span>
              </div>
            </div>

          </div>

          {/* CROA Compliance Disclaimer */}
          <p className="text-[10px] text-slate-400 text-center mt-4 max-w-sm mx-auto leading-normal">
            Disclaimer: ClearPath Credit Solutions is a credit repair organization. We cannot guarantee a specific result or score increase, as every credit profile is unique. All services are performed in compliance with the Credit Repair Organizations Act (CROA).
          </p>

        </div>
      </div>


    </section>
  );
};

export default Contact;
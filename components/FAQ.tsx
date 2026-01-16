import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-spacing bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-blue-50 rounded-full blur-[80px] opacity-60"></div>
        <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-amber-50 rounded-full blur-[80px] opacity-60"></div>
      </div>

      <div className="layout-container max-w-3xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Get Support</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Frequently asked <span className="text-primary">questions</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            Can't find the answer you're looking for? Reach out to our support team directly.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group rounded-2xl transition-all duration-300 border ${isOpen
                    ? 'bg-white border-blue-500/30 shadow-[0_10px_40px_-10px_rgba(37,99,235,0.1)]'
                    : 'bg-[#F8FAFC] border-transparent hover:bg-white hover:border-slate-200'
                  }`}
              >
                <button
                  className="w-full flex items-start text-left justify-between p-6 md:p-8 focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${isOpen
                      ? 'bg-primary border-primary text-white rotate-180'
                      : 'bg-white border-slate-200 text-slate-400 group-hover:border-primary group-hover:text-primary'
                    }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
                >
                  <div className="overflow-hidden px-6 md:px-8">
                    <p className="text-slate-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
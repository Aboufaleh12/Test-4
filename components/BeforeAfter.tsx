import React from 'react';
import { ArrowUp, Calendar, FileCheck, Info } from 'lucide-react';

const cases = [
  {
    initials: "JD",
    profile: "Medical Debt & Collections",
    beforeScore: 542,
    afterScore: 685,
    increase: 143,
    timeline: "4 Months",
    actions: [
      "Removed 3 medical collections",
      "Corrected personal profile errors",
      "Negotiated 1 charge-off deletion"
    ]
  },
  {
    initials: "SAR",
    profile: "Late Payments & High Utilization",
    beforeScore: 610,
    afterScore: 725,
    increase: 115,
    timeline: "6 Months",
    actions: [
      "Disputed 4 late payment marks",
      "Optimized credit card utilization",
      "Added positive rental history"
    ]
  },
  {
    initials: "MK",
    profile: "Identity Theft Recovery",
    beforeScore: 498,
    afterScore: 650,
    increase: 152,
    timeline: "5 Months",
    actions: [
      "Fraudulent accounts removed",
      "Inquiry clusters deleted",
      "Credit freeze guidance provided"
    ]
  }
];

const BeforeAfter: React.FC = () => {
  return (
    <section className="section-spacing bg-slate-50 relative overflow-hidden">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-primaryDark text-sm font-semibold mb-6">
             <FileCheck className="w-4 h-4" />
             <span className="uppercase tracking-wider">Proven Results</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 tracking-tight">
            Real Stories, Verified Results.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-regular">
            Every credit profile is unique. While we cannot guarantee specific outcomes, here is what we have achieved for clients with challenges similar to yours.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
                <div>
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm mb-2">
                    {item.initials}
                  </div>
                  <p className="text-sm font-bold text-slate-800">{item.profile}</p>
                </div>
                <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                  <Calendar className="w-3 h-3" /> {item.timeline}
                </div>
              </div>

              {/* Score Visuals */}
              <div className="flex items-end justify-between mb-6 bg-slate-50 p-4 rounded-2xl relative overflow-hidden">
                 {/* Before */}
                 <div className="text-center relative z-10">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Before</span>
                    <span className="text-2xl font-bold text-slate-500">{item.beforeScore}</span>
                 </div>

                 {/* Arrow */}
                 <div className="mb-2 relative z-10">
                    <ArrowUp className="w-6 h-6 text-emerald-500 animate-bounce" />
                 </div>

                 {/* After */}
                 <div className="text-center relative z-10">
                    <span className="block text-xs uppercase tracking-wider text-emerald-600 font-semibold mb-1">After</span>
                    <span className="text-3xl font-extrabold text-emerald-600">{item.afterScore}</span>
                 </div>

                 {/* Background Progress Bar (Decorative) */}
                 <div className="absolute bottom-0 left-0 h-1 bg-slate-200 w-full"></div>
                 <div 
                    className="absolute bottom-0 left-0 h-1 bg-emerald-500 transition-all duration-1000"
                    style={{ width: `${(item.increase / 200) * 100 + 20}%` }}
                 ></div>
              </div>

              {/* Action Log */}
              <div className="flex-grow">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Improvements Made</p>
                <ul className="space-y-3">
                  {item.actions.map((action, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result Badge */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                 <span className="text-sm font-medium text-slate-500">Total Increase</span>
                 <span className="text-lg font-bold text-emerald-600">+{item.increase} Points</span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft CTA & Disclaimer */}
        <div className="flex flex-col items-center">
            <a href="tel:+19999999999" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primaryDark transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 mb-8">
                See What Results Are Possible for You
            </a>
            
            <div className="flex gap-2 max-w-2xl mx-auto text-left bg-white/50 p-4 rounded-xl border border-slate-100">
                <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-relaxed text-balance">
                    <strong>Compliance Disclaimer:</strong> The results shown above represent specific client experiences and are not a guarantee of future performance. Credit repair results vary based on individual credit history, the type of negative items on your report, and your adherence to our financial guidance. We do not promise to remove accurate, verifiable information.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfter;
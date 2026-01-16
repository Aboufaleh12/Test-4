import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, AlertCircle, RefreshCw, DollarSign, ArrowRight, Info } from 'lucide-react';

const CreditSimulator: React.FC = () => {
  // State for inputs
  const [currentScore, setCurrentScore] = useState(640);
  const [utilization, setUtilization] = useState(45);
  const [paymentHistory, setPaymentHistory] = useState(98);
  const [income, setIncome] = useState(60000);
  const [totalDebt, setTotalDebt] = useState(15000);
  
  // State for results
  const [projectedScore, setProjectedScore] = useState(640);
  const [scoreChange, setScoreChange] = useState(0);
  const [dti, setDti] = useState(0);
  const [approvalOdds, setApprovalOdds] = useState('Low');

  useEffect(() => {
    // 1. Calculate Score Impact
    let score = currentScore;

    // Utilization Impact (30% is neutral baseline for this sim)
    const utilizationImpact = (30 - utilization) * 1.5; 
    
    // Payment History Impact
    let historyImpact = 0;
    if (paymentHistory === 100) historyImpact = 20;
    else if (paymentHistory >= 99) historyImpact = 10;
    else if (paymentHistory >= 98) historyImpact = 0;
    else historyImpact = (paymentHistory - 98) * 15;

    let rawProjected = Math.round(score + utilizationImpact + historyImpact);
    rawProjected = Math.max(300, Math.min(850, rawProjected));

    setProjectedScore(rawProjected);
    setScoreChange(rawProjected - currentScore);

    // 2. Calculate DTI
    const monthlyIncome = income / 12;
    const estimatedMonthlyDebt = totalDebt * 0.03; 
    const calculatedDti = monthlyIncome > 0 ? (estimatedMonthlyDebt / monthlyIncome) * 100 : 100;
    setDti(Math.round(calculatedDti));

    // 3. Determine Approval Odds
    if (rawProjected >= 720 && calculatedDti < 36) setApprovalOdds('Excellent');
    else if (rawProjected >= 680 && calculatedDti < 43) setApprovalOdds('Good');
    else if (rawProjected >= 620 && calculatedDti < 50) setApprovalOdds('Fair');
    else setApprovalOdds('Low');

  }, [currentScore, utilization, paymentHistory, income, totalDebt]);

  const getScoreColor = (score: number) => {
    if (score >= 720) return 'text-emerald-600';
    if (score >= 660) return 'text-sky-400';
    return 'text-orange-400';
  };

  const getRingColor = (score: number) => {
     if (score >= 720) return 'stroke-emerald-500';
     if (score >= 660) return 'stroke-sky-500';
     return 'stroke-orange-500';
  };

  return (
    <section className="section-spacing bg-[#0B1121] text-white relative overflow-hidden border-t border-white/5">
      {/* Background Ambience matches Hero */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px]"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="layout-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-6">
             <Calculator className="w-3.5 h-3.5" />
             <span>Simulator Tool</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Visualize the impact of better credit.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
             While every credit profile is unique, understanding how utilization and payment history affect your standing is the first step toward improvement. Use this educational tool to explore scenarios.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
             <h3 className="text-lg font-semibold mb-8 flex items-center gap-2 text-white">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Simulation Variables
             </h3>

             <div className="space-y-8">
                
                {/* Current Score Slider */}
                <div>
                   <div className="flex justify-between mb-4">
                      <label className="text-slate-300 font-medium text-sm">Starting Credit Score</label>
                      <span className="font-bold text-white bg-white/10 px-3 py-1 rounded-lg text-sm">{currentScore}</span>
                   </div>
                   <input 
                      type="range" 
                      min="300" 
                      max="850" 
                      value={currentScore} 
                      onChange={(e) => setCurrentScore(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                   />
                   <div className="flex justify-between text-xs text-slate-500 mt-2">
                      <span>300 (Needs Work)</span>
                      <span>850 (Excellent)</span>
                   </div>
                </div>

                {/* Utilization Slider */}
                <div>
                   <div className="flex justify-between mb-4">
                      <div>
                          <label className="text-slate-300 font-medium text-sm block">Credit Utilization</label>
                          <span className="text-xs text-slate-500">High Impact Factor (30%)</span>
                      </div>
                      <span className={`font-bold px-3 py-1 rounded-lg text-sm ${utilization > 30 ? 'bg-orange-500/20 text-orange-300' : 'bg-blue-500/20 text-blue-300'}`}>
                        {utilization}%
                      </span>
                   </div>
                   <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={utilization} 
                      onChange={(e) => setUtilization(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                   />
                   <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> 
                      Aim for below 30% utilization for the best results.
                   </p>
                </div>

                {/* Payment History Slider */}
                <div>
                   <div className="flex justify-between mb-4">
                      <div>
                          <label className="text-slate-300 font-medium text-sm block">On-Time Payments</label>
                          <span className="text-xs text-slate-500">Critical Impact Factor (35%)</span>
                      </div>
                      <span className={`font-bold px-3 py-1 rounded-lg text-sm ${paymentHistory < 99 ? 'bg-orange-500/20 text-orange-300' : 'bg-blue-500/20 text-blue-300'}`}>
                        {paymentHistory}%
                      </span>
                   </div>
                   <input 
                      type="range" 
                      min="80" 
                      max="100"
                      step="1"
                      value={paymentHistory} 
                      onChange={(e) => setPaymentHistory(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                   />
                </div>

                {/* Financial Inputs Grid */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                   <div>
                      <label className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2 block">Annual Income</label>
                      <div className="relative">
                         <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                         <input 
                            type="number" 
                            value={income}
                            onChange={(e) => setIncome(Number(e.target.value))}
                            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-2.5 pl-9 pr-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                         />
                      </div>
                   </div>
                   <div>
                      <label className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2 block">Total Debt</label>
                      <div className="relative">
                         <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                         <input 
                            type="number" 
                            value={totalDebt}
                            onChange={(e) => setTotalDebt(Number(e.target.value))}
                            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-2.5 pl-9 pr-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                         />
                      </div>
                   </div>
                </div>

             </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
             
             {/* Score Card */}
             <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden text-center">
                <div className="relative z-10">
                   <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">Educational Estimate</h4>
                   
                   {/* Gauge Visualization */}
                   <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                         {/* Track */}
                         <circle className="text-slate-800" strokeWidth="6" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
                         {/* Progress */}
                         <circle 
                            className={`${getRingColor(projectedScore)} transition-all duration-1000 ease-out`} 
                            strokeWidth="6" 
                            strokeDasharray={264} 
                            strokeDashoffset={264 - (264 * ((projectedScore - 300) / 550))} 
                            strokeLinecap="round" 
                            stroke="currentColor" 
                            fill="transparent" 
                            r="42" 
                            cx="50" 
                            cy="50" 
                         />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                         <span className={`text-5xl font-bold ${getScoreColor(projectedScore)}`}>
                            {projectedScore}
                         </span>
                         <span className={`text-sm font-medium mt-1 ${scoreChange >= 0 ? 'text-emerald-600' : 'text-orange-400'}`}>
                            {scoreChange > 0 ? '+' : ''}{scoreChange} pts
                         </span>
                      </div>
                   </div>

                   <div className="mb-6">
                      <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold border ${projectedScore >= 720 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600' : projectedScore >= 660 ? 'bg-sky-500/10 border-sky-500/20 text-sky-400' : 'bg-orange-500/10 border-orange-500/20 text-orange-400'}`}>
                         {projectedScore >= 720 ? 'Excellent Rating' : projectedScore >= 660 ? 'Good Rating' : projectedScore >= 600 ? 'Fair Rating' : 'Needs Improvement'}
                      </div>
                   </div>

                   <button 
                    onClick={() => {
                        setCurrentScore(640);
                        setUtilization(45);
                        setPaymentHistory(98);
                        setIncome(60000);
                        setTotalDebt(15000);
                    }}
                    className="flex items-center gap-2 mx-auto text-slate-500 hover:text-white transition-colors text-xs font-medium"
                   >
                      <RefreshCw className="w-3.5 h-3.5" /> Reset Simulator
                   </button>
                </div>
             </div>

             {/* Soft CTA */}
             <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-6 text-center">
                <h4 className="font-bold text-white mb-2">Ready for a real analysis?</h4>
                <p className="text-sm text-blue-200/70 mb-4">Get a professional, line-by-line audit of your actual 3-bureau credit report.</p>
                <a href="tel:+19999999999" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-500 transition-colors text-sm group">
                    Request Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
             </div>

          </div>

        </div>
        
        {/* Compliance Footer */}
        <div className="mt-12 flex justify-center">
            <div className="flex gap-3 max-w-3xl text-left p-4 rounded-xl bg-white/5 border border-white/5">
                <Info className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                    <strong>Educational Use Only:</strong> This simulator uses general scoring principles for demonstration purposes. It does not represent a specific credit bureau's algorithm (such as FICO® or VantageScore®) and cannot predict exact score changes. Your actual results will depend on your complete credit history, the complexity of disputes, and creditor responses.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default CreditSimulator;
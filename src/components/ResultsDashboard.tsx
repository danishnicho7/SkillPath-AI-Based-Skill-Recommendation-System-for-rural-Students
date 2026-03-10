'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  LineChart, TrendingUp, CheckCircle, Landmark, 
  MapPin, IndianRupee, BookOpen, GraduationCap,
  ExternalLink, ChevronRight, Activity, Zap, BarChart3, AlertCircle, Sparkles 
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface FormData {
  interest: string;
  skills: string;
  education: string;
  marks: string;
  state: string;
  firstGraduate: string;
}

export default function ResultsDashboard({ formData }: { formData: FormData }) {
  const [careers, setCareers] = useState<any[]>([]);
  
  // V6 Strict 7-Section AI Hooks
  const [fieldExplanation, setFieldExplanation] = useState<string | null>(null);
  const [relatedExams, setRelatedExams] = useState<any[]>([]);
  const [salaryGrowthTimeline, setSalaryGrowthTimeline] = useState<any[]>([]);
  const [cutoffTrend, setCutoffTrend] = useState<any>(null);
  const [futureDemand, setFutureDemand] = useState<string | null>(null);
  const [skillImprovement, setSkillImprovement] = useState<string[]>([]);
  const [recommendedApps, setRecommendedApps] = useState<string[]>([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const carRes = await fetch('/api/recommend-careers', {
          method: 'POST',
          body: JSON.stringify({ interest: formData.interest, skills: formData.skills })
        });

        const carData = await carRes.json();

        // V6 Extraction
        setCareers(carData.careers || []);
        setFieldExplanation(carData.field_explanation || null);
        setRelatedExams(carData.related_exams || []);
        setSalaryGrowthTimeline(carData.salary_growth_timeline || []);
        setCutoffTrend(carData.cutoff_trend_analysis || null);
        setFutureDemand(carData.future_job_demand || null);
        setSkillImprovement(carData.skill_improvement || []);
        setRecommendedApps(carData.recommended_apps || []);
        
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [formData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-10 h-10 rounded-full border-4 border-[#00FFFF]/30 border-t-[#8A2BE2] animate-spin" />
      </div>
    );
  }

  // Linear progression chart for cutoffs if applicable
  let cutoffChartData = { labels: [] as string[], datasets: [] as any[] };
  if (cutoffTrend && cutoffTrend.data) {
    cutoffChartData = {
      labels: cutoffTrend.data.map((d: any) => d.year),
      datasets: [
        {
          label: 'Historical & Projected Cutoff',
          data: cutoffTrend.data.map((d: any) => parseFloat(d.cutoff.split('/')[0]) || parseFloat(d.cutoff.replace('%', ''))),
          backgroundColor: 'rgba(255, 0, 127, 0.1)',
          borderColor: '#FF007F',
          tension: 0.3,
          fill: true
        }
      ]
    };
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-12 pb-20 font-sans">
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-b border-white/10 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-8 h-8 text-[#00FFFF]" />
          <h2 className="text-3xl text-white font-bold">SkillPath AI Analysis</h2>
        </div>
        <p className="text-gray-400">Based on your interest profile: <span className="text-[#FF007F] font-semibold">"{formData.interest}"</span></p>
      </motion.div>

      {/* 1️⃣ FIELD ANALYSIS */}
      {fieldExplanation && (
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="flex items-center gap-2 text-[#00FFFF] border-b border-[#00FFFF]/20 pb-2">
            <span className="bg-[#00FFFF]/20 text-[#00FFFF] text-xs font-bold px-2 py-0.5 rounded">1</span>
            <h3 className="text-xl font-semibold uppercase tracking-wider">FIELD ANALYSIS</h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed antialiased">
            {fieldExplanation}
          </p>
        </motion.section>
      )}

      {/* 2️⃣ RELATED EXAMS */}
      {relatedExams.length > 0 && (
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
          <div className="flex items-center gap-2 text-[#8A2BE2] border-b border-[#8A2BE2]/20 pb-2">
            <span className="bg-[#8A2BE2]/20 text-[#8A2BE2] text-xs font-bold px-2 py-0.5 rounded">2</span>
            <h3 className="text-xl font-semibold uppercase tracking-wider">RELATED EXAMS</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedExams.map((group: any, idx: number) => (
              <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/10">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#FF007F]" /> {group.category}
                </h4>
                <ul className="space-y-2">
                  {group.list.map((exam: string, eIdx: number) => (
                    <li key={eIdx} className="flex gap-2 text-gray-400 text-sm">
                      <ChevronRight className="w-4 h-4 text-[#00FFFF] shrink-0" />
                      <span>{exam}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* 3️⃣ CAREER SUGGESTIONS */}
      <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
        <div className="flex items-center gap-2 text-[#FF007F] border-b border-[#FF007F]/20 pb-2">
          <span className="bg-[#FF007F]/20 text-[#FF007F] text-xs font-bold px-2 py-0.5 rounded">3</span>
          <h3 className="text-xl font-semibold uppercase tracking-wider">CAREER SUGGESTIONS ({careers.length} Minimum)</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {careers.map((career, idx) => (
            <div key={idx} className="bg-[#111318] border border-white/5 hover:border-[#FF007F]/30 transition-colors p-6 rounded-2xl flex flex-col md:flex-row gap-6">
               <div className="flex-1 space-y-3">
                 <h4 className="text-2xl font-bold text-white">{career.title}</h4>
                 <p className="text-gray-400 text-sm border-l-2 border-[#8A2BE2] pl-3 leading-relaxed">
                   {career.description}
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div><span className="text-[11px] text-gray-500 uppercase font-bold block mb-1">Eligibility</span> <span className="text-[#00FFFF] text-sm font-medium">{career.eligibility || career.education_req}</span></div>
                    <div><span className="text-[11px] text-gray-500 uppercase font-bold block mb-1">Exam Required</span> <span className="text-[#FF007F] text-sm font-medium">{career.exam_required || career.exams?.[0] || 'None'}</span></div>
                    <div><span className="text-[11px] text-gray-500 uppercase font-bold block mb-1">Salary Range</span> <span className="text-green-400 text-sm font-medium">{career.salary_timeline?.entry} - {career.salary_timeline?.senior}</span></div>
                    <div><span className="text-[11px] text-gray-500 uppercase font-bold block mb-1">Competition Level</span> <span className={`text-sm font-medium ${career.competition_level?.includes('High') ? 'text-red-400' : 'text-green-400'}`}>{career.competition_level}</span></div>
                 </div>
                 <div className="pt-2">
                    <span className="text-[11px] text-gray-500 uppercase font-bold block mb-1">Promotion Path</span>
                    <span className="text-gray-300 text-sm">{career.promotion_path?.join(' ➔ ') || 'Standard progression based on performance'}</span>
                 </div>
                 <div className="pt-2">
                    <span className="text-[11px] text-gray-500 uppercase font-bold block mb-1">Future Demand</span>
                    <span className="text-gray-300 text-sm">{career.future_demand_desc || 'Stable market growth expected'}</span>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4️⃣ SALARY GROWTH TIMELINE */}
      {salaryGrowthTimeline.length > 0 && (
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-4">
          <div className="flex items-center gap-2 text-green-400 border-b border-green-500/20 pb-2">
            <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-0.5 rounded">4</span>
            <h3 className="text-xl font-semibold uppercase tracking-wider">SALARY GROWTH TIMELINE</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salaryGrowthTimeline.map((item: any, idx: number) => (
              <div key={idx} className="bg-gradient-to-br from-green-500/10 to-transparent p-5 rounded-xl border border-green-500/20 text-center">
                <div className="text-xs text-gray-400 uppercase font-bold mb-2 tracking-widest">{item.period}</div>
                <div className="text-2xl text-green-400 font-black">{item.salary}</div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* 5️⃣ CUT OFF TREND ANALYSIS */}
      {cutoffTrend && cutoffTrend.data && (
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="space-y-6">
          <div className="flex items-center gap-2 text-[#FF007F] border-b border-[#FF007F]/20 pb-2">
            <span className="bg-[#FF007F]/20 text-[#FF007F] text-xs font-bold px-2 py-0.5 rounded">5</span>
            <h3 className="text-xl font-semibold uppercase tracking-wider">CUT OFF TREND ANALYSIS</h3>
          </div>
          
          <div className="bg-[#111318] p-6 rounded-2xl border border-white/10">
            <h4 className="text-white font-semibold mb-4 text-center">Simulated Data: {cutoffTrend.exam}</h4>
            <div className="h-48 w-full mb-6 relative">
               <Line data={cutoffChartData} options={{ maintainAspectRatio: false, scales: { x: { grid: { color: 'rgba(255,255,255,0.05)' } }, y: { grid: { color: 'rgba(255,255,255,0.05)' } } } }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center border-t border-white/10 pt-4 mb-4">
              {cutoffTrend.data.map((d: any, idx: number) => (
                <div key={idx} className="bg-white/5 p-2 rounded">
                  <div className="text-[10px] text-gray-500 font-bold uppercase">{d.year}</div>
                  <div className="text-[#e6ccff] font-semibold text-sm mt-1">{d.cutoff}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 italic text-center max-w-2xl mx-auto">
              "{cutoffTrend.explanation}"
            </p>
          </div>
        </motion.section>
      )}

      {/* 6️⃣ FUTURE JOB DEMAND */}
      {futureDemand && (
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="space-y-4">
          <div className="flex items-center gap-2 text-[#00FFFF] border-b border-[#00FFFF]/20 pb-2">
            <span className="bg-[#00FFFF]/20 text-[#00FFFF] text-xs font-bold px-2 py-0.5 rounded">6</span>
            <h3 className="text-xl font-semibold uppercase tracking-wider">FUTURE JOB DEMAND</h3>
          </div>
          <div className="bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-[#00FFFF] p-6 rounded-r-xl">
             <p className="text-gray-200 text-lg leading-relaxed">
               {futureDemand}
             </p>
          </div>
        </motion.section>
      )}

      {/* 7️⃣ SKILL IMPROVEMENT SUGGESTIONS */}
      {(skillImprovement.length > 0 || recommendedApps.length > 0) && (
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="space-y-6">
          <div className="flex items-center gap-2 text-[#8A2BE2] border-b border-[#8A2BE2]/20 pb-2">
            <span className="bg-[#8A2BE2]/20 text-[#8A2BE2] text-xs font-bold px-2 py-0.5 rounded">7</span>
            <h3 className="text-xl font-semibold uppercase tracking-wider">SKILL IMPROVEMENT SUGGESTIONS</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillImprovement.length > 0 && (
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="text-white font-bold flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-yellow-400" /> Actionable Tips
                </h4>
                <ul className="space-y-3">
                  {skillImprovement.map((tip, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300 items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {recommendedApps.length > 0 && (
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="text-white font-bold flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-[#FF007F]" /> Recommended Apps & Platforms
                </h4>
                <div className="flex flex-wrap gap-3">
                  {recommendedApps.map((app, idx) => (
                    <span key={idx} className="bg-[#111318] text-gray-200 border border-[#8A2BE2]/30 px-4 py-2 rounded-lg font-medium shadow-sm flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#8A2BE2]" /> {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>
      )}

    </div>
  );
}

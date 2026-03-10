'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Rocket, Sparkles, BookOpen, MapPin, GraduationCap, IndianRupee } from 'lucide-react';
import ResultsDashboard from '@/components/ResultsDashboard';

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    interest: '',
    skills: '',
    education: 'HSC (12th)',
    marks: '',
    state: '',
    firstGraduate: 'No'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <main className="min-h-screen text-foreground relative overflow-hidden pb-20">
      {/* Background glowing orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#FF007F] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#00FFFF] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-96 h-96 bg-[#8A2BE2] rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 pt-20 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6 text-gray-300"
          >
            <Sparkles className="w-4 h-4 text-[#00FFFF]" />
            <span>AI Powered Career Guidance for Rural Students</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] via-[#8A2BE2] to-[#00FFFF] glow-purple-text">Path</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Let our intelligent platform analyze your skills and background to recommend the perfect career, scholarships, and learning roadmaps.
          </p>
        </motion.div>

        {/* Input Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card glowColor="purple" className="max-w-3xl mx-auto p-8 glass-card">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Rocket className="w-6 h-6 text-[#00FFFF]" /> Tell Us About Yourself
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  name="interest"
                  label="Area of Interest" 
                  placeholder="e.g. Civil Services, Software Engineering" 
                  value={formData.interest}
                  onChange={handleChange}
                  required
                />
                <Input 
                  name="skills"
                  label="Skills (comma separated)" 
                  placeholder="e.g. communication, basic coding" 
                  value={formData.skills}
                  onChange={handleChange}
                />
                
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-medium text-gray-300 ml-1">Education Level</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    <select 
                      name="education"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-10 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50 focus:border-[#00FFFF]"
                      value={formData.education}
                      onChange={handleChange}
                    >
                      <option className="bg-[#1a1a2e]" value="SSLC (10th)">SSLC (10th)</option>
                      <option className="bg-[#1a1a2e]" value="HSC (12th)">HSC (12th)</option>
                      <option className="bg-[#1a1a2e]" value="Diploma">Diploma</option>
                      <option className="bg-[#1a1a2e]" value="Undergraduate">Undergraduate</option>
                      <option className="bg-[#1a1a2e]" value="Postgraduate">Postgraduate</option>
                    </select>
                  </div>
                </div>

                <Input 
                  name="marks"
                  label="Marks / Percentage" 
                  type="number" 
                  placeholder="e.g. 85" 
                  value={formData.marks}
                  onChange={handleChange}
                  icon={<BookOpen className="w-5 h-5" />}
                  required
                />

                <Input 
                  name="state"
                  label="State" 
                  placeholder="e.g. Tamil Nadu" 
                  value={formData.state}
                  onChange={handleChange}
                  icon={<MapPin className="w-5 h-5" />}
                  required
                />

                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-medium text-gray-300 ml-1">First Graduate?</label>
                  <select 
                    name="firstGraduate"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]/50 focus:border-[#8A2BE2]"
                    value={formData.firstGraduate}
                    onChange={handleChange}
                  >
                    <option className="bg-[#1a1a2e]" value="Yes">Yes</option>
                    <option className="bg-[#1a1a2e]" value="No">No</option>
                  </select>
                </div>

              </div>

              <div className="pt-4 flex justify-center">
                <Button 
                  type="submit" 
                  glowColor="cyan" 
                  className="w-full md:w-auto min-w-[250px] py-4 text-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                       <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-black animate-spin" />
                       Analyzing Profile...
                    </span>
                  ) : "Get Career Suggestions"}
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>

      {/* Render Results Component if Form Submitted */}
      {showResults && (
        <div className="mt-20">
          <ResultsDashboard formData={formData} />
        </div>
      )}
    </main>
  );
}

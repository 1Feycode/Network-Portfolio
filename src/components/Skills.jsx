import React from 'react';
import {
  Network,
  Route,
  Layers,
  Server,
  ShieldCheck,
  Terminal,
  Cpu,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { skillCategories } from '../data/skills';

// Map icon names from data file to Lucide components
const iconMap = {
  Network: Network,
  Route: Route,
  Layers: Layers,
  Server: Server,
  ShieldCheck: ShieldCheck,
  Terminal: Terminal,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#07111F]/95">
      {/* Subtle grid and ambient lighting */}
      <div className="absolute inset-0 bg-network-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#008CFF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008CFF]/15 border border-[#008CFF]/30 text-[#008CFF] text-xs font-bold tracking-widest uppercase">
            <span>MY SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My Technical Skills
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Practical, hands-on networking competencies developed through intensive CCNA training and lab configurations.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Network;
            return (
              <div
                key={category.id}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between group"
              >
                {/* Category Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#008CFF]/15 text-[#008CFF] group-hover:bg-[#008CFF] group-hover:text-white transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-3 pt-2 border-t border-slate-800/80">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#008CFF] shrink-0"></span>
                          <span className="text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 pl-3.5 leading-snug">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[#008CFF] text-[11px]">Hands-on Lab Verified</span>
                  <CheckCircle className="w-4 h-4 text-[#008CFF]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

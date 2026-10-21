import React from 'react';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileCheck,
} from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-[#07111F]/90 border-t border-slate-800">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#008CFF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008CFF]/15 border border-[#008CFF]/30 text-[#008CFF] text-xs font-bold tracking-widest uppercase">
            <span>CREDENTIALS &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Training &amp; Education
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Structured networking curricula, laboratory certifications, and academic qualifications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((item, index) => {
            const isCCNA = item.id === 'ccna-training';
            return (
              <div
                key={item.id}
                className="relative pl-6 sm:pl-10 pb-2 border-l-2 border-[#008CFF]/40 last:border-l-0"
              >
                {/* Timeline Node Marker */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#07111F] border-2 border-[#008CFF] flex items-center justify-center shadow-lg shadow-[#008CFF]/40">
                  {isCCNA ? (
                    <Award className="w-4 h-4 text-[#008CFF]" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-[#38BDF8]" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 border border-[#008CFF]/25 shadow-xl">
                  
                  {/* Top Row: Title & Status Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-xs font-mono font-semibold text-[#008CFF] uppercase tracking-wider block">
                        {item.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 mt-1">
                        {item.institution}
                      </p>
                    </div>

                    {/* Status Pill */}
                    <div className="shrink-0 self-start sm:self-auto">
                      <span
                        className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                          item.statusType === 'pending'
                            ? 'bg-amber-500/15 border border-amber-500/40 text-amber-300'
                            : 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.status}</span>
                      </span>
                    </div>
                  </div>

                  {/* Metadata Bar (Period, Location) */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4 text-[#008CFF]" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <MapPin className="w-4 h-4 text-[#008CFF]" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Topics Covered Breakdown */}
                  {item.topicsCovered && (
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-1.5">
                        <FileCheck className="w-4 h-4 text-[#008CFF]" />
                        <span>Curriculum &amp; Exam Domains Mastered:</span>
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.topicsCovered.map((topic, tIdx) => (
                          <div
                            key={tIdx}
                            className="p-3 rounded-lg bg-[#07111F]/80 border border-slate-800"
                          >
                            <span className="text-xs font-bold text-white block mb-0.5">
                              {topic.title}
                            </span>
                            <span className="text-[11px] text-slate-400 block leading-tight">
                              {topic.details}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Important Requirement Callout: Clearly distinguish training from official certification */}
                  {item.importantNotice && (
                    <div className="p-3.5 rounded-xl bg-[#008CFF]/10 border border-[#008CFF]/30 flex items-start space-x-2.5">
                      <AlertCircle className="w-5 h-5 text-[#008CFF] shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-200 leading-relaxed">
                        {item.importantNotice}
                      </p>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { MapPin, Mail, Phone, GraduationCap, Globe, Target, Award, Download, CheckCircle2, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#07111F] border-t border-slate-800/60">
      {/* Background accents */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#008CFF]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="text-left mb-3">
          <span className="text-xs font-bold tracking-widest text-[#008CFF] uppercase px-3 py-1 rounded bg-[#008CFF]/10 border border-[#008CFF]/20">
            ABOUT ME
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading, Bio, Highlights, and CV Download */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {personalInfo.aboutHeading}
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              {personalInfo.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Key Networking Credentials / Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {personalInfo.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3.5 rounded-lg bg-[#0B172B]/60 border border-slate-800 hover:border-[#008CFF]/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#008CFF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.label}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <a
                href={personalInfo.cvPath}
                download="Feyisa_Girma_Resume.pdf"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-lg bg-[#008CFF] hover:bg-[#0070D1] text-white font-medium text-base shadow-lg shadow-[#008CFF]/25 hover:shadow-[#008CFF]/40 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Information Card (Matching Reference Screenshot layout) */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xl border border-[#008CFF]/20">
              {/* Subtle top glow */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#008CFF] to-transparent"></div>

              <h3 className="text-lg font-bold text-white tracking-wide border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>Personal Profile</span>
                <span className="text-xs font-mono text-[#38BDF8] bg-[#008CFF]/15 px-2 py-0.5 rounded">
                  PORTFOLIO DATA
                </span>
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-[#008CFF]/15 text-[#008CFF] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-100">
                      {personalInfo.contactDetails.location}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-[#008CFF]/15 text-[#008CFF] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                      Email
                    </span>
                    <a
                      href={personalInfo.socialLinks.email}
                      className="text-sm sm:text-base font-medium text-slate-100 hover:text-[#008CFF] transition-colors"
                    >
                      {personalInfo.contactDetails.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-[#008CFF]/15 text-[#008CFF] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                      Phone
                    </span>
                    <a
                      href={personalInfo.socialLinks.phoneUrl}
                      className="text-sm sm:text-base font-medium text-slate-100 hover:text-[#008CFF] transition-colors"
                    >
                      {personalInfo.contactDetails.phone}
                    </a>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-[#008CFF]/15 text-[#008CFF] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                      Education
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-100">
                      {personalInfo.contactDetails.education}
                    </span>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-[#008CFF]/15 text-[#008CFF] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                      Languages
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-100">
                      {personalInfo.contactDetails.languages}
                    </span>
                  </div>
                </div>

                {/* Career Focus */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-[#008CFF]/15 text-[#008CFF] shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                      Career Focus
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#008CFF]">
                      {personalInfo.contactDetails.careerFocus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Box: Highlight CCNA Training Completed | Certification Pending */}
              <div className="pt-4 border-t border-slate-800">
                <div className="p-3.5 rounded-xl bg-[#008CFF]/10 border border-[#008CFF]/30 flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-[#008CFF] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Certification Status:
                    </span>
                    <span className="text-xs text-[#38BDF8] font-medium">
                      {personalInfo.certificationStatus}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

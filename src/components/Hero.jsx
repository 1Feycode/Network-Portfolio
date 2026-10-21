import React from 'react';
import { ArrowRight, Mail, Server, Network, ShieldCheck, Terminal, Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#07111F]"
    >
      {/* Background Graphic: Server rack & fiber optic simulation */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img
          src="/images/networking-bg.svg"
          alt="Networking Infrastructure Backdrop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Radial Blue Glow behind hero elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#008CFF]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#008CFF]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Network Grid Overlay */}
      <div className="absolute inset-0 bg-network-grid opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Text & CTAs) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Introductory Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008CFF]/15 border border-[#008CFF]/30 text-[#38BDF8] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#008CFF] animate-ping"></span>
              <span>{personalInfo.heroGreeting}</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              {personalInfo.firstName}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#38BDF8]">
                {personalInfo.lastName}
              </span>
            </h1>

            {/* Professional Title */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#008CFF] flex items-center space-x-2">
              <span>{personalInfo.tagline}</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personalInfo.heroDescription}
            </p>

            {/* Two Action Buttons (matching reference image) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#labs"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg bg-[#008CFF] hover:bg-[#0070D1] text-white font-medium text-base shadow-lg shadow-[#008CFF]/30 hover:shadow-[#008CFF]/50 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore My Labs</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base border border-slate-700/80 hover:border-[#008CFF]/50 backdrop-blur-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-[#008CFF]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Core Technologies & Tools Banner (matching "Trusted by" strip in reference) */}
            <div className="pt-8 border-t border-slate-800/80">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Hands-on Experience With Core Technologies:
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {personalInfo.techPartners.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-[#0B172B]/90 border border-slate-700/60 hover:border-[#008CFF]/40 text-xs font-medium text-slate-300 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008CFF]"></span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Portrait Photo / Placeholder) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Glowing Aura Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#008CFF] via-[#0284C7] to-transparent rounded-3xl blur-xl opacity-30 animate-pulse-subtle"></div>

              {/* Main Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#008CFF]/30 bg-[#0B172B]/60 backdrop-blur-md shadow-2xl">
                <img
                  src={personalInfo.portraitImage}
                  alt="Feyisa Girma - Aspiring Network Engineer"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to SVG if custom photo is not found
                    e.currentTarget.src = '/images/portrait-engineer.svg';
                  }}
                />

                {/* Subtle dark gradient overlay at base for seamless look */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07111F] via-[#07111F]/70 to-transparent"></div>

                {/* Floating Networking Metric Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#07111F]/90 border border-[#008CFF]/40 backdrop-blur-md shadow-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-[#008CFF]/20 text-[#008CFF]">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center space-x-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>CCNA Trained</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Cisco IOS &amp; Packet Tracer Labs
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#38BDF8] bg-[#008CFF]/15 px-2.5 py-1 rounded-md border border-[#008CFF]/30">
                    Pending Exam
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

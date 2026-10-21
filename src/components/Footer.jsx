import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal, Shield } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040B14] border-t border-slate-800/80 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-white">
                {personalInfo.firstName}{' '}
                <span className="text-[#008CFF]">{personalInfo.lastName}</span>
              </span>
              <span className="h-2 w-2 rounded-full bg-[#008CFF]"></span>
            </a>
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-400 mt-0.5">
              {personalInfo.role}
            </span>
            <span className="text-xs text-slate-400 mt-1">
              CCNA Training Completed &#8226; Certification Pending
            </span>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-[#008CFF] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#008CFF] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#008CFF] transition-colors">Skills</a>
            <a href="#labs" className="hover:text-[#008CFF] transition-colors">Labs</a>
            <a href="#education" className="hover:text-[#008CFF] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#008CFF] transition-colors">Contact</a>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-[#008CFF] text-slate-300 hover:text-white transition-all border border-slate-800"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-[#008CFF] text-slate-300 hover:text-white transition-all border border-slate-800"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.email}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-[#008CFF] text-slate-300 hover:text-white transition-all border border-slate-800"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#008CFF]/15 hover:bg-[#008CFF] text-[#38BDF8] hover:text-white transition-all border border-[#008CFF]/30 ml-2"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Designed for Network Engineering &amp; IT Infrastructure Careers
          </p>
        </div>

      </div>
    </footer>
  );
}

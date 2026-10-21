import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Shield, Download, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Labs', href: '#labs' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07111F]/90 backdrop-blur-md border-b border-[#008CFF]/20 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo on Left */}
        <a
          href="#home"
          className="group flex flex-col focus:outline-none"
        >
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {personalInfo.firstName}{' '}
              <span className="text-[#008CFF] group-hover:text-[#38BDF8] transition-colors">
                {personalInfo.lastName}
              </span>
            </span>
            <span className="h-2 w-2 rounded-full bg-[#008CFF] animate-pulse"></span>
          </div>
          <span className="text-[10px] tracking-widest font-semibold text-slate-400 uppercase -mt-0.5">
            NETWORK ENGINEER
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? 'text-[#008CFF] bg-[#008CFF]/10 border-b-2 border-[#008CFF]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button ("Hire Me" like reference screenshot) */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold rounded-md bg-[#008CFF] hover:bg-[#0070D1] text-white shadow-md shadow-[#008CFF]/25 hover:shadow-[#008CFF]/50 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center space-x-1.5"
          >
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#008CFF]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07111F]/98 border-b border-[#008CFF]/30 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? 'bg-[#008CFF]/15 text-[#008CFF] border-l-4 border-[#008CFF]'
                    : 'text-slate-200 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg font-semibold bg-[#008CFF] hover:bg-[#0070D1] text-white shadow-lg shadow-[#008CFF]/30 transition-all"
            >
              Hire Me
            </a>
            <a
              href={personalInfo.cvPath}
              download
              className="w-full text-center py-2 rounded-lg text-sm text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4 text-[#008CFF]" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

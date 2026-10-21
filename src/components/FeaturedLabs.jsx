import React, { useState } from 'react';
import { ArrowRight, Github, Download, Eye, ExternalLink, Network, Layers } from 'lucide-react';
import { labsData } from '../data/labs';
import LabDetailModal from './LabDetailModal';

export default function FeaturedLabs() {
  const [selectedLab, setSelectedLab] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Categories extracted from lab data
  const categories = ['All', 'Switching & Routing', 'Routing', 'Network Services', 'Network Security', 'Design & Addressing', 'Full Architecture'];

  const filteredLabs =
    activeFilter === 'All'
      ? labsData
      : labsData.filter((lab) => lab.category.toLowerCase().includes(activeFilter.toLowerCase()) || lab.category === activeFilter);

  return (
    <section id="labs" className="py-20 md:py-28 relative bg-[#07111F] border-t border-slate-800/80">
      {/* Background glow and subtle dots */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#008CFF]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#008CFF]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (matching reference image style: Label + Title + Subtitle) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008CFF]/15 border border-[#008CFF]/30 text-[#008CFF] text-xs font-bold tracking-widest uppercase mb-3">
              <span>FEATURED LABS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Networking Labs
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mt-2">
              Practical network implementations simulated using Cisco Packet Tracer and Cisco IOS command-line configurations.
            </p>
          </div>

          {/* Quick Stats / Right Note */}
          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-sm text-[#38BDF8] bg-[#0B172B] px-4 py-2 rounded-xl border border-slate-800">
            <Network className="w-4 h-4 text-[#008CFF]" />
            <span className="font-semibold">{labsData.length} Practical Labs Documented</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[#008CFF] text-white shadow-md shadow-[#008CFF]/30'
                  : 'bg-[#0B172B] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Project Card Layout (Exact layout from reference screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredLabs.map((lab) => (
            <div
              key={lab.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800 hover:border-[#008CFF]/40 transition-all duration-300"
            >
              {/* Card Image Area with Overlay & Topology Preview */}
              <div>
                <div className="relative aspect-[16/10] bg-[#050E1A] overflow-hidden border-b border-slate-800">
                  <img
                    src={lab.topologyImage}
                    alt={lab.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent opacity-80"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#07111F]/90 border border-[#008CFF]/40 text-[#008CFF] font-mono text-xs font-bold shadow-md">
                      {lab.number}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-semibold text-slate-300 bg-[#07111F]/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-700">
                      {lab.category}
                    </span>
                  </div>

                  {/* Hover Quick Action Pill */}
                  <div className="absolute inset-0 bg-[#07111F]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      onClick={() => setSelectedLab(lab)}
                      className="px-4 py-2.5 rounded-lg bg-[#008CFF] hover:bg-[#0070D1] text-white text-xs font-bold shadow-lg shadow-[#008CFF]/40 flex items-center space-x-2 transform scale-95 group-hover:scale-100 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Topology &amp; CLI</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {lab.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {lab.shortDescription}
                  </p>

                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {lab.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#0B172B] border border-slate-800 text-[#38BDF8]"
                      >
                        {tech}
                      </span>
                    ))}
                    {lab.technologies.length > 4 && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#0B172B] text-slate-400">
                        +{lab.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Action Buttons (View Details + GitHub/Download) */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedLab(lab)}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#008CFF] hover:text-[#38BDF8] transition-colors group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center space-x-2">
                  {lab.pktDownloadUrl && (
                    <a
                      href={lab.pktDownloadUrl}
                      download
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-[#008CFF]/20 text-slate-300 hover:text-[#38BDF8] border border-slate-700/60 transition-colors"
                      title="Download Packet Tracer (.pkt)"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {lab.githubUrl && (
                    <a
                      href={lab.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Template Notification Banner */}
        <div className="mt-12 p-4 rounded-xl bg-[#0B172B]/60 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="text-[#38BDF8] font-semibold">Ready for Customization:</span> These featured labs serve as comprehensive templates representing practical CCNA curriculum areas. You can replace the Packet Tracer files, topology diagrams, and IOS configs with your specific work in <code className="text-slate-300">src/data/labs.js</code>.
          </p>
        </div>

      </div>

      {/* Lab Detail Interactive Modal */}
      {selectedLab && (
        <LabDetailModal
          lab={selectedLab}
          onClose={() => setSelectedLab(null)}
        />
      )}
    </section>
  );
}

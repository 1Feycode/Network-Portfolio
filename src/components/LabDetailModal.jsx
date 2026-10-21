import React, { useState } from 'react';
import {
  X,
  Download,
  Github,
  Check,
  Copy,
  Terminal,
  Server,
  Layers,
  AlertCircle,
  BookOpen,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export default function LabDetailModal({ lab, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'config' | 'verification' | 'troubleshooting'
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!lab) return null;

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#07111F] border border-[#008CFF]/40 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B172B] border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded bg-[#008CFF]/15 border border-[#008CFF]/30 text-[#008CFF] font-mono text-xs font-bold">
              {lab.number}
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold hidden sm:inline-block">
              {lab.category}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {lab.pktDownloadUrl && (
              <a
                href={lab.pktDownloadUrl}
                download
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#008CFF]/15 hover:bg-[#008CFF]/25 border border-[#008CFF]/40 text-[#38BDF8] text-xs font-medium transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Packet Tracer (.pkt)</span>
              </a>
            )}

            {lab.githubUrl && (
              <a
                href={lab.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Title Banner */}
        <div className="px-6 py-4 bg-[#0A1A30] border-b border-slate-800/80">
          <h2 className="text-xl sm:text-2xl font-bold text-white">{lab.title}</h2>
          <p className="text-sm text-slate-300 mt-1">{lab.shortDescription}</p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mt-3">
            {lab.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#07111F] border border-slate-700 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center px-6 bg-[#07111F] border-b border-slate-800 overflow-x-auto">
          {[
            { id: 'overview', label: 'Topology & Overview' },
            { id: 'addressing', label: 'Addressing & Devices' },
            { id: 'config', label: 'Cisco IOS Commands' },
            { id: 'verification', label: 'Verification & Results' },
            { id: 'troubleshooting', label: 'Troubleshooting & Notes' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-[#008CFF] text-[#008CFF]'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200">
          
          {/* TAB 1: OVERVIEW & TOPOLOGY */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Network Topology Visual */}
              <div className="rounded-xl overflow-hidden border border-[#008CFF]/30 bg-[#040B14] shadow-inner">
                <div className="bg-[#0B172B] px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-[#38BDF8]">
                    NETWORK TOPOLOGY DIAGRAM
                  </span>
                  <span className="text-[11px] text-slate-400">Vector High-Resolution Topology</span>
                </div>
                <div className="p-3 sm:p-6 flex items-center justify-center">
                  <img
                    src={lab.topologyImage}
                    alt={`${lab.title} Topology`}
                    className="max-h-96 w-auto object-contain rounded"
                  />
                </div>
              </div>

              {/* Lab Overview */}
              <div>
                <h4 className="text-base font-bold text-white mb-2 flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-[#008CFF]" />
                  <span>Lab Overview</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-[#0B172B]/50 p-4 rounded-xl border border-slate-800">
                  {lab.overview}
                </p>
              </div>

              {/* Lab Objectives */}
              <div>
                <h4 className="text-base font-bold text-white mb-2 flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-[#008CFF]" />
                  <span>Lab Objectives</span>
                </h4>
                <ul className="space-y-2 bg-[#0B172B]/50 p-4 rounded-xl border border-slate-800">
                  {lab.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-sm text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-[#008CFF] shrink-0 mt-1.5"></span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lessons Learned */}
              {lab.lessonsLearned && (
                <div className="p-4 rounded-xl bg-[#008CFF]/10 border border-[#008CFF]/30">
                  <h4 className="text-sm font-bold text-white mb-1">
                    Key Practical Insights &amp; CCNA Takeaway:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {lab.lessonsLearned}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ADDRESSING & HARDWARE */}
          {activeTab === 'addressing' && (
            <div className="space-y-6">
              {/* Hardware / Devices Used */}
              <div>
                <h4 className="text-base font-bold text-white mb-3 flex items-center space-x-2">
                  <Server className="w-4 h-4 text-[#008CFF]" />
                  <span>Devices Used in Lab Simulation</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {lab.devices.map((device, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[#0B172B] border border-slate-800 flex items-start space-x-3"
                    >
                      <div className="p-2 rounded bg-[#008CFF]/15 text-[#008CFF] shrink-0">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#38BDF8] block">
                          {device.type}
                        </span>
                        <span className="text-sm font-bold text-white block">
                          {device.model}
                        </span>
                        <span className="text-xs text-slate-400 mt-0.5 block">
                          Role: {device.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* IP Addressing Table */}
              <div>
                <h4 className="text-base font-bold text-white mb-3 flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-[#008CFF]" />
                  <span>IP Addressing Table</span>
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#0B172B] text-slate-300 font-mono text-[11px] uppercase tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="py-3 px-4">Device</th>
                        <th className="py-3 px-4">Interface</th>
                        <th className="py-3 px-4">IP Address</th>
                        <th className="py-3 px-4">Subnet Mask</th>
                        <th className="py-3 px-4">Default Gateway</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 bg-[#07111F]/60">
                      {lab.addressingTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-2.5 px-4 font-semibold text-white">{row.device}</td>
                          <td className="py-2.5 px-4 font-mono text-slate-300">{row.interface}</td>
                          <td className="py-2.5 px-4 font-mono text-[#38BDF8]">{row.ipAddress}</td>
                          <td className="py-2.5 px-4 font-mono text-slate-300">{row.subnetMask}</td>
                          <td className="py-2.5 px-4 font-mono text-slate-400">{row.gateway}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CISCO IOS COMMANDS */}
          {activeTab === 'config' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-[#008CFF]" />
                    <span>Cisco IOS Configuration Steps</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Production-grade Cisco IOS command sequences ready to run in Packet Tracer or hardware CLI.
                  </p>
                </div>
              </div>

              {lab.configurationSteps.map((stepItem, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-slate-800 bg-[#040B14]">
                  {/* Terminal Header */}
                  <div className="px-4 py-2.5 bg-[#0B172B] border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                      <span className="text-xs font-semibold text-slate-200 ml-2">
                        Step {stepItem.step}: {stepItem.title}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(stepItem.commands, idx)}
                      className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-[#008CFF] text-slate-300 hover:text-white text-xs font-mono transition-colors"
                      title="Copy commands to clipboard"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Terminal Body */}
                  <pre className="p-4 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed selection:bg-[#008CFF]/40">
                    <code>{stepItem.commands}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: VERIFICATION & CLI OUTPUT */}
          {activeTab === 'verification' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-white flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Verification Commands &amp; CLI Output</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Actual diagnostic outputs validating routing tables, neighbor status, and packet ping success.
                </p>
              </div>

              {lab.verification.map((vItem, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-slate-800 bg-[#040B14]">
                  <div className="px-4 py-2 bg-[#0B172B] border-b border-slate-800 flex items-center space-x-2">
                    <span className="text-xs font-mono text-[#38BDF8] font-bold">
                      # {vItem.command}
                    </span>
                  </div>
                  <pre className="p-4 text-xs font-mono text-emerald-300/90 overflow-x-auto leading-relaxed bg-[#050D18]">
                    <code>{vItem.output}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: TROUBLESHOOTING NOTES */}
          {activeTab === 'troubleshooting' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-white flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>Troubleshooting Notes &amp; Common Gotchas</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real-world issues resolved during the configuration and debugging phase of this topology.
                </p>
              </div>

              <div className="space-y-3">
                {lab.troubleshootingNotes.map((note, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0B172B] border border-amber-500/20 flex items-start space-x-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-500/15 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Template notice requirement */}
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-400">
                <span className="font-semibold text-slate-300 block mb-1">
                  Editable Portfolio Lab Template:
                </span>
                This lab data is structured in <code className="text-[#38BDF8]">src/data/labs.js</code>. You can customize the topology, IOS commands, addressing table, and verification outputs to reflect any specific CCNA lab or Packet Tracer file.
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0B172B] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            {lab.pktDownloadUrl && (
              <a
                href={lab.pktDownloadUrl}
                download
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#008CFF] hover:bg-[#0070D1] text-white text-xs sm:text-sm font-medium transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download .pkt File</span>
              </a>
            )}

            {lab.githubUrl && (
              <a
                href={lab.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition-all border border-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-slate-400 hover:text-white text-xs sm:text-sm hover:bg-slate-800 transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}

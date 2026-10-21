import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  Github,
  Linkedin,
  CheckCircle,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submittedStatus, setSubmittedStatus] = useState(null); // 'mailto_opened' | 'copied'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct mailto URI with sanitized subject and body
    const recipient = personalInfo.contactDetails.email;
    const emailSubject = encodeURIComponent(
      formData.subject || `Networking Portfolio Inquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Hello Feyisa,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Network Engineer Portfolio`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    // Open user's default email client
    window.location.href = mailtoUrl;

    setSubmittedStatus('mailto_opened');
  };

  const copyEmailAddress = () => {
    navigator.clipboard.writeText(personalInfo.contactDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative bg-gradient-to-b from-[#07111F] via-[#09182E] to-[#040B14] border-t border-slate-800"
    >
      {/* City skyline / fiber connection overlay (matching reference image bottom) */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-network-grid opacity-15 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#008CFF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008CFF]/15 border border-[#008CFF]/30 text-[#008CFF] text-xs font-bold tracking-widest uppercase">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {personalInfo.contactHeading}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {personalInfo.contactDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-[#008CFF]/20 shadow-xl">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#008CFF]/15 text-[#008CFF] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs uppercase font-semibold text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={personalInfo.socialLinks.email}
                      className="text-sm sm:text-base font-medium text-white hover:text-[#008CFF] transition-colors break-all"
                    >
                      {personalInfo.contactDetails.email}
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#008CFF]/15 text-[#008CFF] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-slate-400 block">
                      Phone Number
                    </span>
                    <a
                      href={personalInfo.socialLinks.phoneUrl}
                      className="text-sm sm:text-base font-medium text-white hover:text-[#008CFF] transition-colors"
                    >
                      {personalInfo.contactDetails.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#008CFF]/15 text-[#008CFF] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-slate-400 block">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-200">
                      {personalInfo.contactDetails.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Email Copy & Download CV */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={copyEmailAddress}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#008CFF]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={personalInfo.cvPath}
                  download="Feyisa_Girma_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-[#008CFF]/15 hover:bg-[#008CFF]/25 text-[#38BDF8] text-xs font-semibold transition-colors border border-[#008CFF]/40"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <span className="text-xs uppercase font-semibold text-slate-400 block mb-3">
                  Professional Profiles:
                </span>
                <div className="flex items-center space-x-3">
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-800/80 hover:bg-[#008CFF] text-slate-300 hover:text-white transition-all duration-200 border border-slate-700"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-800/80 hover:bg-[#008CFF] text-slate-300 hover:text-white transition-all duration-200 border border-slate-700"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href={personalInfo.socialLinks.email}
                    className="p-3 rounded-xl bg-slate-800/80 hover:bg-[#008CFF] text-slate-300 hover:text-white transition-all duration-200 border border-slate-700"
                    aria-label="Email Me"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#008CFF]/20 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out the details below to launch your email client with a preformatted message to Feyisa Girma.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#07111F] border border-slate-700 focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF] text-slate-100 placeholder-slate-500 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#07111F] border border-slate-700 focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF] text-slate-100 placeholder-slate-500 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="e.g. Network Support Role / Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#07111F] border border-slate-700 focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF] text-slate-100 placeholder-slate-500 text-sm outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Describe the opportunity or message you would like to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#07111F] border border-slate-700 focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF] text-slate-100 placeholder-slate-500 text-sm outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-lg bg-[#008CFF] hover:bg-[#0070D1] text-white font-semibold text-base shadow-lg shadow-[#008CFF]/25 hover:shadow-[#008CFF]/45 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Status Notice */}
              {submittedStatus === 'mailto_opened' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs flex items-center space-x-2 animate-in fade-in">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>
                    Your default email application has been launched with the message pre-filled. If it did not open, you can email directly to <strong>{personalInfo.contactDetails.email}</strong>.
                  </span>
                </div>
              )}

              <p className="text-[11px] text-slate-400 text-center">
                * Frontend mailto delivery: Uses your device's registered email client without requiring external server dependencies.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

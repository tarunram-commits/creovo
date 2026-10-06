import React, { useState } from 'react';
import { ContactFormData } from '../../types';
import { CREOVO_EMAIL, getWhatsAppInquiryLink, getMailtoInquiryLink } from '../../config/agency';
import { Send, MessageSquare, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phoneWhatsapp: '',
    service: 'Website Development',
    budget: '',
    timeline: '',
    projectDetails: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceOptions = [
    'Website Development',
    'UI/UX & Design',
    'Content Creation',
    'Social Media Management',
    'SEO',
    'Digital Management',
    'Other',
  ];

  const budgetOptions = [
    'Below ₹10,000',
    '₹10,000 – ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000+',
    'Not sure yet',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 5) {
      errs.projectDetails = 'Please share your project details (at least 5 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          website_hp: honeypot, // Spam honeypot
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitStatus('success');
        setStatusMessage(
          resData.message || 'Thank you — your project inquiry has been sent.'
        );
      } else {
        setSubmitStatus('error');
        setStatusMessage(
          'Something went wrong. Please try again or contact us directly.'
        );
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage(
        'Something went wrong. Please try again or contact us directly.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsAppSend = () => {
    const link = getWhatsAppInquiryLink({
      fullName: formData.fullName,
      businessName: formData.businessName,
      email: formData.email,
      phoneWhatsapp: formData.phoneWhatsapp,
      service: formData.service,
      budget: formData.budget,
      timeline: formData.timeline,
      projectDetails: formData.projectDetails,
    });
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b-2 border-creovo-dark bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b-2 border-creovo-dark gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-creovo-yellow border border-creovo-dark inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-creovo-dark font-bold">
                07 // INITIATE A PROJECT
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase font-sans text-creovo-dark">
              LET'S BUILD SOMETHING <br />
              <span className="bg-creovo-yellow px-2 border border-creovo-dark inline-block mt-1">
                FOR YOUR BUSINESS.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg text-creovo-muted font-sans font-normal">
            Tell us about your business, your idea and what you need help with. We respond within 24 hours with clear next steps.
          </p>
        </div>

        {/* Form Container */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct channels & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-2 border-creovo-dark bg-creovo-soft p-8 shadow-[4px_4px_0px_0px_#0A0A0A]">
              <div className="font-mono text-xs text-creovo-dark uppercase tracking-widest font-bold mb-4">
                DIRECT INQUIRY CHANNELS
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-creovo-muted block mb-1">OFFICIAL EMAIL</span>
                  <a
                    href={getMailtoInquiryLink()}
                    className="text-sm font-bold text-creovo-dark hover:underline flex items-center gap-1"
                  >
                    <span>{CREOVO_EMAIL}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div>
                  <span className="text-creovo-muted block mb-1">FAST-TRACK CHAT</span>
                  <button
                    onClick={handleWhatsAppSend}
                    className="text-sm font-bold text-creovo-dark hover:text-emerald-700 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-creovo-yellow bg-creovo-soft p-6 border-y border-r border-creovo-border">
              <div className="font-mono text-xs font-bold text-creovo-dark uppercase mb-1">
                TRANSPARENT ENGAGEMENT
              </div>
              <p className="text-xs text-creovo-muted font-sans leading-relaxed">
                Every project enquiry goes directly to the principal CREOVO team. We review your requirements and provide an honest assessment of scope, timeline, and pricing.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border-2 border-creovo-dark p-8 sm:p-10 shadow-[6px_6px_0px_0px_#0A0A0A]">
            {submitStatus === 'success' ? (
              <div className="py-10 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-creovo-yellow border-2 border-creovo-dark flex items-center justify-center mx-auto text-creovo-dark">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-creovo-dark tracking-widest uppercase bg-creovo-yellow px-2 py-0.5 border border-creovo-dark">
                    ENQUIRY TRANSMITTED
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase font-sans text-creovo-dark">
                    THANK YOU, {formData.fullName}.
                  </h3>
                  <p className="text-sm text-creovo-dark font-sans leading-relaxed max-w-md mx-auto">
                    {statusMessage}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-creovo-dark max-w-md mx-auto space-y-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full py-3.5 px-6 bg-creovo-dark hover:bg-creovo-yellow hover:text-creovo-dark text-white border-2 border-creovo-dark font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors shadow-[3px_3px_0px_0px_#FFD21F]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>ALSO SEND VIA WHATSAPP</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitStatus('idle');
                      setStatusMessage('');
                      setFormData({
                        fullName: '',
                        businessName: '',
                        email: '',
                        phoneWhatsapp: '',
                        service: 'Website Development',
                        budget: '₹25,000 – ₹50,000',
                        projectDetails: '',
                      });
                    }}
                    className="text-xs font-mono text-creovo-dark font-bold hover:underline uppercase tracking-wider block mx-auto pt-2"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot anti-spam field */}
                <div aria-hidden="true" style={{ display: 'none', position: 'absolute', left: '-9999px' }}>
                  <label htmlFor="website_hp">Leave this field blank</label>
                  <input
                    id="website_hp"
                    type="text"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Error Banner when email delivery fails */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-500 text-red-900 space-y-3 animate-fadeIn">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                      <p className="text-xs font-mono font-bold leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={handleWhatsAppSend}
                        className="w-full py-2.5 px-4 bg-creovo-dark hover:bg-creovo-yellow hover:text-creovo-dark text-white border border-creovo-dark font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-400" />
                        <span>SEND ENQUIRY ON WHATSAPP NOW</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-xs uppercase font-bold text-creovo-dark mb-2">
                      FULL NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-white border-2 border-creovo-dark text-creovo-dark placeholder-creovo-muted text-sm focus:bg-creovo-soft transition-colors"
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1 font-mono">{errors.fullName}</p>}
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="contact-business" className="block font-mono text-xs uppercase font-bold text-creovo-dark mb-2">
                      BUSINESS / COMPANY NAME
                    </label>
                    <input
                      id="contact-business"
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Sharma Architecture"
                      className="w-full px-4 py-3 bg-white border-2 border-creovo-dark text-creovo-dark placeholder-creovo-muted text-sm focus:bg-creovo-soft transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block font-mono text-xs uppercase font-bold text-creovo-dark mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full px-4 py-3 bg-white border-2 border-creovo-dark text-creovo-dark placeholder-creovo-muted text-sm focus:bg-creovo-soft transition-colors"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1 font-mono">{errors.email}</p>}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label htmlFor="contact-phone" className="block font-mono text-xs uppercase font-bold text-creovo-dark mb-2">
                      PHONE / WHATSAPP *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phoneWhatsapp}
                      onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-white border-2 border-creovo-dark text-creovo-dark placeholder-creovo-muted text-sm focus:bg-creovo-soft transition-colors"
                    />
                    {errors.phoneWhatsapp && <p className="text-xs text-red-600 mt-1 font-mono">{errors.phoneWhatsapp}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service */}
                  <div>
                    <label htmlFor="contact-service" className="block font-mono text-xs uppercase font-bold text-creovo-dark mb-2">
                      SERVICE NEEDED *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-creovo-dark text-creovo-dark text-sm font-sans focus:bg-creovo-soft"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-xs text-red-600 mt-1 font-mono">{errors.service}</p>}
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="contact-budget" className="block font-mono text-xs uppercase font-bold text-creovo-dark mb-2">
                      ESTIMATED BUDGET
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-creovo-dark text-creovo-dark text-sm font-sans focus:bg-creovo-soft"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="contact-details" className="block font-mono text-xs uppercase font-bold text-creovo-dark mb-2">
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    id="contact-details"
                    required
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Tell us what you are building, your timeline, or current challenges with your digital presence..."
                    className="w-full px-4 py-3 bg-white border-2 border-creovo-dark text-creovo-dark placeholder-creovo-muted text-sm focus:bg-creovo-soft resize-none"
                  />
                  {errors.projectDetails && <p className="text-xs text-red-600 mt-1 font-mono">{errors.projectDetails}</p>}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 py-4 px-6 bg-creovo-yellow hover:bg-creovo-dark hover:text-white text-creovo-dark border-2 border-creovo-dark font-mono text-xs uppercase tracking-widest font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#0A0A0A] disabled:opacity-50"
                  >
                    <span>{submitting ? 'TRANSMITTING...' : 'SEND ENQUIRY'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="py-4 px-6 bg-white hover:bg-creovo-soft text-creovo-dark border-2 border-creovo-dark font-mono text-xs uppercase tracking-widest font-bold transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>CHAT ON WHATSAPP</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Send, MessageSquare, ArrowUpRight } from 'lucide-react';
import { CREOVO_EMAIL, getWhatsAppInquiryLink, getMailtoInquiryLink } from '../config/agency';

interface ContactFormState {
  fullName: string;
  businessName: string;
  email: string;
  phoneWhatsapp: string;
  service: string;
  budget: string;
  timeline: string;
  projectDetails: string;
}

const defaultFormState: ContactFormState = {
  fullName: '',
  businessName: '',
  email: '',
  phoneWhatsapp: '',
  service: 'Website Development',
  budget: '',
  timeline: '',
  projectDetails: '',
};

const serviceOptions = [
  'Website Development',
  'UI/UX & Design',
  'Content Creation',
  'Social Media Management',
  'SEO',
  'Digital Management',
  'Other',
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>(defaultFormState);
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your name.';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 5) {
      nextErrors.projectDetails = 'Please share your project details (at least 5 characters).';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setStatus('idle');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          website_hp: honeypot,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setMessage(result.message || 'Thank you — your project inquiry has been sent.');
        setFormData(defaultFormState);
      } else {
        setStatus('error');
        setMessage(result.error || 'Something went wrong. Please try again or contact us directly.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again or contact us directly.');
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

  if (status === 'success') {
    return (
      <div className="contact-success">
        <p className="eyebrow eyebrow--dark">Inquiry Sent</p>
        <h3>Thank you — your project inquiry has been sent.</h3>
        <p>We will review your requirements and get back to you within 24 hours.</p>

        <div className="contact-success__meta">
          <a href={getMailtoInquiryLink()} className="link-inline">
            <span>Email {CREOVO_EMAIL}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button type="button" onClick={handleWhatsAppSend} className="link-inline">
            <MessageSquare className="h-4 w-4" />
            <span>WhatsApp Fast-Track</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="contact-form">
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="website_hp">Leave blank</label>
        <input
          id="website_hp"
          type="text"
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {status === 'error' && (
        <div className="form-banner" role="alert">
          {message}
        </div>
      )}

      <div className="field-grid">
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            value={formData.fullName}
            onChange={(event) => setFormData((current) => ({ ...current, fullName: event.target.value }))}
            placeholder="Rahul Sharma"
          />
          {errors.fullName && <small>{errors.fullName}</small>}
        </label>

        <label className="field">
          <span>Business / Brand</span>
          <input
            type="text"
            value={formData.businessName}
            onChange={(event) => setFormData((current) => ({ ...current, businessName: event.target.value }))}
            placeholder="CREOVO Studio"
          />
        </label>
      </div>

      <div className="field-grid">
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            value={formData.email}
            onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
            placeholder="hello@brand.com"
          />
          {errors.email && <small>{errors.email}</small>}
        </label>

        <label className="field">
          <span>Phone / WhatsApp</span>
          <input
            type="tel"
            value={formData.phoneWhatsapp}
            onChange={(event) => setFormData((current) => ({ ...current, phoneWhatsapp: event.target.value }))}
            placeholder="+91 98765 43210"
          />
          {errors.phoneWhatsapp && <small>{errors.phoneWhatsapp}</small>}
        </label>
      </div>

      <label className="field">
        <span>Service</span>
        <select
          value={formData.service}
          onChange={(event) => setFormData((current) => ({ ...current, service: event.target.value }))}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service && <small>{errors.service}</small>}
      </label>

      <label className="field">
        <span>Message</span>
        <textarea
          rows={5}
          value={formData.projectDetails}
          onChange={(event) => setFormData((current) => ({ ...current, projectDetails: event.target.value }))}
          placeholder="Tell us what you're building and what you need help with."
        />
        {errors.projectDetails && <small>{errors.projectDetails}</small>}
      </label>

      <div className="contact-form__actions flex flex-col sm:flex-row gap-4 pt-2">
        <button type="submit" className="editorial-pill-btn-yellow flex-1 justify-center" disabled={submitting}>
          <span>{submitting ? 'Sending...' : 'Send Enquiry'}</span>
          <Send className="h-4 w-4" />
        </button>

        <button type="button" className="editorial-pill-btn-secondary justify-center" onClick={handleWhatsAppSend}>
          <MessageSquare className="h-4 w-4 text-emerald-600" />
          <span>Chat on WhatsApp</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

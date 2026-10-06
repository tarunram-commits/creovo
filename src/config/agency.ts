/**
 * ==============================================================================
 * CREOVO AGENCY CONFIGURATION & CONTACT PLACEHOLDERS
 * ==============================================================================
 * 
 * Replace the placeholder values below with CREOVO's actual contact information.
 * All components reference this central source of truth.
 */

// CREOVO Email for project inquiries & form deliveries — Official Canonical Address
export const CREOVO_EMAIL = "CRE.OVO11@GMAIL.COM";

// Central WhatsApp Number — read from VITE_CREOVO_WHATSAPP_NUMBER or fallback to verified number (917483988674)
export const CREOVO_WHATSAPP_NUMBER: string = (
  import.meta.env.VITE_CREOVO_WHATSAPP_NUMBER ?? '917483988674'
).replace(/[^0-9]/g, '');

// Official Instagram URL (only shown if configured)
export const CREOVO_INSTAGRAM_URL = "https://www.instagram.com/cre.ovo?stkn=MXhibjZsd21tcnQ2bA==";

// Core brand positioning
export const BRAND = {
  name: "CREOVO",
  legalName: "CREOVO Creative Digital Agency",
  eyebrow: "CREATIVE DIGITAL AGENCY",
  headline: "YOUR DIGITAL PRESENCE, BUILT & MANAGED.",
  subheadline:
    "CREOVO helps businesses build, manage and grow their digital presence through websites, design, content, social media, SEO and digital management.",
  positioning: "Your digital presence, built and managed.",
  navigation: [
    { label: "Home", href: "#/" },
    { label: "About", href: "#/about" },
    { label: "Services", href: "#/services" },
    { label: "Contact", href: "#/contact" },
  ],
};

/**
 * Generates an encoded mailto URL with the pre-filled project inquiry format
 */
export function getMailtoInquiryLink(params?: {
  name?: string;
  fullName?: string;
  company?: string;
  businessName?: string;
  projectType?: string;
  service?: string;
  projectDetails?: string;
  details?: string;
  budget?: string;
  timeline?: string;
}): string {
  const subject = "Project Inquiry — Creovo";
  const nameVal = params?.name || params?.fullName || "";
  const companyVal = params?.company || params?.businessName || "";
  const typeVal = params?.projectType || params?.service || "";
  const detailsVal = params?.projectDetails || params?.details || "";
  const budgetVal = params?.budget || "";
  const timelineVal = params?.timeline || "";

  const body =
    `Hello Creovo,\n\n` +
    `I’d like to discuss a project with your team.\n\n` +
    `Name: ${nameVal}\n` +
    `Company: ${companyVal}\n` +
    `Project type: ${typeVal}\n` +
    `Project details: ${detailsVal}\n` +
    `Budget: ${budgetVal}\n` +
    `Preferred timeline: ${timelineVal}\n\n` +
    `Please let me know the next steps.\n\n` +
    `Thank you.`;

  return `mailto:${CREOVO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Generates an encoded WhatsApp click-to-chat URL with the canonical pre-filled inquiry format
 */
export function getWhatsAppInquiryLink(params?: {
  fullName?: string;
  name?: string;
  businessName?: string;
  company?: string;
  business?: string;
  email?: string;
  phoneWhatsapp?: string;
  phone?: string;
  service?: string;
  projectType?: string;
  budget?: string;
  projectDetails?: string;
  details?: string;
  timeline?: string;
}): string {
  const cleanNumber = CREOVO_WHATSAPP_NUMBER || '917483988674';

  const nameVal = params?.fullName || params?.name || "";
  const companyVal = params?.company || params?.businessName || params?.business || "";
  const serviceVal = params?.projectType || params?.service || "";
  const detailsVal = params?.projectDetails || params?.details || "";
  const budgetVal = params?.budget || "";
  const timelineVal = params?.timeline || "";

  const text =
    `Hello Creovo! 👋\n\n` +
    `I'd like to discuss a project with your team.\n\n` +
    `Name: ${nameVal}\n` +
    `Company: ${companyVal}\n` +
    `Project type: ${serviceVal}\n` +
    `Project details: ${detailsVal}\n` +
    `Budget: ${budgetVal}\n` +
    `Timeline: ${timelineVal}\n\n` +
    `Please let me know how we can get started.\n\n` +
    `Thank you!`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Verified Real CREOVO Team Members
 */
export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  rolePillars: string[];
}

export const CREOVO_TEAM: TeamMember[] = [
  {
    id: "tarun-v",
    initials: "TV",
    name: "TARUN V",
    rolePillars: ["Web Developer", "Content Writer", "Networking"],
  },
  {
    id: "adarsha-b-u",
    initials: "AB",
    name: "ADARSHA B U",
    rolePillars: ["Web Developer", "Social Media", "Designer"],
  },
  {
    id: "vijaykumar-k-n",
    initials: "VK",
    name: "VIJAYKUMAR K N",
    rolePillars: ["Web Developer", "Social Media", "Designer"],
  },
  {
    id: "umer-h-u",
    initials: "UH",
    name: "UMER H U",
    rolePillars: ["Web Developer", "Social Media", "Marketing Head"],
  },
];

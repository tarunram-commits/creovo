export interface ContactFormData {
  fullName: string;
  businessName?: string;
  email: string;
  phoneWhatsapp?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  projectDetails: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  error?: string;
  emailSent?: boolean;
}

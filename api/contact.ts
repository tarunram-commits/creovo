/**
 * CREOVO Contact Lead API Handler
 * 
 * Standard serverless / Node handler compatible with:
 * - Vercel Serverless Functions (/api/contact)
 * - Netlify Functions
 * - Vite Development Middleware
 */

export interface ContactRequestBody {
  fullName?: string;
  businessName?: string;
  email?: string;
  phoneWhatsapp?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  projectDetails?: string;
  website_hp?: string;
}

export interface ContactProcessResult {
  status: number;
  data: {
    success: boolean;
    message?: string;
    error?: string;
  };
}

export async function processContactRequest(
  body: ContactRequestBody,
  env: Record<string, string | undefined> = process.env
): Promise<ContactProcessResult> {
  // 1. Check body format
  if (!body || typeof body !== 'object') {
    return {
      status: 400,
      data: { success: false, error: 'Invalid request payload.' },
    };
  }

  const {
    fullName,
    businessName,
    email,
    phoneWhatsapp,
    service,
    budget,
    timeline,
    projectDetails,
    website_hp,
  } = body;

  // 2. Spam Honeypot Protection
  if (website_hp && String(website_hp).trim().length > 0) {
    console.warn('[CREOVO SPAM FILTER] Honeypot triggered. Silently discarded bot submission.');
    return {
      status: 200,
      data: {
        success: true,
        message: 'Thank you — your project inquiry has been sent.',
      },
    };
  }

  // 3. Strict Server-Side Validation: Required (Name, Email, Project Details)
  const trimmedName = typeof fullName === 'string' ? fullName.trim() : '';
  const trimmedEmail = typeof email === 'string' ? email.trim() : '';
  const trimmedPhone = typeof phoneWhatsapp === 'string' ? phoneWhatsapp.trim() : '';
  const trimmedService = typeof service === 'string' ? service.trim() : '';
  const trimmedDetails = typeof projectDetails === 'string' ? projectDetails.trim() : '';
  const trimmedBiz = typeof businessName === 'string' ? businessName.trim() : '';
  const trimmedBudget = typeof budget === 'string' ? budget.trim() : '';
  const trimmedTimeline = typeof timeline === 'string' ? timeline.trim() : '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!trimmedName || trimmedName.length < 2) {
    return {
      status: 400,
      data: {
        success: false,
        error: 'Please enter your name.',
      },
    };
  }

  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    return {
      status: 400,
      data: {
        success: false,
        error: 'Please enter a valid email address.',
      },
    };
  }

  if (!trimmedDetails || trimmedDetails.length < 5) {
    return {
      status: 400,
      data: {
        success: false,
        error: 'Please share your project details (at least 5 characters).',
      },
    };
  }

  // 4. Resolve Environment Configuration (Canonical CRE.OVO11@GMAIL.COM)
  const apiKey = env.EMAIL_SERVICE_API_KEY;
  const toEmail = env.CREOVO_EMAIL || 'CRE.OVO11@GMAIL.COM';
  const fromEmail = env.CREOVO_FROM_EMAIL || 'CREOVO Inquiries <onboarding@resend.dev>';

  // 5. Construct Clean Email Content
  const subject = `New Project Inquiry — ${trimmedName}`;
  const textBody =
    `NEW PROJECT INQUIRY\n\n` +
    `Name:\n${trimmedName}\n\n` +
    `Email:\n${trimmedEmail}\n\n` +
    `Phone:\n${trimmedPhone || 'Not provided'}\n\n` +
    `Company:\n${trimmedBiz || 'Not provided'}\n\n` +
    `Project Type:\n${trimmedService || 'Not specified'}\n\n` +
    `Budget:\n${trimmedBudget || 'Not specified'}\n\n` +
    `Timeline:\n${trimmedTimeline || 'Not specified'}\n\n` +
    `Project Details:\n${trimmedDetails}\n\n` +
    `Submitted from:\nCreovo Website (https://creovo.agency)\n`;

  // 6. If configuration is missing, log safely and return expected failure message
  if (!apiKey || !toEmail) {
    console.error(
      `[CREOVO EMAIL SERVICE] Missing configuration: ${
        !apiKey ? 'EMAIL_SERVICE_API_KEY is not set. ' : ''
      }${!toEmail ? 'CREOVO_EMAIL is not set.' : ''}`
    );
    console.log('[CREOVO ENQUIRY LOGGED SERVER-SIDE]:\n', textBody);

    return {
      status: 500,
      data: {
        success: false,
        error: 'Something went wrong. Please try again or contact us directly.',
      },
    };
  }

  // 7. Dispatch to Resend Email Provider
  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: trimmedEmail,
        subject: subject,
        text: textBody,
      }),
    });

    if (resendResponse.ok) {
      console.log(`[CREOVO EMAIL SERVICE] Successfully sent inquiry to ${toEmail}`);
      return {
        status: 200,
        data: {
          success: true,
          message: 'Thank you — your project inquiry has been sent.',
        },
      };
    } else {
      const errorText = await resendResponse.text();
      console.error(`[CREOVO EMAIL SERVICE] Resend API error (${resendResponse.status}):`, errorText);
      return {
        status: 502,
        data: {
          success: false,
          error: 'Something went wrong. Please try again or contact us directly.',
        },
      };
    }
  } catch (err: any) {
    console.error('[CREOVO EMAIL SERVICE] Network or dispatch failure:', err?.message || err);
    return {
      status: 500,
      data: {
        success: false,
        error: 'Something went wrong. Please try again or contact us directly.',
      },
    };
  }
}

/**
 * Standard Vercel / Node serverless handler entry point
 */
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} not allowed` });
  }

  const result = await processContactRequest(req.body, process.env);
  return res.status(result.status).json(result.data);
}

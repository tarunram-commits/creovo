import { onRequest } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions/v2';

setGlobalOptions({
  region: 'us-central1',
  maxInstances: 10,
});

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

export const contact = onRequest(
  {
    cors: true,
    secrets: ['EMAIL_SERVICE_API_KEY'],
  },
  async (req, res) => {
    // 1. Only allow POST requests
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      res.status(405).json({
        success: false,
        error: `Method ${req.method} not allowed.`,
      });
      return;
    }

    try {
      const body: ContactRequestBody = req.body || {};

      // 2. Validate payload format
      if (!body || typeof body !== 'object') {
        res.status(400).json({
          success: false,
          error: 'Invalid request payload.',
        });
        return;
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

      // 3. Spam Honeypot Protection
      if (website_hp && String(website_hp).trim().length > 0) {
        console.warn('[CREOVO SPAM FILTER] Honeypot triggered. Silently discarded bot submission.');
        res.status(200).json({
          success: true,
          message: 'Thank you — your project inquiry has been sent.',
        });
        return;
      }

      // 4. Strict Server-Side Validation
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
        res.status(400).json({
          success: false,
          error: 'Please enter your name.',
        });
        return;
      }

      if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
        res.status(400).json({
          success: false,
          error: 'Please enter a valid email address.',
        });
        return;
      }

      if (!trimmedDetails || trimmedDetails.length < 5) {
        res.status(400).json({
          success: false,
          error: 'Please share your project details (at least 5 characters).',
        });
        return;
      }

      // 5. Resolve Environment & Secrets (Canonical CRE.OVO11@GMAIL.COM)
      const apiKey = process.env.EMAIL_SERVICE_API_KEY;
      const toEmail = process.env.CREOVO_EMAIL || 'CRE.OVO11@GMAIL.COM';
      const fromEmail = process.env.CREOVO_FROM_EMAIL || 'CREOVO Inquiries <onboarding@resend.dev>';

      // 6. Build Clean Plaintext Email Content matching specification
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

      // 7. Check if API credentials are configured
      if (!apiKey) {
        console.error('[CREOVO EMAIL SERVICE] EMAIL_SERVICE_API_KEY is not configured in Cloud Functions environment.');
        console.log('[CREOVO ENQUIRY LOGGED SERVER-SIDE]:\n', textBody);

        res.status(500).json({
          success: false,
          error: 'Something went wrong. Please try again or contact us directly.',
        });
        return;
      }

      // 8. Dispatch to Resend Email Provider
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
        res.status(200).json({
          success: true,
          message: 'Thank you — your project inquiry has been sent.',
        });
      } else {
        const errorText = await resendResponse.text();
        console.error(`[CREOVO EMAIL SERVICE] Resend API error (${resendResponse.status}):`, errorText);
        res.status(502).json({
          success: false,
          error: 'Something went wrong. Please try again or contact us directly.',
        });
      }
    } catch (err: any) {
      console.error('[CREOVO EMAIL SERVICE] Unexpected error during contact dispatch:', err?.message || err);
      res.status(500).json({
        success: false,
        error: 'Something went wrong. Please try again or contact us directly.',
      });
    }
  }
);

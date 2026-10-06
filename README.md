# CREOVO Agency

CREOVO is a creative digital agency website built with React, Vite, and Tailwind CSS. It showcases the agency’s services, case-study style pages, contact flow, and a Firebase-powered inquiry endpoint for project submissions.

## Overview

This project includes:
- a multi-page agency landing experience built in React
- polished editorial styling with Tailwind utilities
- hash-based client-side navigation for SPA-like browsing
- WhatsApp and email inquiry actions
- a Firebase Cloud Function for secure contact form submissions via Resend

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Firebase Hosting
- Firebase Functions
- Resend email API

## Project Structure

```text
cre.ovo/
├── api/
│   └── contact.ts
├── functions/
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       └── index.ts
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── components/
│   ├── config/
│   ├── data/
│   ├── pages/
│   └── types/
├── firebase.json
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Prerequisites

Before running the project locally, make sure you have:
- Node.js 18+ or 20+
- npm
- Firebase CLI (for deployment and function emulation)

## Local Development

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Firebase Functions Setup

The backend contact API is stored under the `functions` folder.

Install function dependencies:

```bash
cd functions
npm install
```

Run the functions locally with the Firebase emulator:

```bash
firebase emulators:start --only functions
```

## Environment Variables

Set the following values in your Firebase environment or local environment configuration as needed.

```bash
EMAIL_SERVICE_API_KEY=your_resend_api_key
CREOVO_EMAIL=CRE.OVO11@GMAIL.COM
VITE_CREOVO_WHATSAPP_NUMBER=917483988674
```

Notes:
- `EMAIL_SERVICE_API_KEY` is required for the contact form to send emails via Resend.
- `CREOVO_EMAIL` can be used to override the destination inbox.
- `VITE_CREOVO_WHATSAPP_NUMBER` is used to generate the WhatsApp inquiry link.

## Contact Form Behavior

The contact API validates:
- name
- valid email
- project details
- honeypot spam blocking

It sends an inquiry to the configured email provider and returns a success or error JSON response.

## Deployment

Deploy the frontend and functions to Firebase:

```bash
firebase deploy
```

The hosting configuration in `firebase.json` serves the static build from `dist` and rewrites the `/api/contact` route to the Firebase function.

## License

This project is currently intended for the CREOVO brand and its internal business use.

## Maintainer

CREOVO Creative Digital Agency.

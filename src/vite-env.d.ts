/// <reference types="vite/client" />

/**
 * Extend Vite's ImportMetaEnv with CREOVO-specific VITE_ variables.
 * Only VITE_* variables are exposed to the browser bundle.
 * All other variables (EMAIL_SERVICE_API_KEY, etc.) remain server-side only.
 */
interface ImportMetaEnv {
  /** CREOVO WhatsApp number — digits only, with country code (e.g. 917483988674) */
  readonly VITE_CREOVO_WHATSAPP_NUMBER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

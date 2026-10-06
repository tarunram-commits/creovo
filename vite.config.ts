import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { processContactRequest } from './api/contact';

function creovoApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'creovo-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/contact' && req.method === 'POST') {
          let body = '';
          let tooLarge = false;

          req.on('data', (chunk) => {
            body += chunk;
            if (body.length > 50 * 1024) { // 50KB safe limit
              tooLarge = true;
              res.writeHead(413, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: 'Payload too large.' }));
              req.destroy();
            }
          });

          req.on('end', async () => {
            if (tooLarge) return;

            try {
              const data = JSON.parse(body || '{}');
              const mergedEnv = { ...process.env, ...env };
              const result = await processContactRequest(data, mergedEnv);
              
              res.writeHead(result.status, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(result.data));
            } catch (err: any) {
              console.error('[CREOVO API MIDDLEWARE ERROR]', err?.message || err);
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: 'Invalid JSON request format.' }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), creovoApiPlugin(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5173,
      host: true,
    },
  };
});

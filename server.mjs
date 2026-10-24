import express from 'express';
import compression from 'compression';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');

// Middleware
app.use(compression());
app.use(express.json());

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Health check endpoint for Docker / Coolify
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'ghanaopenai-website',
    domain: 'ghanaopenai.org',
    uptime: process.uptime(),
  });
});

// Static assets with caching headers
app.use('/_astro', express.static(path.join(DIST_DIR, '_astro'), {
  maxAge: '1y',
  immutable: true,
}));

// Serve built Astro static site
app.use(express.static(DIST_DIR, {
  extensions: ['html'],
  maxAge: '1h',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }
  },
}));

// 404 handler
app.use((req, res) => {
  const notFoundPath = path.join(DIST_DIR, '404.html');
  if (fs.existsSync(notFoundPath)) {
    res.status(404).sendFile(notFoundPath);
  } else {
    res.status(404).send('404 Not Found');
  }
});

// Start listening
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`[server] Ghana Open AI website running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('[server] SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('[server] HTTP server closed');
    process.exit(0);
  });
});

const isDevelopment = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/e/:emoji',
        destination: '/api/emoji?emoji=:emoji',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        // Security Headers based on: https://nextjs.org/docs/advanced-features/security-headers
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

const withProgressiveWebApplication = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: isDevelopment,
});

const plugins = [withProgressiveWebApplication];

module.exports = () => {
  return plugins.reduce((config, plugin) => plugin(config), {
    ...nextConfig,
  });
};

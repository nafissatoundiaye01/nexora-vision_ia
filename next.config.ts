import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Configuration pour les fichiers statiques
  experimental: {
    serverActions: {
      bodySizeLimit: '500mb',
    },
  },

  // Headers pour les vidéos
  async headers() {
    return [
      {
        source: '/:path*.mp4',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

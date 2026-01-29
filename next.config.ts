import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/principal-message',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

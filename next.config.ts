import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // This is required to allow cross-origin requests in development.
    // The value is specific to the Cloud Workstations environment.
    allowedDevOrigins: [
      'https://6000-firebase-studio-1758582512850.cluster-hkcruqmgzbd2aqcdnktmz6k7ba.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;

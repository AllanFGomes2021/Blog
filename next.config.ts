import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  /*
  experimental: {
    useCache: true,
    agentFeedback: true,

    unstable_cacheLife: {
      seconds: {
        stale: 0,
        revalidate: 10,
        expire: 10,
      },
    },
  },
  cacheComponents: true,
  partialPrefetching: true,
  */
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;

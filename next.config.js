/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add rule for Monaco Editor
    config.module.rules.push({
      test: /\.ttf$/,
      type: 'asset/resource'
    });

    // Configure Monaco Editor workers
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig; 
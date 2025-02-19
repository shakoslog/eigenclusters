const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

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
      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: ['json'],
          filename: 'static/[name].worker.js',
        })
      );
    }

    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 
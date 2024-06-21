/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude node-pre-gyp from client side bundle
      config.externals.push('@mapbox/node-pre-gyp');
    }

    config.module.rules.push({
      test: /\.html$/,
      use: ['html-loader'],
    });

    return config;
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "encrypted-tbn0.gstatic.com",
      "m.media-amazon.com",
      "vibegaming.com.bd",
      "i.rtings.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;

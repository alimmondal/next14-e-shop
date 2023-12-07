/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "encrypted-tbn0.gstatic.com",
      "m.media-amazon.com",
      "vibegaming.com.bd",
      "i.rtings.com",
    ],
  },
};

module.exports = nextConfig;

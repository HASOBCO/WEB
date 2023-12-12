/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
        { hostname: 'i.ibb.co' },
    ],
},
    optimizeFonts: false, // Keep this as is if you need to disable font optimization
};

module.exports = nextConfig;
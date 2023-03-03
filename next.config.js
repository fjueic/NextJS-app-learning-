/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    optimizeFonts: false,
    env: {
        API_KEY: process.env.API_KEY,
    },
    images: {
        domains: ["image.tmdb.org"],
    },
};

module.exports = nextConfig;

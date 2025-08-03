/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'web-tv-app.vercel.app',
                pathname: '/images/**',
            },
            {
                protocol: 'http',  // add this to allow http images too
                hostname: 'web-tv-app.vercel.app',
                pathname: '/images/**',
            },
        ],
    },
};

module.exports = nextConfig;

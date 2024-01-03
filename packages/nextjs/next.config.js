// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "https://jade-hungry-piranha.cyclic.app/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

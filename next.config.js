/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["onedrive.live.com", "s3-alpha-sig.figma.com"],
  },
};

module.exports = nextConfig;

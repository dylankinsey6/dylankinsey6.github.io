/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true, // Ensures directory-style URLs (needed for GitHub Pages)
  assetPrefix: 'https://dylankinsey6.github.io',
};

module.exports = nextConfig;

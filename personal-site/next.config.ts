import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/dylankinsey6.github.io',
  assetPrefix: '/dylankinsey6.github.io'
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: [{
    source: '/(.*)',
    destination: '/',
  }]
}

module.exports = nextConfig

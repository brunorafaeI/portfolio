/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  rewrites: [{
    source: '/(.*)',
    destination: '/',
  }]
}

module.exports = nextConfig

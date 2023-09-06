/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'static.wikia.nocookie.net',
          port: '',
          pathname: '/yugiohenespanol/images/**',
        },
      ]
    }
  }
  const dns = require("dns");
  
  dns.setDefaultResultOrder("ipv4first")
  
  module.exports = nextConfig
  
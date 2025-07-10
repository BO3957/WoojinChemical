/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Vercel 최적화 설정
  experimental: {
    optimizeCss: true,
  },
  // 이미지 도메인 설정 (필요시)
  images: {
    domains: [],
    unoptimized: false,
  },
}

module.exports = nextConfig

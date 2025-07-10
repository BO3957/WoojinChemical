/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Vercel 배포 설정
  trailingSlash: false,
  // 도메인 설정
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  // 이미지 도메인 설정 (필요시)
  images: {
    domains: [],
  },
}

module.exports = nextConfig

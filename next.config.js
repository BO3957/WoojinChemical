/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
  // 정적 파일 서빙 설정
  trailingSlash: false,
  // 이미지 도메인 설정 (필요시)
  images: {
    domains: [],
  },
}

module.exports = nextConfig

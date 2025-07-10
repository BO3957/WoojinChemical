/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // GitHub Pages 배포 설정
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/WoojinChemical' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/WoojinChemical' : '',
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
    unoptimized: true,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository is NOT named "rudransmathur.github.io", 
  // uncomment the line below and replace it with your exact repository name:
  // basePath: '/your-repository-name', 
};

module.exports = nextConfig;

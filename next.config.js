/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserSite = repositoryName === 'rudransmathur.github.io';

const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS && repositoryName && !isUserSite
    ? `/${repositoryName}`
    : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

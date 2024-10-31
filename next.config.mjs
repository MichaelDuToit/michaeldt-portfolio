import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack(config){
    config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false
    }
    return config;
  }
}

const withMDX = createMDX({});

export default withMDX(nextConfig);

import nextra from 'nextra';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  // Add the nextra plugin and theme
  ...nextra('nextra-theme-blog', './theme.config.js')(),
};

export default nextConfig;
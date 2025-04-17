export default {
  // reactStrictMode: true,
  // swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blabla.com',
        port: '',
        pathname: '/custom-path/**/*.*',
      },
    ],
  },
};

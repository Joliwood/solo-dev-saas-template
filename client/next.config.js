module.exports = {
  reactStrictMode: true,
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
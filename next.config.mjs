/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/old-url',
          destination: '/new-url',
          permanent: true,
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/custom-route',
          destination: '/new-page', // internally maps to /new-page
        },
      ];
    },
  };
  
  export default nextConfig;
  
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "72.167.133.180"],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "http://72.167.133.180:3001",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;

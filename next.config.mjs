/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "backend.qcentrio.com", "72.167.133.180"],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "http://cms.qcentrio.com",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;

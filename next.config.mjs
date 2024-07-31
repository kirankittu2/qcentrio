/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "cms.qcentrio.com"],
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

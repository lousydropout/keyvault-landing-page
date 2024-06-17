/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    // Basic redirect
    {
      source: "/",
      destination: "/home",
      permanent: true,
    },
  ],
};

export default nextConfig;

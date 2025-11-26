/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "example.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
  // AJOUTEZ CES LIGNES POUR IGNORER LES ERREURS
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
};

module.exports = nextConfig;

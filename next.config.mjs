/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
    remotePatterns: [
     {
        protocol: 'https',
        hostname: 'via.placeholder.com', // pehle wala
      },
      {
        protocol: 'https',
        hostname: 'example.com', // apne image ka actual domain
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // agar cloudinary use kar rahe ho
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Commented out to allow 'npm start' to work
  // basePath: "/my-portfolio", // Commented out for local development to fix black screen
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

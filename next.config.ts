import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devServer: {
    host: "0.0.0.0", // Allow the server to listen on all network interfaces
    port: 3000, // Optional: Specify the port if needed
  },
};

export default nextConfig;

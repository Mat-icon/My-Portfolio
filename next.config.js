/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // FORCES WEBPACK (Fixes your Netlify + Turbopack error)
  },

  webpack: (config) => {
    // Add support for loading .mov & .mp4 files
    config.module.rules.push({
      test: /\.(mp4|mov)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  }
};

module.exports = nextConfig;

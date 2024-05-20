// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Add support for loading .mov files
      config.module.rules.push({
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      });
  
      // Important: return the modified config
      return config;
    },
  };
  
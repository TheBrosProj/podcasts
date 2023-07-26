// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Add the file-loader rule for .m4a files
    config.module.rules.push({
      test: /\.(m4a)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: isServer ? 'static/media/[name].[hash].[ext]' : 'static/media/[path][name].[hash].[ext]',
            publicPath: '/_next/',
            emitFile: !isServer,
          },
        },
      ],
    });

    return config;
  },
};

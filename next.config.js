const {resolve} = require("path")
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        options.defaultLoaders.babel,
        {loader: 'svg-sprite-loader', options: {}},
      ],
    })

    return config
  },
}

module.exports = nextConfig

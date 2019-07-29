const withImages = require('next-images');
const path = require('path');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = {
  webpack: (config, option) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.resolve.alias = {
      components: path.join(__dirname, 'components/*')
    }

    return config
  }
}

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
      const withSass = require('@zeit/next-sass');
      return withSass(
        withImages()
      );
    }
    return withImages();
};
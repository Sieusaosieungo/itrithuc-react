const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  distDir: 'build',
  pageExtensions: ['jsx', 'js'],
});

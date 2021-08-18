const withTreat = require('next-treat')()
const withSourceMaps = require('@zeit/next-source-maps')
// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = withSourceMaps(withTreat({}))
module.exports = withNx({
  target: 'experimental-serverless-trace', // <-
  trailingSlash: true,
  reactStrictMode: true,
  env: ...
})
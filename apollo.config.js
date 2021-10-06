module.exports = {
  client: {
    service: {
      name: 'vancover-dashboard',
      url: 'http://dev.spatialtech.info:8083/v1/graphql',
      skipSSLValidation: true
    },
    includes: [
      'src/**/*.graphql',
      'src/**/**/*.graphql',
      'src/**/**/**/*.graphql',
      'src/**/**/**/**/*.graphql'
    ]
  }
}

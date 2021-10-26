module.exports = {
  client: {
    service: {
      name: 'vancover-dashboard',
      url: 'https://spatialtech.herokuapp.com/http://dev.spatialtech.info:8083/v1/graphql',
      headers: {
        origin: "http://localhost:3000"
      },
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

module.exports = {
  projects: {
    gsttf: {
      schema: "src/generated/graphql.schema.json",
      documents: [
        "src/**/*.graphql",
        "src/**/**/*.graphql",
        "src/**/**/**/*.graphql",
        "src/**/**/**/**/*.graphql"
      ],
      extensions: {
        endpoints: {
          default: {
            url: 'https://spatialtech.herokuapp.com/http://dev.spatialtech.info:8083/v1/graphql',
          },
        },
      },
    },
  },
}
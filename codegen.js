module.exports = {
  schema: [{
      'http://176.37.101.31:8083/v1/graphql': {
          headers: {
              "X-Hasura-Admin-Secret": "As12345",
              "content-type": "application/json"
          },
      },
  }, ],
  //documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
      './src/generated/graphql.tsx': {
          plugins: [
              'typescript',
              'typescript-operations',
              'typescript-react-apollo',
          ],
          config: {
              skipTypename: false,
              withHooks: true,
              withHOC: false,
              withComponent: false,
          },
      },
      './graphql.schema.json': {
          plugins: ['introspection'],
      },
  },
};
module.exports = {
  client: {
    addTypename: true,
    includes: ['apollo/**/*.ts'],
    name: 'frontend',
    service: {
      name: 'servicepong',
      endpoint: {
        url: 'https://servicepong.cdn.prismic.io/graphql',
      },
    },
  },
};

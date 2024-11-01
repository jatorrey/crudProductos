const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schemas/productsSchema');
const resolvers = require('./resolvers/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));
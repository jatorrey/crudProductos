const { ApolloServer, gql } = require('apollo-server');
const productTypeDefs = require('./schemas/productsSchema');
const userTypeDefs = require('./schemas/usersSchema');
const resolvers = require('./resolvers/resolvers');

const server = new ApolloServer({ productTypeDefs, userTypeDefs, resolvers });

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));
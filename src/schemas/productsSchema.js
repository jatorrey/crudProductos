// schema.js

const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Product {
    id: String!
    name: String!
    description: String!
    price: Float!
    category: String!
    brand: String!
    qty: Int
    createdAt: Date
    img: [String]!
  }

  type Query {
    getProduct(id: String!): Product
    listProducts: [Product]
  }

  type Mutation {
    createProduct(
      name: String!
      description: String!
      price: Float!
      category: String!
      brand: String!
      qty: Int
      img: [String]!
    ): Product

    updateProduct(
      id: String!
      name: String
      description: String
      price: Float
      category: String
      brand: String
      qty: Int
      img: [String]
    ): Product

    deleteProduct(id: String!): Boolean
  }
`;

module.exports = typeDefs;
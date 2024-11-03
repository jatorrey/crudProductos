// usersSchema.js

const { gql } = require('apollo-server');

const userTypeDefs = gql`
  scalar Date

  type User {
    id: String!
    fullName: String!
    email: String!
    password: String!
    address: String!
    phoneNo: String!
    dateRegistered: Date
    userType: String!
    preferredPayMethod: [String]!
  }

  type Query {
    getUser(id: String!): User
    listUsers: [User]
  }

  type Mutation {
    createUser(
      fullName: String!
      email: String!
      password: String!
      address: String!
      phoneNo: String!
      userType: String!
      preferredPayMethod: [String]!
    ): User

    updateUser(
      id: String!
      fullName: String
      email: String
      password: String
      address: String
      phoneNo: String
      userType: String
      preferredPayMethod: [String]
    ): User

    deleteUser(id: String!): Boolean
  }
`;

module.exports = userTypeDefs;
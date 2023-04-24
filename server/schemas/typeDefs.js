const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Orders {
    _id: ID
    totalPrice: Int!
    paymentStatus: Boolean!
    users: Users!
    menus: [Menus]!
  }

  type Users {
    _id: ID
    username: String!
    email: String!
    password: String!
    userOrders: [Orders]
  }

  type Categories {
    _id: ID
    name: String!
  }

  type Menus {
    _id: ID
    name: String!
    description: String!
    image: String!
    price: Int!
    quantity: Int
    ingredients: String
    steps: String
    category: Categories
  }

  type Reviews {
    _id: ID
    description: String
    users: Users!
    menus: Menus
  }
`;
module.exports = typeDefs;

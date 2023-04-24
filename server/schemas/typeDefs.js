const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Orders {
    _id: ID
    totalPrice: Int!
    paymentStatus: Boolean!
    users: Users!
    menus: [Menus]!
    date: String!
  }

  type Users {
    _id: ID
    userName: String!
    email: String!
    password: String!
    pointBalance: Int
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
    date: String!
  }

  type Query {
    categories: [Categories]
  }
`;
module.exports = typeDefs;

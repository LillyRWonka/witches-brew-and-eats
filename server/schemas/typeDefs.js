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
    menus: Menus!
    date: String!
  }
  type MenuResponse {
    menu: Menus
    reviews: [Reviews]
  }

  type Auth {
    token: String
    user: Users
  }

  type Query {
    categories: [Categories]
    orders: [Orders]
    menus(categoryId: ID!): [Menus]
    menu(menuId: ID!): MenuResponse
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
   me: Users
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(userName: String!, email: String!, password: String!): Auth
    addReview(
      description: String!
      date: String!
      users: ID!
      menus: ID!
    ): Reviews
  }
`;
module.exports = typeDefs;

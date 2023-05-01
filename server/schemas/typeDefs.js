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
    pdf: String
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

  type Checkout {
    session: ID
  }

  input OrderMenus {
    _id: ID
    name: String!
    description: String!
    image: String!
    price: Int!
    quantity: Int
    ingredients: String
    steps: String
    category: ID
  }

  type Query {
    categories: [Categories]
    orders: [Orders]
    menus(categoryId: ID!): [Menus]
    menu(menuId: ID!): MenuResponse
    checkout(menus: [ID]!): Checkout
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Users
    getAllMenus: [Menus]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(userName: String!, email: String!, password: String!): Auth
    addReview(description: String!, users: ID!, menus: ID!): Reviews
    addOrder(menus: [OrderMenus]): Orders
    deleteReview(review: ID!): Reviews
    updatePoints(id: ID!, pointBalance: Int): Users
  }
`;
module.exports = typeDefs;

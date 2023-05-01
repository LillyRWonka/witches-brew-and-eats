import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($userName: String!, $email: String!, $password: String!) {
    createUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview($description: String!, $users: ID!, $menus: ID!) {
    addReview(description: $description, users: $users, menus: $menus) {
      _id
      description
      date
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($review: ID!) {
    deleteReview(review: $review) {
      _id
      description
    }
  }
`;

export const UPDATE_POINTS = gql`
  mutation updatePoints($id: ID!, $pointBalance: Int) {
    updatePoints(_id: $id, pointBalance: $pointBalance) {
      _id
      userName
      email
      password
      pointBalance
    }
  }
`;

export const ADD_ORDER = gql`
  mutation AddOrder($menus: [OrderMenus]) {
    addOrder(menus: $menus) {
      _id
      date
      paymentStatus
      totalPrice
      menus {
        name
        _id
        description
        image
        ingredients
        price
        quantity
        steps
      }
    }
  }
`;

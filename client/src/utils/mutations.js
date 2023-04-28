import { gql } from '@apollo/client';

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
  mutation addReview($description: String!, $date: String!, $users: ID!, $menus: ID!) {
    addReview(description: $description, date: $date, users: $users, menus: $menus){
      _id,
      description
      users
      menus
      date
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($review: ID!) {
    deleteReview(review: $review){
        _id,
        description
        users
        menus
        date  
    }
  }
`;


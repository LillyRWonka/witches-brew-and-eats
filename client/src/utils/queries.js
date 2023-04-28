import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      userName
      email
      pointBalance
    }
  }
`;

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      _id
      name
    }
  }
`;

export const GET_ORDERS = gql`
  query orders {
    orders {
      _id
      totalPrice
      paymentStatus
      date
      users
      date
      menus {
        _id
        name
        description
        image
        price
        quantity
        ingredients
        steps
        category
      }
    }
  }
`;

export const GET_MENU_ON_CATEGORY = gql`
  query menus($categoryId: ID!) {
    menus {
      _id
      name
      description
      image
      price
      quantity
      ingredients
      steps
      category
    }
  }
`;

export const GET_MENU_RESPONSES = gql`
  query menu($menuId: ID!) {
    MenuResponse {
      menu {
        _id
        name
        description
        image
        price
        quantity
        ingredients
        steps
        category
      }
      reviews {
        _id
        description
        users
        menus
        date
      }
    }
  }
`;
export const QUERY_CHECKOUT = gql`
  query Checkout($menus: [ID]!) {
    checkout(menus: $menus) {
      session
    }
  }
`;

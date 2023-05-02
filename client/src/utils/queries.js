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
      menus {
        _id
        name
        description
        image
        price
        quantity
        ingredients
        steps
        pdf
      }
    }
  }
`;

export const GET_MENU_ON_CATEGORY = gql`
  query Menus($categoryId: ID!) {
    menus(categoryId: $categoryId) {
      _id
      name
      description
      image
      price
      quantity
      ingredients
      steps
      category {
        name
        _id
      }
    }
  }
`;

export const GET_MENU_RESPONSES = gql`
  query Query($menuId: ID!) {
    menu(menuId: $menuId) {
      menu {
        name
        _id
        category {
          _id
          name
        }
        description
        image
        ingredients
        price
        quantity
        steps
        pdf
      }
      reviews {
        _id
        date
        description
        users {
          _id
          email
          password
          pointBalance
          userName
        }
      }
    }
  }
`;
export const QUERY_CHECKOUT = gql`
  query Checkout($menus: [ID]!, $totalPrice: Int!) {
    checkout(menus: $menus, totalPrice: $totalPrice) {
      session
    }
  }
`;
export const GET_ALL_MENU = gql`
  query getAllMenus {
    getAllMenus {
      _id
      name
      category {
        name
      }
    }
  }
`;

const { AuthenticationError } = require("apollo-server-express");
const { Categories, Users, Orders, Menus, Reviews } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Categories.find({});
    },
    orders: async (parent, args, context) => {
      if (context.user) {
        return Orders.find({ users: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    menus: async (parent, args) => {
      // Use the parameter to find the matching menu in the collection based on the category id
      return await Menus.find({ category: args.categoryId });
    },
    menu: async (parent, args) => {
      const menu = await Menus.findOne({ _id: args.menuId });
      const reviews = await Reviews.find({ menus: args.menuId });

      return { menu, reviews };
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await Users.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    createUser: async (parent, { userName, email, password }) => {
      const user = await Users.create({ userName, email, password });
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;

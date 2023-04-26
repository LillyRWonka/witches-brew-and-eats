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
    menus: async (parent, args, context) => {
      // Use the parameter to find the matching menu in the collection based on the category id
      if (context.user) {
        return await Menus.find({ category: args.categoryId });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    menu: async (parent, args, context) => {
      if (context.user) {
        const menu = await Menus.findOne({ _id: args.menuId });
        const reviews = await Reviews.find({ menus: args.menuId });

        return { menu, reviews };
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //EC: Add "me" query:
    me: async (parent, args, context) => {
      if (context.user) {
        return Users.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
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
    addReview: async (parent, { description, date, users, menus }, context) => {
      if (context.user) {
        const review = await Reviews.create({
          description,
          date,
          users,
          menus,
        });

        return review;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;

const { AuthenticationError } = require("apollo-server-express");
const { Categories, Users, Orders } = require("../models");
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

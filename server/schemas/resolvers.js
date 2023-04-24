const { Categories, Users } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return await Categories.find({});
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
  },
};

module.exports = resolvers;

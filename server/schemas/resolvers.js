const { Categories } = require("../models");

const resolvers = {
  Query: {
    categories: async () => {
      return await Categories.find({});
    },
  },
};

module.exports = resolvers;

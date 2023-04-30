const { AuthenticationError } = require("apollo-server-express");
const { Categories, Users, Orders, Menus, Reviews } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    categories: async () => {
      return await Categories.find({});
    },
    orders: async (parent, args, context) => {
      if (context.user) {
        return Orders.find({ users: context.user._id })
          .populate({ path: "menus", populate: { path: "category" } })
          .populate("users");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    menus: async (parent, args, context) => {
      // Use the parameter to find the matching menu in the collection based on the category id
      return await Menus.find({ category: args.categoryId }).populate(
        "category"
      );
    },
    menu: async (parent, args, context) => {
      const menu = await Menus.findOne({ _id: args.menuId });
      const reviews = await Reviews.find({ menus: args.menuId });

      return { menu, reviews };
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Orders({ menus: args.menus });
      const line_items = [];

      const { menus } = await order.populate("menus");

      for (let i = 0; i < menus.length; i++) {
        const product = await stripe.products.create({
          name: menus[i].name,
          description: menus[i].description,
          images: [`${url}/images/${menus[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: menus[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
    //EC: Add "me" query:
    me: async (parent, args, context) => {
      if (context.user) {
        return Users.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    getAllMenus: async (parent, args, context) => {
      // Use the parameter to find the matching menu in the collection
      return await Menus.find({}).populate("category");
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
    addOrder: async (parent, args, context) => {
      if (context.user) {
        const order = new Orders({ menus: args.menus });
        let total_price = 0;

        const { menus } = await order.populate("menus");

        for (let i = 0; i < menus.length; i++) {
          total_price += menus[0].price;
        }
        order.totalPrice = total_price;
        order.users = context.user._id;
        order.paymentStatus = true;
        order.save();

        return order;
      }
      throw new AuthenticationError("Not logged in");
    },
    deleteReview: async (parent, args, context) => {
      if (context.user) {
        return Reviews.deleteOne({ _id: args.review });
      }
      throw new AuthenticationError("Not logged in");
    },
    updatePoints: async (parent, { pointBalance }, context) => {
      if (context.user) {
        return Users.findOneAndUpdate(
          { _id: context.user._id },
          { pointBalance },
          { new: true }
        );
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;

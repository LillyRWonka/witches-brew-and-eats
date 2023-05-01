const { Schema, model } = require("mongoose");
const Menus = require("./Menus");

const ordersSchema = new Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    required: true,
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  menus: [Menus.schema],
});

const Orders = model("Orders", ordersSchema);

module.exports = Orders;

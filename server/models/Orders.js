const { Schema, model } = require("mongoose");

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
  menus: [
    {
      type: Schema.Types.ObjectId,
      ref: "Menus",
      required: true,
    },
  ],
});

const Orders = model("Orders", ordersSchema);

module.exports = Orders;

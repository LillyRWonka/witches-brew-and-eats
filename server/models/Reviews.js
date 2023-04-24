const { Schema, model } = require("mongoose");

const reviewsSchema = new Schema({
  description: {
    type: String,
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  menus: {
    type: Schema.Types.ObjectId,
    ref: "Menus",
  },
});

const Reviews = model("Reviews", reviewsSchema);

module.exports = Reviews;

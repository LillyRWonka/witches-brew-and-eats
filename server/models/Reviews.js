const { Schema, model } = require("mongoose");

const reviewsSchema = new Schema({
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  menus: {
    type: Schema.Types.ObjectId,
    ref: "Menus",
    required: true,
  },
});

const Reviews = model("Reviews", reviewsSchema);

module.exports = Reviews;

const { Schema, model } = require("mongoose");

const menusSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
  },
  ingredients: {
    type: String,
  },
  steps: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
  },
});

const Menus = model("Menus", menusSchema);

module.exports = Menus;

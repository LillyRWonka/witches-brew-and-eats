const { Schema, model } = require("mongoose");

const categoriesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Categories = model("Categories", categoriesSchema);

module.exports = Categories;

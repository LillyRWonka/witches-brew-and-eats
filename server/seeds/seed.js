const db = require("../config/connection");
const { Categories, Menus } = require("../models");

const menus = require("./menus.json");
const categories = require("./categories.json");

db.once("open", async () => {
  // clean database
  await Categories.deleteMany({});
  await Menus.deleteMany({});

  // bulk create each model
  const allCategories = await Categories.insertMany(categories);

  for (eachMenu of menus) {
    const foundCategory = allCategories.find(
      (category) => category.name === eachMenu.category
    );
    delete eachMenu.category;
    eachMenu.category = foundCategory._id;
    await Menus.create(eachMenu);
  }

  console.log("all done!");
  process.exit(0);
});

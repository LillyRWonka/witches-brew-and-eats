//EC: function make a search to EDAMAM api
const appKey = process.env.EDAMAM_APP_KEY;
const appId = process.env.EDAMAM_APP_ID;

require('dotenv').config();

export const getNutritionAPI = (ingredients) => {
    const query = encodeURIComponent(ingredients);
    return fetch(`https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&nutrition-type=cooking&ingr=${query}`);
  };
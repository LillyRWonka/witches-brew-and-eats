//TODO: fetch the API keys here from server
const appId = process.env.REACT_APP_EDAMAM_APP_ID;
const appKey = process.env.REACT_APP_EDAMAM_APP_KEY;

//EC: function make a search to EDAMAM api
export const getNutritionAPI = (ingredients) => {
  const query = encodeURIComponent(ingredients);
  return fetch(
    `https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${appKey}&type=public&q=${query}`
  );
};

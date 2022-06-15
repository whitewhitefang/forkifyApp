import { API_URL, API_KEY, SEARCH_RESULTS_PER_PAGE } from "./config";
import { ajax } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    searchResults: [],
    page: 1,
    resultsPerPage: SEARCH_RESULTS_PER_PAGE,
    initSearchResults: []
  },
  bookmarks: []
};
/**
 * Creating a recipe object from the original object
 * @param {Object | Object[]} realRecipe The original data
 * @returns {undefined | string} Markup string is returned if render is true
 */
export const createRecipeObject = function(realRecipe) {
  return {
    id: realRecipe.data.recipe.id,
    title: realRecipe.data.recipe.title,
    publisher: realRecipe.data.recipe.publisher,
    sourceUrl: realRecipe.data.recipe.source_url,
    ingredients: realRecipe.data.recipe.ingredients,
    image: realRecipe.data.recipe.image_url,
    cooking_time: realRecipe.data.recipe.cooking_time, 
    servings: realRecipe.data.recipe.servings,
    /**optional key field */
    ...(realRecipe.data.recipe.key && {key: realRecipe.data.recipe.key})
  };
}
export const loadRecipe = async function(id) {
  try {
    const realRecipe = await ajax(`${API_URL}${id}?key=${API_KEY}`); 
    const recipe = createRecipeObject(realRecipe);
    if (state.bookmarks.some(rec => rec.id === recipe.id)) {
      recipe.bookmarked = true;
    } else {
      recipe.bookmarked = false;
    }
    state.recipe = recipe;
  } catch(err) {
      console.log(err);
      throw err;
  }  
};
export const loadSearchResults = async function(searchedRecipe) {
  try {
    state.search.query = searchedRecipe;
    state.search.page = 1;
    const results = await ajax(`${API_URL}?search=${state.search.query}&key=${API_KEY}`);
    state.search.searchResults = state.search.initSearchResults = results.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        cookingTime: recipe.cooking_time,
        ...(recipe.key && {key: recipe.key})
      };
    });
  } catch(err) {
    console.log(err);
    throw err;
  }
}
export const sortResults = function(results, type) {
  const resultsArray = [...results];
  if (type === "none") {
    state.search.searchResults = state.search.initSearchResults;
  }
  if (type === "time") {
    state.search.searchResults = state.search.initSearchResults;
  }
  if (type === "name") {
    resultsArray.sort((a, b) => {
      const aName = a.title.toLowerCase();
      const bName = b.title.toLowerCase();
      if (aName < bName) {
        return -1;
      }
      if (aName > bName) {
        return 1;
      }
      return 0;
    })
    state.search.searchResults = resultsArray;
  }
}
export const getSearchResultsPage = function(page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.searchResults.slice(start, end);
}
export const updateServings = function(nums) {
  state.recipe.ingredients.forEach(ingr => {
    if (+ingr.quantity) {
      ingr.quantity = (+ingr.quantity / state.recipe.servings * nums).toFixed(1);
    }    
  })
  state.recipe.servings = nums;
}
export const persistBookmarks = function() {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
}
export const addBookmark = function(recipe) {
  state.bookmarks.push(recipe);
  if (recipe.id === state.recipe.id) {
    state.recipe.bookmarked = true;
  } 
  persistBookmarks();
}
export const deleteBookmark = function(recipeId) {  
  state.bookmarks.splice(state.bookmarks.findIndex(rec => rec.id === recipeId), 1);
  if (recipeId === state.recipe.id) {
    state.recipe.bookmarked = false;
  } 
  persistBookmarks();
}
export const uploadRecipe = async function(data) {
  try {
    const ingredients = Object.entries(data)
      .filter(entry => entry[0].includes("ingredient") && entry[1] !== "")
      .map(engr => {
        const engrArr = engr[1]
          .split(",")
          .map(el => el.trim());
        if (engrArr.length !== 3) {
          throw new Error("Encorrect format of engredient's input - input in order quantity, unit, description separated with commas");
        }
        if (isNaN(+engrArr[0])) {
          throw new Error("Encorrect format of engredient's input - input quantity in numbers");
        }
        const [quantity, unit, description] = engrArr;
        return {quantity: quantity ? +quantity : null, unit, description};
      }); 
    const recipe = {
      title: data.title,
      publisher: data.publisher,
      source_url: data.sourceUrl,   
      ingredients,
      cooking_time: +data.cookingTime,
      image_url: data.image,
      servings: +data.servings,
      key: API_KEY
    };
    const uploadRequest = await ajax(`${API_URL}?key=${API_KEY}`, recipe);
    if (uploadRequest.status === "success") {      
      state.recipe = createRecipeObject(uploadRequest);
      addBookmark(state.recipe);
    } else {
      throw new Error("Sorry, something got wrong");
    }
  } catch(err) {
    throw err;
  } 
}
const init = function() {
  const storage = localStorage.getItem('bookmarks') || [];
  if (storage.length) {
    // localStorage.clear();
    state.bookmarks = JSON.parse(storage);
  }
} 
init();
import { API_URL, API_KEY, SEARCH_RESULTS_PER_PAGE, SPOON_API_KEY } from "./config";
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
  bookmarks: [],
  widjet: "", 
  products: []
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
    productsAreAdded: false,
    /**optional key field */
    ...(realRecipe.data.recipe.key && {key: realRecipe.data.recipe.key})
  };
}

export const getNutrition = async function(recipe) {
  try {
    const recipeOnSpoon = await ajax(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOON_API_KEY}&query=${recipe}&number=1`);
    if (!recipeOnSpoon.results.length) return;
    const id = recipeOnSpoon.results[0].id;    
    if (!id) {
      state.widjet = {};
      return;
    } else {
      const widjetRequest = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionLabel?apiKey=${SPOON_API_KEY}`, {
        method: "GET",
        headers: {
          "Content-Type": "text/html"
        }
      });
      if (!widjetRequest.ok) {      
        throw new Error('Problem with getting widjet');
      }
      const widjet = await widjetRequest.text();
      state.widjet = widjet;
    }    
  } catch(e) {
    console.log(e);
    throw new Error(e.message);
  }
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
      ingr.quantity = (Math.abs(+ingr.quantity) / state.recipe.servings * nums).toFixed(1);
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

export const persistProducts = function() {
  localStorage.setItem("products", JSON.stringify(state.products));
}

export const addProduct = function() {
  if (state.products.length === 0) {
    state.products = [...state.recipe.ingredients];
  } else {
    let newArrOfProducts = [...state.products];
    state.recipe.ingredients.forEach(product => {
      let renewedProduct = newArrOfProducts.find(prod => prod.description === product.description && prod.unit === product.unit);
      if (renewedProduct) {
        renewedProduct.quantity += Math.abs(+product.quantity);
        newArrOfProducts.splice(newArrOfProducts.indexOf(renewedProduct), renewedProduct);
      } else {
        newArrOfProducts.push(product);
      }    
    })
    state.products = [...newArrOfProducts];  
  }  
  let arrOfProducts = state.products;
  arrOfProducts.map(product => product.key = arrOfProducts.indexOf(product));
  state.products = [...arrOfProducts];
  state.recipe.productsAreAdded = true;
  persistProducts();
}

export const removeProduct = function(id) {
  let newArrOfProducts = state.products.filter(product => product.key !== id);
  state.products = newArrOfProducts;
  persistProducts();
}

export const removeAllProducts = function() {
  state.products = [];
  state.recipe.productsAreAdded = false;
  persistProducts();
}

export const uploadRecipe = async function(data) {
  try {
    let ingrArr = []
    const ingredients = Object.entries(data).filter(ingr => ingr[0].includes('ingredient'));
    ingredients.forEach(ingr => {
      if (!ingrArr[+ingr[0].substring(11, 12)]) {
        ingrArr[+ingr[0].substring(11, 12)] = [];
      }
      ingrArr[+ingr[0].substring(11, 12)].push(ingr);
    });    
    let finalIngredientsArr = [];    
    for (let i = 0; i < ingrArr.length; i++) {
      let ingredient = {};
      ingrArr[i].forEach(ingr => {        
        if (ingr[0].includes('product')) {
          ingredient.description = ingr[1];
        }
        if (ingr[0].includes('quantity')) {
          ingredient.quantity = ingr[1];
        }
        if (ingr[0].includes('unit')) {
          ingredient.unit = ingr[1];
        }             
      });
      finalIngredientsArr.push(ingredient);
    };
    const recipe = {
      title: data.title,
      publisher: data.publisher,
      source_url: data.sourceUrl,   
      ingredients: finalIngredientsArr,
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
  const products = localStorage.getItem('products') || [];
  if (products.length) {
    state.products = JSON.parse(products);
  }
} 

init();
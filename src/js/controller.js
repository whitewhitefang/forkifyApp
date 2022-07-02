import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import bookmarksView from './views/bookmarksView';
import paginationView from './views/paginationView';
import addRecipeView from './views/addRecipeView';
import ingredientsView from './views/ingredientsView';
import productsView from './views/productsView';
import { MODAL_CLOSE_MILSECS } from './config';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    resultsView.update(model.getSearchResultsPage());
    await model.loadRecipe(id);
    await model.getNutrition(model.state.recipe.title); 
    if (model.state.widjet) {
      recipeView.getWidjet(model.state.widjet);  
    }
    recipeView.render(model.state.recipe);     
    bookmarksView.update(model.state.bookmarks);
  } catch(err) {
    console.error(err);
    recipeView.renderError();
  }
}

const searchRecipes = async function() {
  try {    
    const query = searchView.getQuery();
    if (!query || query === "") {
      resultsView.renderError("You did not write any seeking word");
    } else {
      resultsView.renderSpinner();
      await model.loadSearchResults(query);
      resultsView.render(model.getSearchResultsPage());   
      paginationView.render(model.state.search); 
    }    
  } catch(err) {
    console.log(err);
  }
}

const controlPagination = function(goto) {
  resultsView.render(model.getSearchResultsPage(goto));
  paginationView.render(model.state.search);
}

const controlServings = function(num) {  
  model.updateServings(num);
  recipeView.update(model.state.recipe); 
}

const controlAddBookmark = function() {
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  recipeView.update(model.state.recipe);
  bookmarksView.render(model.state.bookmarks); 
}

const controlBookmarks = function() {
  bookmarksView.render(model.state.bookmarks);
}

const controlUploadRecipe = async function(data) {
  try {
    addRecipeView.renderSpinner();
    await model.uploadRecipe(data);    
    recipeView.render(model.state.recipe);   
    addRecipeView.renderMessage();
    bookmarksView.render(model.state.bookmarks);
    window.history.pushState(null, "", `#${model.state.recipe.id}`);    
    setTimeout(function() {
      addRecipeView.toggleWindow();      
    }, MODAL_CLOSE_MILSECS);    
  } catch(err) {    
    console.error(err);   
    addRecipeView.renderError(err.message);
    setTimeout(function() {
      window.location.reload();      
    }, MODAL_CLOSE_MILSECS);    
  }  
}

const controlIngredients = function(type) {
  if (type === "add") {
    ingredientsView.showIngredients();    
  } else if (type === "remove") {
    ingredientsView.removeProduct();
  }
}

const controlSorting = function(type) {
  model.sortResults(model.state.search.searchResults, type);
  resultsView.render(model.state.search.searchResults);
  resultsView.render(model.getSearchResultsPage(1));
  paginationView.render(model.state.search); 
}

const controlProducts = function() {
  if (model.state.products.length > 0) {
    productsView.render(model.state.products);
  }
}

const controlAddProducts = function() {
  model.addProduct();
  productsView.render(model.state.products);
  recipeView.update(model.state.recipe);
}

const controlRemoveProduct = function(id) {
  model.removeProduct(id);
  productsView.render(model.state.products);
}

const controlRemoveAllProducts = function() {
  model.removeAllProducts();
  productsView.render(model.state.products);
  recipeView.update(model.state.recipe);
}

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(searchRecipes);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerChangeServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  bookmarksView.addHandlerRender(controlBookmarks);
  addRecipeView.addHandlerUpload(controlUploadRecipe);
  resultsView.addHandlerSort(controlSorting);
  ingredientsView.addProductHandler(controlIngredients);
  productsView.addHandlerRender(controlProducts);
  productsView.addHandlerRemoveProduct(controlRemoveProduct);
  productsView.addHandlerRemoveAll(controlRemoveAllProducts);
  recipeView.addHandlerAddProduct(controlAddProducts);
}

init();

// https://forkify-api.herokuapp.com/v2
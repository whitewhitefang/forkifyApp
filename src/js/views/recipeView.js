import View from './view';
import fracty from 'fracty';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';
  searchedRecipe = "";  
  addHandlerRender(handler) {
    const events = ['hashchange', 'load'];
    events.forEach(event => window.addEventListener(event, handler));
  }  
  addHandlerChangeServings(handler) {
    this._parentElement.addEventListener('click', function(event) {
      const btn = event.target.closest('.btn--tiny');
      if (!btn) return;
      const {changeto} = btn.dataset;
      if (+changeto > 0 && +changeto <= 10) {
        handler(+changeto);        
      }      
    });
  }
  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', function(event) {
      if (!event.target.closest('.btn--bookmark')) return;
      handler();
    })
  }
  _generateMarkup() {
    return `            
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title} class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${this._icons}#icon-clock"></use>
          </svg>
          <span>${this._data.cooking_time}</span>
        </div>
        <div class="recipe__info">          
          <svg class="recipe__info-icon">
            <use href="${this._icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>
          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--decrease-servings" data-changeTo="${this._data.servings - 1}">
              <svg>
                <use href="${this._icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings" data-changeTo="${this._data.servings + 1}">
              <svg>
                <use href="${this._icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
          <svg>
            <use href="${this._icons}#icon-user"></use>
          </svg>         
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${this._icons}#icon-bookmark${this._data.bookmarked === true ? "-fill" : ""}"></use>
          </svg>
        </button>
      </div>
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(ingr => this._generateMarkupIngredient(ingr)).join("")}          
        </ul>
      </div>
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${this._icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>   
    `;
  }
  _generateMarkupIngredient = function(ingr) {
    return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${this._icons}#icon-check"></use>
        </svg>
        <div class="recipe__description">   
          <span class="recipe__quantity">
            ${+ingr.quantity && ingr.quantity !== " " ? fracty(+ingr.quantity) : ""}
          </span>
          <span class="recipe__unit">
            ${ingr.unit || ""}
          </span>               
          ${ingr.description}
        </div>
      </li>
    `;
  }
}
export default new RecipeView();
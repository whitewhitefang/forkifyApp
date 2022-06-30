import View from "./view";

class IngredientsView extends View {
  constructor() {
    super();
    this.showIngredients();  
  } 
  _parentElement = document.querySelector('.upload-ingredients');
  showIngredients() {
    const length = document.querySelector('.upload-ingredients').children.length;
    let newIngredient = `
      <div class="upload__exact-ingredient--${length}">   
        <div class="ingredient--inputs">
          <label for="ingredient-${length}--product">Product #${length + 1}</label>
          <input
            value=""
            type="text"
            size="55"
            required
            name="ingredient-${length}--product"
            id="ingredient-${length}--product"
            placeholder="Ingredient of the meal"
          />   
          <div class="exact-ingredient__quantityAndUnit">
            <label for="ingredient-${length}--quantity">Quantity</label>        
            <input
              value=""
              type="number"         
              step="0.1"   
              name="ingredient-${length}--quantity"
              id="ingredient-${length}--quantity"
              min="0"
              max="10000"
            />
            <label for="ingredient-${length}--unit">Unit</label>
            <input
              value=""
              type="text"
              size="29"
              name="ingredient-${length}--unit"
              id="ingredient-${length}--unit"
              placeholder="lb, oz, kg..."
            />     
          </div> 
        </div>  
        <div class="ingredients_buttons">
          <div class="btn__delete-product">
            <button class="btn--tiny delete-product ${length === 0 ? "hidden" : ""}" title="remove product">
              <svg>
                <use href="${this._icons}#icon-minus-circle"></use>
              </svg>              
            </button>   
          </div>    
          <div class="btn__add-product">
            <button class="btn--tiny add-product ${length === 4 ? "hidden" : ""}" title="add product">
                <svg>
                  <use href="${this._icons}#icon-plus-circle"></use>
                </svg>                
              </button>
          </div>                    
        </div>                     
      </div>    
    `;    
    this._parentElement.insertAdjacentHTML('beforeend', newIngredient);
  }
  addProductHandler(handler) {    
    this._parentElement.addEventListener('click', function(event) {   
      let length = document.querySelector('.upload-ingredients').children.length;
      event.preventDefault();         
      if (event.target.closest('.btn--tiny').classList.contains('add-product')) {
        if (length === 5) { 
          return;
        }
        handler("add");  
      } else if (event.target.closest('.btn--tiny').classList.contains('delete-product')) {
        if (length === 1) {
          return;
        }
        handler("remove");  
      }
      return;
    })
  }
  removeProduct() {
    const length = document.querySelector('.upload-ingredients').children.length;
    if (length > 1) {       
      let elementToDelete = document.querySelector('.upload-ingredients').children[length - 1];
      elementToDelete.remove();
    }    
  }
}

export default new IngredientsView();
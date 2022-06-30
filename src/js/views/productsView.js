import View from "./view";
import icons from '../../img/icons.svg';

class ProductsView extends View {

  _parentElement = document.querySelector(".products__list");
  _errorMessage = "There no products were added yet";
  _message = "";

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerRemoveProduct(handler) {
    this._parentElement.addEventListener('click', function(event) {
      if (!event.target.closest('.remove-product')) return;
      const elem = event.target.closest('.preview__product');
      const id = elem.dataset.key;
      handler(+id);
    })
  }

  addHandlerRemoveAll(handler) {
    this._parentElement.addEventListener('click', function(event) {
      if (!event.target.closest('.btn-remove-product')) return;
      handler();
    })
  }

  _generateMarkup() {
    return `
      ${this._data.map(product => this._generateProduct(product)).join("")}
      <div class="remove-product-container">
        <button class="btn btn-remove-product">Remove all products</button>
      </div>      
    `
  }

  _generateProduct(product) {
    return `
      <li class="preview preview__product" data-key="${product.key}">
        <div class="preview preview__product--body">
          ${product.quantity ? Math.ceil(Math.abs(+product.quantity)) : product.unit ? 1 : ""} ${product.unit ? product.unit + " of" : ""} ${product.description}
        </div>        
        <div class="remove-product-container">
          <button class="btn--tiny remove-product" title="remove product">
            <svg>
              <use href="${this._icons}#icon-minus-circle"></use>
            </svg>              
          </button> 
        </div>          
      </li>    
    `;  
  }
};

export default new ProductsView();
import View from "./view";
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');  
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function(event) {
      const btn = event.target.closest('.btn--inline');
      if (!btn || btn.classList.contains('pagination__page')) return;
      const goto = +btn.dataset.goto;
      handler(goto);
    });
  }
  _generateMarkup() {
    const numPages = Math.ceil(this._data.searchResults.length / this._data.resultsPerPage);
    if (this._data.page === 1 && numPages > 1) {
      return `    
        <button class="btn--inline pagination__btn--next" data-goto="${this._data.page + 1}">
          <span>Page ${this._data.page + 1}/${numPages}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }
    if (this._data.page === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto="${this._data.page - 1}">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${this._data.page - 1}//${numPages}</span>
        </button>
      `;
    }
    if (this._data.page < numPages) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto="${this._data.page - 1}">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${this._data.page - 1}//${numPages}</span>
        </button>
        <button class="btn--inline pagination__page">          
          <span>${this._data.page}</span>
        </button>
        <button class="btn--inline pagination__btn--next" data-goto="${this._data.page + 1}">
          <span>Page ${this._data.page + 1}//${numPages}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }
    return '';
  }
}
export default new PaginationView();
import icons from '../../img/icons.svg';

export default class View {
  _data;
  _icons = icons;
  render(data, render = true) {
    if (!data || Array.isArray(data) && data.length === 0) {
      return this.renderError();
    }
    this._data = data;
    const markup = this._generateMarkup();
    if (!render) {
      return markup;
    }
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const currElements = Array.from(this._parentElement.querySelectorAll("*"));
    newElements.forEach((newEl, index) => {
      const curEl = currElements[index];
      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") {
        curEl.textContent = newEl.textContent;        
      }
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    })
  }
  _clear(elem = this._parentElement) {
    elem.innerHTML = "";
  }
  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${this._icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${this._icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${this._icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
import View from "./view";
import icons from '../../img/icons.svg';

class AddRecipeView extends View {  
  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();    
  }  
  _parentElement = document.querySelector('.upload');  
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _buttonOpen = document.querySelector('.nav__btn--add-recipe');
  _buttonClose = document.querySelector('.btn--close-modal'); 
  _message = 'You successfully uploaded your recipe';  
  toggleWindow() {
      this._overlay.classList.toggle("hidden");
      this._window.classList.toggle("hidden");
  }
  _addHandlerShowWindow() {
    this._buttonOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandlerHideWindow() {
    this._buttonClose.addEventListener('click', this.toggleWindow.bind(this));   
  }
  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function(event) {
      event.preventDefault();
      const dataArray = [...new FormData(this)];
      const data = Object.fromEntries(dataArray);
      handler(data);
    });
  }
}
export default new AddRecipeView();
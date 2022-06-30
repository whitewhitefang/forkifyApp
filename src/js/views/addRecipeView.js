import View from "./view";

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
      if (this._window.classList.contains("hidden")) {
        document.body.style.overflow = "auto";        
      } else {
        document.body.style.overflow = "hidden";
      }
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
      const form = document.forms.upload;
      const dataArray = [...new FormData(form)];
      const data = Object.fromEntries(dataArray);
      handler(data);      
    });
  }
}
export default new AddRecipeView();
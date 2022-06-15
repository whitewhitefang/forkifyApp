import View from "./view";
import previewView from "./previewView";
import icons from '../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No booknarks yet. Find a recipe and bookmark it.";
  _message = "";
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data.map(bookmark => previewView.render(bookmark, false)).join("");  
  }
};
export default new BookmarksView;
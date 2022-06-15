import View from "./view";
import previewView from "./previewView";
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _sortingInputs = document.querySelector('.sorting__inputs');
  _parentElement = document.querySelector(".results");
  _errorMessage = "Sorry, there no results for seeking words";
  _message = "";  
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join("");  
  }
  addHandlerSort(handler) {
     this._sortingInputs.addEventListener('change', function(event) {
      if (!event.target.closest('.sorting_button')) {
        return;
      } else {
        handler(event.target.value);
      }
     })
  }
};
export default new ResultsView;
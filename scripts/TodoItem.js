class TodoItem {
    constructor(text, copyClickHandler) {
        this._text = text;
        this._copyClickHandler = copyClickHandler;
    }
  
    _remove = () => {
        this._view.remove();
    }
  
    getView() {
        const itemTemplate = document.querySelector('#todolist-item-template').content.children[0];
        this._view = itemTemplate.cloneNode(true);
        this._view.querySelector('.todolist-item__text').textContent = this._text;
        this._view.querySelector('.todolist-item__del').addEventListener('click', this._remove);
        
        this._view.querySelector('.todolist-item__copy').addEventListener('click', () => {
            this._copyClickHandler(this._text)
      });
  
        return this._view;
    }
}

export default TodoItem;
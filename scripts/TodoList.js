class TodoList {
    constructor(data, createItem, createForm) {
      this._data = data;
      this._createItem = createItem;
      this._createForm = createForm;
    }
  
    _addItem = (text) => {
      const item = this._createItem(text, (text) => {this._addItem(text)}).getView();
      this._view.append(item);
    }
  
    _addForm = () => {
      const form = this._createForm( (text) => {this._addItem(text)}).getView();
      this._formContainer.append(form);
    }
  
    getView() {
      const listTemplate = document.querySelector('#todolist-template').content.children[0];
      this._view = listTemplate.cloneNode(true);
      this._itemsContainer = this._view.querySelector('.todolist__container');
      this._formContainer = this._view.querySelector('.todolist__form');
  
      this._addForm();
      this._data.forEach(this._addItem);
  
  
      return this._view;
    }
}

export default TodoList;
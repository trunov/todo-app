const items = [
  'Complete the React tutorial',
  'Take a walk with the dog',
  'Understand closures',
  'Solve a problem on Codewars'
];

const itemTemplate = document.querySelector('#todolist-item-template').content.children[0];
// const list = document.querySelector('.todolist');

console.log(itemTemplate);

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
    this._view.querySelector('.todolist-item__copy').addEventListener('click', () => { console.log('copy') });

    return this._view;
  }
}

class TodoList {
  constructor(data, createItem, createForm) {
    this._data = data;
    this._createItem = createItem;
    this._createForm = createForm;
  }

  _addItem = (text) => {
    const item = this._createItem(text).getView();
    this._view.append(item);
  }

  _addForm = () => {
    const form = this._createForm().getView();
    this._view.append(form);
  }

  getView() {
    const listTemplate = document.querySelector('#todolist-template').content.children[0];
    this._view = listTemplate.cloneNode(true);

    this._addForm();
    this._data.forEach(this._addItem);
    return this._view;
  }
}

class TodoForm {
  constructor(submitHandler) {
    this._submitHandler = submitHandler;
  }

  getView() {
    const formTemplate = document.querySelector('#todolist-form-template').content.children[0];
    this._view = formTemplate.cloneNode(true);
    this._view.addEventListener('submit', () => {console.log('submit')})
    return this._view;
  }
}

const createItem = (...args) => new TodoItem(...args);
const createForm = (...args) => new TodoForm(...args);

const list = (new TodoList(items, createItem, createForm)).getView();

const page = document.querySelector('.page');
page.append(list);

// items.forEach(text => {
//   const item = new TodoItem(text);
//   console.log('item', item);
//   list.append(item.getView());
// })
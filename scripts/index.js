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
  constructor(data, createItem) {
    this._data = data;
    this._createItem = createItem;

  }

  _addItem = (text) => {
    const item = this._createItem(text).getView();
    this._view.append(item);
  }

  getView() {
    const listTemplate = document.querySelector('#todolist-template').content.children[0];
    this._view = listTemplate.cloneNode(true);

    this._data.forEach(this._addItem);
    return this._view;
  }
}

const createItem = (...args) => new TodoItem(...args);
const list = (new TodoList(items, createItem)).getView();

const page = document.querySelector('.page');
page.append(list);

// items.forEach(text => {
//   const item = new TodoItem(text);
//   console.log('item', item);
//   list.append(item.getView());
// })
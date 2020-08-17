const items = [
  'Complete the React tutorial',
  'Take a walk with the dog',
  'Understand closures',
  'Solve a problem on Codewars'
];

const itemTemplate = document.querySelector('#todolist-item-template').content.children[0];
const list = document.querySelector('.todolist');

console.log(itemTemplate);

class TodoItem {
  constructor(text) {
    this._text = text;
  }

  _remove = () => {
    this._view.remove();
  }

  getView() {
    const itemTemplate = document.querySelector('#todolist-item-template').content.children[0];
    this._view = itemTemplate.cloneNode(true);
    this._view.querySelector('.todolist-item__text').textContent = this._text;
    this._view.querySelector('.todolist-item__del').addEventListener('click', this._remove);

    return this._view;
  }
}

items.forEach(text => {
  const item = new TodoItem(text);
  console.log('item', item);
  list.append(item.getView());
})
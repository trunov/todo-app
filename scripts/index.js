const items = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars'
];

const itemTemplate = document.querySelector('#todolist-item-template').content.children[0];
const list = document.querySelector('.todolist');

items.forEach(text => {
  const listItem = itemTemplate.cloneNode(true);
  listItem.querySelector('.todolist-item__text').textContent = text;
  list.append(listItem);
})

console.log(itemTemplate);
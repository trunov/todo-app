import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';
import TodoItem from './TodoItem.js'

const items = [
  'Complete the React tutorial',
  'Take a walk with the dog',
  'Understand closures',
  'Solve a problem on Codewars'
];


const createItem = (...args) => new TodoItem(...args);
const createForm = (...args) => new TodoForm(...args);

const list = (new TodoList(items, createItem, createForm)).getView();

const page = document.querySelector('.page');
page.append(list);
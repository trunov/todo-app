class TodoForm {
    constructor(submitHandler) {
      this._submitHandler = submitHandler;
    }
  
    getView() {
      const formTemplate = document.querySelector('#todolist-form-template').content.children[0];
      this._view = formTemplate.cloneNode(true);
      this._view.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputValue = this._view.querySelector('.todolist-form_input').value;
        this._submitHandler(inputValue);
        this._view.reset();
      })
      return this._view;
    }
}

export default TodoForm;
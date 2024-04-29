import { addTodoCreator } from "../Redux/actionCreators.js";
import {
  addTodoAction,
  completeTodoAction,
  removeTodoAction,
} from "../Redux/actionTypes.js";
const todoInput = document.getElementById("todoInput");
const todoBtn = document.getElementById("addTodoBtn");
const todoItemContainer = document.querySelector(".todoItemContainer");

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case addTodoAction: {
      let newState = [...state];
      const newTodo = {
        id: state.length + 1,
        title: action.title,
        completed: false,
      };
      newState.push(newTodo);
      return newState;
    }
    case completeTodoAction: {
    }
    case removeTodoAction: {
    }
    default: {
      return state;
    }
  }
};

const store = Redux.createStore(todoReducer);

const addNewTodoFunction = () => {
  let todoTitle = todoInput.value;
  store.dispatch(addTodoCreator(todoTitle));
  todoInput.value = "";
  todoInput.focus();
};

todoBtn.addEventListener("click", () => {
  todoInput.value != "" && addNewTodoFunction();
});

window.addEventListener("keydown", (e) => {
  e.key == "Enter" && todoInput.value != "" && addNewTodoFunction();
});

const generateTodoElement = (title) => {
  return `<div class="todoItem">
            <span>${title}</span>
            <span class="material-symbols-outlined"> delete </span>
        </div>`;
};


window.addEventListener("load", () => {
  todoInput.focus();
});

const renderUI = () => {
    let todos = store.getState();
    todoItemContainer.innerHTML = ""
    todos.map(todo =>  todoItemContainer.insertAdjacentHTML('beforeend', generateTodoElement(todo.title)))
   
}
renderUI()
store.subscribe(renderUI);

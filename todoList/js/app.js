import { addTodoCreator , completeTodoCreator, removeTodoCreator } from "../Redux/actionCreators.js";
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
      const newState = [...state]
      newState.forEach(todo => {
        if(todo.id === action.id){
          todo.completed = !todo.completed
        }
      })
      return newState
    }
    case removeTodoAction: {
      const newState = [...state]
      const filteredTodos = newState.filter(todo => todo.id != action.id)
      return filteredTodos
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

const completeTodoHandler = (id) =>{
  store.dispatch(completeTodoCreator(id))
}
const removeTodoHandler = (id) => {
  store.dispatch(removeTodoCreator(id))
}
const generateTodoElement = (title , id , completed) => {
  return `<div class="todoItem ${completed ? "completed" : ""}" onclick=completeTodoHandler(${id})>
            <span>${title}</span>
            <span class="material-symbols-outlined" onclick=removeTodoHandler(${id})> delete </span>
        </div>`;
};


window.addEventListener("load", () => {
  todoInput.focus();
});

const renderUI = () => {
    let todos = store.getState();
    todoItemContainer.innerHTML = ""
    todos.map(todo =>  todoItemContainer.insertAdjacentHTML('beforeend', generateTodoElement(todo.title, todo.id, todo.completed)))
   
}
renderUI()
store.subscribe(renderUI);
window.completeTodoHandler = completeTodoHandler
window.removeTodoHandler = removeTodoHandler
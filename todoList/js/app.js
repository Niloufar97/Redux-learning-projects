import { addTodoCreator } from "../Redux/actionCreators.js";
import {
  addTodoAction,
  completeTodoAction,
  removeTodoAction,
} from "../Redux/actionTypes.js";
const todoInput = document.getElementById("todoInput");
const todoBtn = document.getElementById("addTodoBtn");

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
  todoInput.value!= "" && addNewTodoFunction();
});

window.addEventListener("keydown", (e) => {
  e.key == "Enter" && todoInput.value!= "" &&addNewTodoFunction();
});

window.addEventListener('load', ()=> {
    todoInput.focus();
})

store.subscribe(()=>{
    console.log(store.getState())
})

import * as Redux from './node_modules/redux/dist/redux.browser.mjs'
import { incActionCreator, decActionCreator, resetActionCreator } from './Redux/actionCreator.js';

const increaseButton = document.getElementById("increaseBtn");
const decreaseButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");
const result = document.getElementById("result");

// reducer
const counterReducer = (state = 0 , action) => {
    switch(action.type){
        case 'INCREMENT' : {
            return state + 1
        }
        case 'DECREMENT' : {
            return state - 1
        }
        case 'RESET' : {
            return state = 0
        }
        default : {
            return state
        }
    }
}

// create store
const store = Redux.createStore(counterReducer);


// dispatch
increaseButton.addEventListener('click' , () =>{
    store.dispatch(incActionCreator())
})
decreaseButton.addEventListener('click' , () =>{
    store.dispatch(decActionCreator())
})
resetButton.addEventListener('click' , () =>{
    store.dispatch(resetActionCreator())
})

const renderUI = () => {
    result.innerHTML = store.getState()
}
renderUI()
// subscribe
store.subscribe(renderUI)
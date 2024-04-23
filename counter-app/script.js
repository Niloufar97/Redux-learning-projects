import * as Redux from './node_modules/redux/dist/redux.browser.mjs'

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

// create actions
const incrementAction = {type: 'INCREMENT'};
const decrementAction = {type: 'DECREMENT'};
const resetAction = {type: 'RESET'}

// dispatch
increaseButton.addEventListener('click' , () =>{
    store.dispatch(incrementAction)
    console.log(store.getState())
})
decreaseButton.addEventListener('click' , () =>{
    store.dispatch(decrementAction)
    console.log(store.getState())
})
resetButton.addEventListener('click' , () =>{
    store.dispatch(resetAction)
    console.log(store.getState())
})
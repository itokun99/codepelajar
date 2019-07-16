var redux = require('redux');
var createStore = redux.createStore;

const initialState = {
    counter : 0,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_COUNTER":
            state.counter = state.counter + 100;
            break;
        default:
            break;
    }
    return state
}

const addCounter = () => {
    return {
        type : "ADD_COUNTER"
    }
}


const store = createStore(rootReducer);

console.log(store.getState());
store.dispatch({type : "ADD_COUNTER"});
console.log(store.getState());

import {combineReducers} from 'redux';

function songs(state = [], action) {
    return state;
}

function cartItem(state = [], action) {
    return state;
}

function styles(state = [], action) {
    return state;
}



const rootReducers = combineReducers({
    songs,
    cartItem,
    styles,
});

export default rootReducers;
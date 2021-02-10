import {combineReducers} from 'redux';
// import songData from '../../songsData.json';

function songs(state = [], action) {
    switch(action.type) {
        case "SET_SONGS":
            return action.value
        default:
            return state;
    }
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
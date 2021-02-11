import {combineReducers} from 'redux';

function songs(state = [], action) {
    switch(action.type) {
        case "SET_SONGS":
            return action.value 
        case "UPVOTE_SONG": {
            const updatedSongs = state.map(song => {
                if (song.id === action.value) {
                    return {
                        ...song,
                        upvotes: song.upvotes + 1,
                    };
                }
                return song;
            });
            return updatedSongs
        }
        case "DOWNVOTE_SONG": {
            const updatedSongs = state.map(song => {
                if (song.id === action.value) {
                    return {
                        ...song,
                        downvotes: song.downvotes + 1,
                    };
                }
                return song;
            });
            return updatedSongs;
        }
        default:
            return state;
    }
}

function cartItems(state = [], action) {
    switch(action.type) {
        case "ADD_TO_CART": 
            return [...state, action.value];
        case "REMOVE_CART_ITEM": {
            const filteredCartItems = state.filter(cartItem => cartItem.id !== action.value);
            return state = filteredCartItems
        }
        default:
            return state;
    }
}

function styles(state = []) {
    return state
}



const rootReducers = combineReducers({
    songs,
    cartItems,
    styles,
});

export default rootReducers;
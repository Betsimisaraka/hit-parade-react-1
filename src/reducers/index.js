import {combineReducers} from 'redux';

function songs(state = [], action) {
    switch(action.type) {
        case "SET_SONGS":
            return state
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
        case "FAVORITE_SONG": {
            const updatedSongs = state.map(song => {
                if (song.id === action.value) {
                    return {
                        ...song,
                        isFavorited: !song.isFavorited,
                    };
                }
                return song;
            });
            return updatedSongs
        }
        case "SET_ADD_SONG":
            return [...state, action.value]
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
            return state = filteredCartItems;
        }
        case "EMPTY_CART":
            return state = []
        default:
            return state;
    }
}

function styles(state = []) {
    return state
}

function title(state = "", action) {
    switch(action.type) {
        case "SET_TITLE":
            return action.value 
        default:
            return state
    }
}

function artist(state = "", action) {
    switch(action.type) {
        case "SET_ARTIST":
            return action.value 
        default:
            return state
    }
}

function price(state = 0, action) {
    switch(action.type) {
        case "SET_PRICE":
            return action.value 
        default:
            return state
    }
}

function style(state = "", action) {
    switch(action.type) {
        case "SET_STYLE":
            return action.value 
        default:
            return state
    }
}

function lyrics(state = "", action) {
    switch(action.type) {
        case "SET_LYRICS":
            return action.value 
        default:
            return state
    }
}

const rootReducers = combineReducers({
    songs,
    cartItems,
    styles,
    title,
    artist,
    price,
    style,
    lyrics,
});

export default rootReducers;
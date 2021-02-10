export function setFavoriteSong(songId) {
   return {
       type: "SET_FAVORITE_SONG",
       value: songId
   }
}

export function upvoteSong(songId) {
    return {
        type: "UPVOTE_SONG",
        value: songId
    }
}

export function downvoteSong(songId) {
    return {
        type: "DOWNVOTE_SONG",
        value: songId
    }
}

export function addToCart(song) {
    return {
        type: "ADD_TO_CART",
        value: song
    }
}

export function addSong(song) {
    return {
        type: "ADD_SONG",
        value: song
    }
}

export function removeCartItem(songId) {
    return {
        type: "REMOVE_CART_ITEM",
        value: songId
    }
}

export function emptyCart() {
    return {
        type: "EMPTY_CART",
    }
}

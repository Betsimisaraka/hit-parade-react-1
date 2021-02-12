export function setAddSong(song) {
    return {
        type: "SET_ADD_SONG",
        value: song
    }
}

export function favoriteSong(songId) {
   return {
       type: "FAVORITE_SONG",
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

export function setTitle(text) {

    return {
        type: "SET_TITLE",
        value: text
    }
}

export function setArtist(text) {
    return {
        type: "SET_ARTIST",
        value: text
    }
}

export function setPrice(number) {
    return {
        type: "SET_PRICE",
        value: number
    }
}

export function setStyle(text) {
    return {
        type: "SET_STYLE",
        value: text
    }
}

export function setLyrics(text) {
    return {
        type: "SET_LYRICS",
        value: text
    }
}

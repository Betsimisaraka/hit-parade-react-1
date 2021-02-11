import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { 
	upvoteSong, 
	downvoteSong, 
	addToCart, 
	removeCartItem, 
	favoriteSong 
} from '../actions';
import {SongItemStyle} from '../styled-components/styles';

import {
	AiOutlineHeart,
	AiFillHeart,
	AiOutlineArrowUp,
	AiOutlineArrowDown,
	AiOutlineShopping,
	AiTwotoneShopping,
	AiOutlineEllipsis,
} from 'react-icons/ai';

function SongItem({ song, cartItems, upvoteSong, downvoteSong, addToCart, removeCartItem, favoriteSong }) {
	
	function showCartIcon() {
		const isAlreadyInCart = cartItems.some(item => item.id === song.id);
		if (isAlreadyInCart) {
			return <AiTwotoneShopping onClick={() => removeCartItem(song.id)} />;
		}
		return <AiOutlineShopping onClick={() => addToCart(song)} />;
	}

	function showFavoriteIcon() {
		return song.isFavorited ? <AiFillHeart /> : <AiOutlineHeart />;
	}

	return (
		<SongItemStyle>
			<div className="heart-icon" onClick={() => favoriteSong(song.id)}>
				{showFavoriteIcon()}
			</div>
			<div>
				<div className="song-title">{song.title}</div>
				<div>{song.artist}</div>
			</div>
			<div className="votes">
				{song.upvotes} <AiOutlineArrowUp onClick={() => upvoteSong(song.id)} />
			</div>
			<div className="votes">
				{song.downvotes} <AiOutlineArrowDown onClick={() => downvoteSong(song.id)} />
			</div>
			{showCartIcon()}
			<div>
				<Link to={`/song/${song.id}`}>
					<AiOutlineEllipsis />
				</Link>
			</div>
		</SongItemStyle>
	);
}

export default connect((state) => ({cartItems: state.cartItems}), { upvoteSong, downvoteSong, addToCart, removeCartItem, favoriteSong })(SongItem)

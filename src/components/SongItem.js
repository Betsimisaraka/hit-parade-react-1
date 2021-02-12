import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

function SongItem({ song }) {
	const cartItems = useSelector(state => state.cartItems)
	const dispatch = useDispatch();
	
	function showCartIcon() {
		const isAlreadyInCart = cartItems.some(item => item.id === song.id);
		if (isAlreadyInCart) {
			return <AiTwotoneShopping onClick={() => dispatch(removeCartItem(song.id))} />;
		}
		return <AiOutlineShopping onClick={() => dispatch(addToCart(song))} />;
	}

	function showFavoriteIcon() {
		return song.isFavorited ? <AiFillHeart /> : <AiOutlineHeart />;
	}

	return (
		<SongItemStyle>
			<div className="heart-icon" onClick={() => dispatch(favoriteSong(song.id))}>
				{showFavoriteIcon()}
			</div>
			<div>
				<div className="song-title">{song.title}</div>
				<div>{song.artist}</div>
			</div>
			<div className="votes">
				{song.upvotes} <AiOutlineArrowUp onClick={() => dispatch(upvoteSong(song.id))} />
			</div>
			<div className="votes">
				{song.downvotes} <AiOutlineArrowDown onClick={() => dispatch(downvoteSong(song.id))} />
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

export default SongItem

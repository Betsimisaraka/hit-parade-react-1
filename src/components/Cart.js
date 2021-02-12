import React, { useState, useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import {CartItemsContainer, CartItemStyles} from '../styled-components/styles';
import {removeCartItem, emptyCart} from '../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
	const dispatch = useDispatch();
	const cartItems = useSelector(state => state.cartItems)
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const newTotal = cartItems.reduce((total, song) => {
			total += Number(song.price);
			return total;
		}, 0);
		setTotal(newTotal);
	}, [cartItems]);

	function completeOrder() {
		// show the price somewhere (alert or console)
		alert(`THANK YOU FOR YOUR ORDER. PLEASE PAY : ${total}`);
		// empty the cart
		dispatch(emptyCart());
	}

	return (
		<div>
			<h1>Cart</h1>
			<CartItemsContainer>
				{cartItems.map(song => (
					<CartItemStyles key={song.id}>
						<AiOutlineDelete onClick={() => dispatch(removeCartItem(song.id))} />
						<div>
							<div>{song.title}</div>
							<div>{song.artist}</div>
						</div>
						<div className="price">{song.price} Ar</div>
					</CartItemStyles>
				))}
			</CartItemsContainer>
			{cartItems.length !== 0 ? <p>Total: {total} Ar</p> : 'Empty Cart.'}
			{total !== 0 && <button onClick={completeOrder}>Buy</button>}
		</div>
	);
}

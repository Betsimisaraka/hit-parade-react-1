import { connect } from 'react-redux';
import Cart from '../components/Cart';
import {addToCart, removeCartItem, emptyCart} from '../actions';

export default connect((state) => ({cartItems: state.cartItems}), {addToCart, removeCartItem, emptyCart})(Cart);
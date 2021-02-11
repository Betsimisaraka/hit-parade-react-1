import { connect } from 'react-redux';
import Cart from '../components/Cart';
import {addToCart, removeCartItem} from '../actions';

export default connect((state) => ({cartItems: state.cartItems}), {addToCart, removeCartItem})(Cart);
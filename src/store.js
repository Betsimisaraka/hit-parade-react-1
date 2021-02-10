import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import state from './state';

const store = createStore(rootReducers, state, applyMiddleware(thunk));

export default store;
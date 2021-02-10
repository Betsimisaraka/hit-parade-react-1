import { createStore } from 'redux';
import rootReducers from './reducers';
import state from './state';

const store = createStore(rootReducers, state);

export default store;
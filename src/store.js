import { createStore } from 'redux';
import rootReducers from './reducers';
import state from './state';

// const persistedState = localStorage.getItem('state') 
//                        ? JSON.parse(localStorage.getItem('state'))
//                        : state

const store = createStore(rootReducers, state);

// store.subscribe(()=>{
//     localStorage.setItem('state', JSON.stringify(store.getState()));
//   })

export default store;
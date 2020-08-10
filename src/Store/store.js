import user from './user/userSlice'
import {configureStore, getDefaultMiddleware}  from '@reduxjs/toolkit'




const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState().user);
    return result;
  };

const getLoadState = () => {
    if (localStorage['redux-store']) {
      return JSON.parse(localStorage['redux-store']);
    }
};


let state = {
    user:getLoadState()
}

const store = configureStore({
    reducer:{user},
    middleware:[...getDefaultMiddleware(),saver],
    preloadedState:state
})



console.log(store.getState());

export default store;
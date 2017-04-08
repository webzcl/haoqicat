import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js'

let account = {
    username: '',
    isLogin: false
}

let cat = []

let purchaseStore=[]

const defaultState = {
    account,
    cat,
    purchaseStore
}

const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk)))

export default store
// console.log(store.getState().cat)

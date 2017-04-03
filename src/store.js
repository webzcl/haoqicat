import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

let account = {
    username: '',
    isLogin: false
}

let cat = [
    {
        __v: 0 ,
        _id: "58d34a2eaa3fcd439fdd9191" ,
        cat: "58d34967aa3fcd439fdd9190" ,
        name: "商品A" ,
        poster: "http://7xopqp.com1.z0.glb.clouddn.com/avater.jpg" ,
        price: 1003 ,
        summary: "这是简介"
    }
]

const defaultState = {
    account,
    cat
}

const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk)))

export default store

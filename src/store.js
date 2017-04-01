import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'


let defaultState={
  username:'请登录',
  isLogin:false
}




function loginReducer(state=[],action){
  switch (action.type) {
    case 'LOGIN':
        return {
          username:action.username,
          isLogin:true
              }
    default:
        return state
  }
}

const store = createStore(loginReducer,defaultState,compose(applyMiddleware(thunk)))

export default store

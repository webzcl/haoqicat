function accountReducer(state=[],action){
  switch (action.type) {
    case 'LOGIN':
        return {
          username:action.username,
          isLogin:true
              }
    case 'LOGOUT':
        return{
          username:null,
          isLogin:action.isLogin
        }
    default:
        return state
  }
}

export default accountReducer

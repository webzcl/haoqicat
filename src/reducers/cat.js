function catReducer(state=[],action){

  switch (action.type) {
    case 'GETCATS':
        return [
          ...action.newCat
        ]
    default:
        return state
  }
}
export default catReducer

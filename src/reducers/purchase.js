function purchaseReducer(state=[],action){

  switch (action.type) {
    case 'PURCHASE':
        return [
          ...state,action.id
        ]
    default:
        return state
  }
}
export default purchaseReducer

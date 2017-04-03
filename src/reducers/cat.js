function catReducer(state=[],action){
  // let b= action.newCat;
  // let a=[{a:1},{b:2}];
  // console.log('11111', b);
  // console.log('2222', ...b);
  switch (action.type) {
    case 'GETCAT':
        console.log('3333', ...action.newCat)
        return
          [...action.newCat]
    default:
        return state
  }
}
export default catReducer

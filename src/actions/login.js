import axios from 'axios';


export function login(data) {
  return dispatch=>{
    axios.post('http://tiger.haoduoshipin.com/user/signin',data).then(
      res=>{
        console.log(res);
        dispatch({type:'LOGIN',username:res.data.user});
        localStorage.setItem('userId',res.data.userId)
      }
    ).catch(err=>alert(err.response.data.msg))
  }
}
export function preLogin(userId){
  return dispatch=>{
    axios.get(`http://tiger.haoduoshipin.com/user/${userId}`).then(
      res=>{
        console.log(res);
        dispatch({type:'LOGIN',username:res.data.user.username})
      }
    ).catch(
      err=>alert(err.response.data.msg)
    )
  }
}
export function logout(data) {
  return dispatch=>{
    axios.get('http://tiger.haoduoshipin.com/user/logout').then(
      res=>{
        console.log(res.data.msg);
        dispatch({type:'LOGOUT',isLogin:data})
      }
    )
  }
}

export function logup(data){
  return dispatch=>{
    axios.post('http://tiger.haoduoshipin.com/user/signup',data).then(
      res=>{
        console.log(res);
        // dispatch({type:'LOGUP',username:data.username,password:data.password})
      }
    ).catch(
      err=>alert(err.response.data.msg)
    )
  }
}

export function getCat(){
  return dispatch=>{
    axios.get('http://tiger.haoduoshipin.com/products').then(
      res=>{
        console.log(res.data.products);
        dispatch({type:'GETCAT',newCat:res.data.products})
        // let newCat=[{a: 1}, {c: 3}];
        // dispatch({type:'GETCAT',newCat:newCat})
      }
    )
  }
}

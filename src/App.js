
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/Login/Login';
import { useStateValue } from './components/StateProvider/StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';


function App() {
  const [{user},dispatch]=useStateValue()
  useEffect(()=>{
  const unsubcribe =  auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    return ()=>{
      unsubcribe();
    }
  },[])
  console.log('user is  >>>',user)
  return (
    <Router>
    <div className="app">
     <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/login' element={<Login/>}/>

     </Routes>
    </div>
    </Router>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/Login/Login';
import { useStateValue } from './components/StateProvider/StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './components/Payment/Payment';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise =loadStripe(
  'pk_test_51NNBNSSC9WSgNAb5RGoc4PTgY0NcnlnJMUI0xHggkgsIMlRsALW3CvOy7ciSsjIlHKaPVjwvSJiNvnb9Kb8U6ZDq00FGk8iyqN'
)

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
  return (
    <Router>
    <div className="app">
     <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/payment' element=
      { <Elements stripe={promise}>
      <Payment/>
      </Elements>
      } >
     
      </Route>

     </Routes>
    </div>
    </Router>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/Login/Login';


function App() {
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

import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import  logoImage from'../../images/logo_image.png'
import { auth } from '../../firebase'


function Login() {

  const history=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const login= event=>{
    event.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{

      history('/')
    })
    .catch(e=>alert(e.message))
  }
  const register= event=>{
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email,password)
    .then(auth=>{
      history('/')
    })
    .catch(e=>{alert(e.message)})
  }
  return (
    <div className='login'>
      <Link to='/'>
        <img
        className='login_logo'
        src={logoImage}
        alt=''
        />
      </Link>
      <div className='login_container'>
        <h1>Sign In</h1>
        <form className='login_form'>
          <h5>E-mail</h5>
          <input value={email}
           onChange={event=>setEmail(event.target.value)} 
          type='email'/>
          <h5>Password</h5>
          <input  value={password} 
          onChange={event=>setPassword(event.target.value)}
          type='password'/>
         
         <button
         onClick={login}
         type='submit'
         className='login_signInButton'><span>sign in</span></button>
          <button
          onClick={register}
          className='login_createAccButton'><span>Create New Account</span></button>
        
        </form>

      </div>
    </div>
  )
}

export default Login
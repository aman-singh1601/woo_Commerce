import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import  logoImage from'../../images/logo_image.png'


function Login() {
  const login= event=>{
    event.preventDefault()
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
          <input type='email'/>
          <h5>Password</h5>
          <input type='password'/>
         
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
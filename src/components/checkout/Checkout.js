import React from 'react'
import './Checkout.css'
import Header from '../Home/Header/Header'
import { useStateValue } from '../StateProvider/StateProvider'


function Checkout() {
    const [{basket},dispatch]=useStateValue()
  return (
    <div>
      <Header/>
      <div className='checkout'>
        <img 
        className='checkout_ad'
        src='https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        alt=''
        />
      </div>
    </div>
  )
}

export default Checkout
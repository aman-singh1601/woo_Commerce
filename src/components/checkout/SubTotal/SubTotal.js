import React from 'react'
import CurrencyFormat from 'react-currency-format'

import './SubTotal.css'
import { useStateValue } from '../../StateProvider/StateProvider'
import { subBasketTotal } from '../../../reducer'
import { useNavigate } from 'react-router-dom'

function SubTotal() {
  const [{basket},dispatch]=useStateValue()
  const history=useNavigate()
  return (
    <div className='subtotal'>
       
        
        <CurrencyFormat 

        renderText={(value)=>{
         

          return ((
            <>  
            
            <p>
            Subtotal ({basket.length} items) : <strong>{`${value}`}</strong> 
            </p>
            <small className='subtotal_gift'> 
              <input type='checkbox'/>this order contains a gift
            </small>
            </>
          ))
        }}

        decimalScale={2}
        value={subBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button onClick={e=>history('/payment')}>Proceed To Checkout</button>
    </div>
  )
}

export default SubTotal
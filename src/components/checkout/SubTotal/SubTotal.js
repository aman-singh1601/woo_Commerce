import React from 'react'
import CurrencyFormat from 'react-currency-format'

import './SubTotal.css'
import { useStateValue } from '../../StateProvider/StateProvider'
import { subBasketTotal } from '../../../reducer'

function SubTotal() {
  const [{basket},dispatch]=useStateValue()
  
  return (
    <div className='subtotal'>
       
        
        <CurrencyFormat 

        renderText={(value)=>{
          console.log(subBasketTotal(basket))
          console.log(basket)
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
        <button>Proceed To Checkout</button>
    </div>
  )
}

export default SubTotal
import React from 'react'
import './Checkout.css'
import Header from '../Home/Header/Header'
import { useStateValue } from '../StateProvider/StateProvider'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'


function Checkout() {
    const [{basket},dispatch]=useStateValue()
  return (
    <div>
      <Header/>
      <div className='checkout'>
        <img 
        className='checkout_ad'
        src='data:image/jpeg;base64,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'
        alt=''
        />
        {basket?.length==0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>You have no item in your basket. TO buy one or more item click "ADD TO Basket " next to the item</p>
          </div>
        ):(
          <div>
              <h2>Your Shopping Basket</h2>
              {/*list of product  */}
              {basket.map(item=>(
                  <CheckoutProduct
                    item={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
              ))}
              
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout
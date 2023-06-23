import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({title,id,price,image,rating}) {

    const RemoveFromBasket=()=>{
        
    }

  return (
    <div className='checkoutProduct'>
        <img src={image} alt=''/>
        <div className='chekoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>

            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
            {
                Array(rating)
                .fill()
                .map((_)=>
                    <p>⭐</p>
                )
            }
         </div>
        <button onClick={RemoveFromBasket} >REMOVE FROM BASKET</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
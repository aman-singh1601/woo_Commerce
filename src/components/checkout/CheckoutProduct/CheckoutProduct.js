import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../StateProvider/StateProvider'

const CheckoutProduct=React.forwardRef((props,ref)=> {
    const {title,id,price,image,rating,hideButton}=props
    const [{basket},dispatch]=useStateValue()
    const RemoveFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
  return (
    <div
    ref={ref} 
    className='checkoutProduct'>
        <img src={image} alt=''/>
        
        <div className='checkoutProduct_info'>
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
        {
            !hideButton&&(
                <button 
        className='checkout_button'
        onClick={RemoveFromBasket} 
        >REMOVE FROM BASKET</button>
       
            )
        }
         </div>
    </div>
  )
}
)

export default CheckoutProduct
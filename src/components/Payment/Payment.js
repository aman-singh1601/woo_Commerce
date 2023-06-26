import React from 'react'
import Header from '../Home/Header/Header'
import './Payment.css'
import { useStateValue } from '../StateProvider/StateProvider'
import CheckoutProduct from '../checkout/CheckoutProduct/CheckoutProduct'
import { Link } from 'react-router-dom'
function Payment() {
    const[{basket,user}]=useStateValue()
  return (
    <>
        <Header/>
        <div className='payment'>
            
            <div className='payment_container'>
                <h1>
                    Checkout ({<Link to='/checkout'>{basket?.length} items</Link>})
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>India</p>
                    </div>
                </div>
                <div className='payment_section'>
                <div className='payment_title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {
                            basket.map(item=>(
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='payment_section'>
                <div className='payment_title'>
                        <h3>Payment Method</h3>
                </div>
                    <div className='payment_details'>

                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Payment
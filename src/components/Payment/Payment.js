import React, { useState } from 'react'
import Header from '../Home/Header/Header'
import './Payment.css'
import { useStateValue } from '../StateProvider/StateProvider'
import CheckoutProduct from '../checkout/CheckoutProduct/CheckoutProduct'
import { Link } from 'react-router-dom'
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js'


import CurrencyFormat from 'react-currency-format'
import { subBasketTotal } from '../../reducer' 

function Payment() {
    const[{basket,user}]=useStateValue()
    const stripe =useStripe()
    const element=useElements()
    const [Error,setError]=useState(null)
    const [disabled,setDisabled]=useState(true)

    const handleSubmit=e=>{
        
    }
    const handleChange=e=>{
        setDisabled(e.empty)
        setError(e.error?e.error.message :"")
    }

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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment_priceContainer'>
                            <CurrencyFormat 

                                    renderText={(value)=>{
                                    return ((
                                        <>  
                                        <h3>Order Total : {value}</h3>
                                        </>
                                    ))
                                    }}

                                    decimalScale={2}
                                    value={subBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    />

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Payment
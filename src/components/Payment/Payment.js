import React, { useEffect, useState } from 'react'
import Header from '../Home/Header/Header'
import './Payment.css'
import { useStateValue } from '../StateProvider/StateProvider'
import CheckoutProduct from '../checkout/CheckoutProduct/CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js'


import CurrencyFormat from 'react-currency-format'
import { subBasketTotal } from '../../reducer' 
import axios from '../../axios'
import { db } from '../../firebase'

function Payment() {

    const nagivate=useNavigate()

    const[{basket,user},dispatch]=useStateValue()
    const stripe =useStripe()
    const elements=useElements()
    const [error,setError]=useState(null)
    const [processing,setProcessing]=useState('')
    const [succeeded,setSucceeded]=useState(false)
    const [disabled,setDisabled]=useState(true)
    const [clientSecret,setClientSecret]=useState(true)

    useEffect(()=>{
        const getClientSecret=async()=>{
            const response =await axios ({
                method:'post', 
                url:`/payments/create?total=${subBasketTotal(basket) * 100 }`
            })

            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    },[basket])


    const handleSubmit=async(event)=>{
        event.preventDefault()
        setProcessing(true)


        const  payload=await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //paymentIntent=payment COnfirmation
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created: paymentIntent.created 
            })

            setSucceeded(true); 
            setError(null)
            setProcessing(false)

            dispatch({
                type:"EMPTY_BASKET",
            })

            nagivate('/orders',{replace:true})
        })
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
                            <button className='payment_button' disabled={
                                processing||disabled||succeeded
                            }>
                                <span>{processing ? <p>Processing</p>:'Buy Now'}</span>
                            </button>

                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Payment
import React from 'react'
import './Order.css'
import moment from 'moment/moment'
import CheckoutProduct from '../../checkout/CheckoutProduct/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
function Order({order}) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>
            {
                moment.unix(order.data.created).format('MMMM Do YYYYm, h:mna')
            }
        </p>
        <p className='order_id'><small>{order.id}</small></p>
        {
            order.data.basket?.map(item=>(
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                  />
            ))
        }
        <CurrencyFormat 
            className='order_total'
            renderText={(value)=>{
            return ((
                <>  
                <h3>Order Total : {value}</h3>
                </>
            ))
            }}

            decimalScale={2}
            value={order.data.amount /100}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
    </div>
  )
}

export default Order
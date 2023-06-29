

const functions=require('firebase-functions')

const express=require('express')
const cors=require('cors')

const stripe = require('stripe')('sk_test_51NNBNSSC9WSgNAb5LGEqhVS9iEtiYgG5FU4yKXsspaTS4AJ3mJ1VUiBTsSF5NR2yOXdOLwBpimi5ZFJ1kQcWsW5J00Vaq5jmo5')

//app config
const app=express()
//middlewares
app.use(cors({origin:true}))
app.use(express.json());

//api routes
app.get('/',(req,res)=>{
    res.status(200).send('helloworld')
})

app.post('/payments/create',async(req,res)=>{
    const total=req.query.total;

    console.log('payment for order is ::  ',total)

    const paymentIntent=await stripe.paymentIntents.create({
       amount : total,
       currency: 'INR'
    })
    res.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
})

//listen command
exports.api=functions.https.onRequest(app)

// http://127.0.0.1:5001/woo-commerce-941c8/us-central1/api
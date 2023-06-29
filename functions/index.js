/* eslint-disable */
const functions=require("firebase-functions");

const express=require("express");
const cors=require("cors");
const stripe = require("stripe")
("sk_test_51NNBNSSC9WSgNAb5LGEqhVS9iEtiYgG5FU4yKXsspaTS4AJ3mJ1VUiBTsSF5NR2yOXdOLwBpimi5ZFJ1kQcWsW5J00Vaq5jmo5");
const app=express();

app.use(cors({origin: true}));
app.use(express.json());
app.post("/payments/create", async(req,res)=>{
    const total=req.query.total;
    const paymentIntent=await stripe.paymentIntents.create({
       amount : total,
       currency: 'INR',
    });
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
});

exports.api=functions.https.onRequest(app);


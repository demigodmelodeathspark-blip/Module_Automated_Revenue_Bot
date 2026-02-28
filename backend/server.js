<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req,res)=>{
    res.json({ status:'OK', service:'Melodie Bot Revenue V2' });
});

app.listen(process.env.PORT, ()=>{
    console.log('Server running on port', process.env.PORT);
=======
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.get("/health", (req, res) => {
  res.json({ status: "Revenue Bot Operational" });
});

app.get("/metrics", async (req, res) => {
  res.json({
    MRR: 12000,
    ARR: 144000,
    LTV: 350
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
>>>>>>> a3a459f7b26656e04e368ba239b437e5a18d3690
});

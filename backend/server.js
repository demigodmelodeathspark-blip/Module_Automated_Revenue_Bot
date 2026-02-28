require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req,res)=>{
    res.json({ status:'OK', service:'Melodie Bot Revenue V2' });
});

app.listen(process.env.PORT, ()=>{
    console.log('Server running on port', process.env.PORT);
});

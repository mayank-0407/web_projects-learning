require('dotenv').config();
const express = require('express');
const app = express();
const mainRouter = require('./routes/index');


app.use('/user/:id',(req,res,next) => {
    console.log(req.method,req.url, new Date().toTimeString());
    next()
})
app.use('/api',mainRouter)
app.get("/",(req,res) =>{
    res.send({
        data:"ok"
    })
})
const PORT = process.env.PORT;

app.listen(PORT,() =>{
    console.log("started listening on:",PORT);
}) 
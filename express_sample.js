const express = require('express')
const path = require('path')

const app = express()

app.use((req,res,next)=>{
    console.log('start')
    next()
})

app.get('/signup',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
    console.log('middle');
    next()
})

app.use((req,res)=>{
    console.log('end')
})

app.post('/signup',(req,res)=>{
    res.send("account created")
})

app.get('/about',(req,res)=>{
    res.send("about")
})



app.listen(7000,()=>{
    console.log("Server started")
})
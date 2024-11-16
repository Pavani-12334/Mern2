const express =require('express')
const Port =4000

const app=express()


app.get('/',(req,res)=>{
    res.status(300).json("Hello");
})
app.listen(Port,()=>{
    console.log("Server is running in port:"+Port)

    console.log(`Server is running in port:${Port}`)
})
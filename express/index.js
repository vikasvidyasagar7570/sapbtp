import express from "express"
import 'dotenv/config'
import mongoose from "mongoose"
import bodyparser from "bodyParser"
const port = process.env.PORT || 7000

const app = express()
mongoose.connect()
app.use(express.json())
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("route is working")
})

app.listen(port,()=>{
    console.log(`apllication running on ${port}`)
})

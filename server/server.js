import express from "express";
import "dotenv/config";
import cors from "cors";
import connectingDB from "./configDb/connectDB.js";
import adminRoute from "./routers/adminrouter.js";
import connectCloudinary from "./configDb/configDB.js";
import userRouter from "./routers/userRouter.js";

const app = express();
connectingDB()
connectCloudinary()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors())
const port = process.env.PORT || 7000;

 app.use("/admin",adminRoute);
app.use('/api/user',userRouter)
 app.get("/",(req, res)=>{
    res.send("api is working")
 })

 app.listen(port,()=> console.log(`application ruunning on port ${port}`))
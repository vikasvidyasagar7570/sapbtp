import mongoose from 'mongoose';
const connectingDB=async()=>{
    mongoose.connection.on("connected",()=>{
        console.log("database connected")
    })
    try{
        await mongoose.connect(`${process.env.MONGO_DB}`)
    }catch(error){
       console.log("database connection failed",error)
    }
}
export default connectingDB;
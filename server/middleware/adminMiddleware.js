import jwt from "jsonwebtoken";
const adminMiddleware = async ()=>{
    try{
        const{atoken}= req.headers;
        if(!atoken){
            return res.status(300).json({success:false,message:"not authorised"})
        }
        const token_decode = jwt.verify(atoken.process.env.ADMIN_PASSWORD)
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.status(300).json({success: false, message:"not authorised"})
        }
        next();
    }catch(error) {
        console.log(error);
        res.status(300).json({success: false, message:error.message})
    }
};
export default adminMiddleware;
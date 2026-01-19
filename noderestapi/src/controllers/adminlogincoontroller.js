import jwt from "jsonwebtoken"
const adminLogin = async(req, res)=>{
try{
    const {email,password}=req.body;
    if(email===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email+password,process.env.JWT_TOKEN);
        res.status(200).json({success:true,token})
    }else{
        return res.status(200).json({success:false,message:"invalid credentials"})
    }
   
    }
     catch(error){
        console.log(error);
        res.staus(400).json({success:false,message:error.message})
}
}
export default adminLogin
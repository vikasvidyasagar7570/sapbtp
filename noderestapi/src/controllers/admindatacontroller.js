import studentModels from "../models/studentmodel";
import {v2 as cloudinary} from "cloudinary";
 
export const addstudentData = async(req, res)=>{
    try{
        const{
            studentId,
            studentName,
            email,
            rollno,
            section,
            addmissiondate,
            address,
            city,
            state,
            country,

        }=req.body;
        const imageFile = req.file;
        if(
              !studentId ||
            !studentName ||
            !email||
            !rollno||
            !section||
            !addmissiondate||
            !address||
            !city||
            !state||
            !country||
        ){
            return res .status(400).json({success: false, message:"fill all the inputs"})
        }
        let imageUrl="";
        if(!imageFile){
            return res.status(400).json({
                success:false,
                message:"image is required"
            })
        }
        if(imageFile){
            const result = await cloudinary.uploader.upload(imageFile.path, {
                resource_type:"image",
            })
            imageUrl = result.secure_url;
        }
        
    }
   
}
import studentModels from "../models/studentModel.js";
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
            !country
        )
        {
            return res 
            .status(400)
            .json({success: false, message:"fill all the inputs"})
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
        const studentData = {
            image: imageUrl,
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

        };
        const newStudent = new studentModels(studentData);
        await newStudent.save();
        res.status(200).json({
            success:true,
            message:"student added succesfully",
            data: newStudent,
        }

        )
        
    }
    catch(error){
        console.log(error);
        res.status(400).json({success: false, message: error.message});
    }
   
};
export const updateStudent = async (req, res) => {
  try {
    const {
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
    } = req.body;
    const imageFile = req.file;
    const id = req.params.id;
    if (
            !studentId ||
            !studentName ||
            !email||
            !rollno||
            !section||
            !addmissiondate||
            !address||
            !city||
            !state||
            !country
    ) {
      return res
        .status(400)
        .json({ success: false, message: "fill the all inputs" });
    }
    const updateData = {
      
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
    };
    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      updateData.image = imageUpload.secure_url;
    }
    const updatedStudent = await studentModels.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );
    if (!updateStudent) {
      return res
        .status(400)
        .json({ success: false, message: "student not found" });
    }
    res.json({
      success: true,
      message: "Student updated successfully",
      updatedStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteStudent = await studentModels.findByIdAndDelete(id);
    if (!deleteStudent) {
      return res
        .status(300)
        .json({ success: false, message: "Contact not found" });
    }
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      deleteStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getStudent = async (req, res) => {
  try {
    const employess = await studentModels.find();
    return res.status(200).json({ success: true, employes: employess });
  } catch (error) {
    console.log(error);
    res.status(300).json({ message: error.message });
  }
};
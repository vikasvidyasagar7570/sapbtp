import mongoose from "mongoose";
const studentdataschema=new mongoose.Schema({
    image:{type:String,default:"",},
    studentId:{type:String,required:true},
    studentName:{type:String,required:true},
    email:{type:String,required:true},
    rollno:{type:String,required:true},
    section:{type:String,required:true},
    admissiondate:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    country:{type:String,required:true},

})
const studentModels=mongoose.model.students || mongoose.model("students",studentdataschema)
export default studentModels
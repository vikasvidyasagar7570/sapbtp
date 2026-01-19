import express from "express";
import upload from "../middleware/multer.js"
import{
    addstudentData,
    deleteStudent,
    getStudent,
    updateStudent,
   
} from "../controller/admindataController.js";
import adminLogin from "../controller/adminloginController.js";
const adminRoute = express.Router();
adminRoute.post("/admin-login",adminLogin);
adminRoute.get("/get-student",getStudent);
adminRoute.post("/add-student",upload.single("image",addstudentData));
adminRoute.put("/update-student/:id",upload.single("image"),updateStudent);
adminRoute.delete("/delete-student/:id", deleteStudent);

export default adminRoute; 
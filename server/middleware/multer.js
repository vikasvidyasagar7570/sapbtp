import multer from "multer";
import path from "path";
import fs from "fs"

const uploadFolder = path.join(process.cwd(), "uploads");
if(!fs.existsSync(uploadFolder)){
    fs.mkdirSync(uploadFolder,{reccursive: true});
}
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, uploadFolder);
    },
    filename:function(req, file, cb){
        const ext = path.extname(file.originalname);
        const name = fieldname + "-"+ Date.now() + ext
        cb(null,name)
    }
})
const upload = multer({storage});
export default upload;
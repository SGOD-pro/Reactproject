import multer from "multer"
import path from 'path'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("mul1");
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        console.log('multer');
        console.log(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix+path.extname(file.originalname))
    }
})

export const upload = multer({ storage: storage })
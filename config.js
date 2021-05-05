const multer = require('multer');
//const { v4: uuid4} = require('uuid');

if(process.env.NODE_ENV == 'production'){
    {
        exports.server = {
            schema: 'https',
            domain: 'b2c-shop-api-dot-b2c-shop-fortnite.uc.r.appspot.com',
            ip: process.env.IP,
            port: process.env.PORT || 8080,
        }
    }
} else {
    {
        exports.server = {
            schema: 'http',
            domain: 'localhost',
            ip: '127.0.0.1',
            port: process.env.PORT || 2500,
        }
    }
}

const type = ['image/png', 'image/jpeg', 'image/jpg'];
const publicDir = 'public/img';

exports.getDir = (process.env.NODE_ENV == 'production') ? "https://" + process.env.IP  : "http://127.0.0.1:" + process.env.PORT || 2500;

exports.fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, publicDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
        //cb(null, uuidv4()+'-'+file.originalname);
    }
})

exports.fileFilter = (req, file, cb) => {
    cb(null, type.includes(file.mimetype)); 
}
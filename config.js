const multer = require('multer');
//const { v4: uuid4} = require('uuid');

const schema = (process.env.NODE_ENV == 'production')? 'https' : 'http';
const domain = (process.env.NODE_ENV == 'production')? 'b2c-shop-api-dot-b2c-shop-fortnite.uc.r.appspot.com' : 'localhost';
const ip = (process.env.NODE_ENV == 'production')? process.env.IP : '127.0.0.1';
const port = process.env.PORT || 8080;


exports.server = {
    schema,
    domain,
    ip,
    port,
}

const type = ['image/png', 'image/jpeg', 'image/jpg'];
const publicDir = 'public/img';

exports.getDir = (process.env.NODE_ENV == 'production') ? "https://" + domain  : "http://127.0.0.1";

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
const multer = require('multer');
//const { v4: uuid4} = require('uuid');

const schema = 'http';
const domain = 'localhost';
const ip = '127.0.0.1';
const port = process.env.port || 2500;

const type = ['image/png', 'image/jpeg', 'image/jpg'];
const publicDir = 'public/img';

exports.server = {
    schema,
    domain,
    ip,
    port
}

exports.getDir = schema + "://" + ip + ":" + port;

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
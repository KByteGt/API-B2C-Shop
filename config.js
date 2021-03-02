const multer = require('multer');
//const { v4: uuid4} = require('uuid');

exports.server = {
    schema: 'http',
    domain: 'localhost',
    ip: '127.0.0.1',
    port: process.env.port || 2500
}

exports.fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
        //cb(null, uuidv4()+'-'+file.originalname);
    }
})

exports.fileFilter = (req, file, cb) => {
    const type = ['image/png', 'image/jpeg', 'image/jpg'];
    cb(null, type.includes(file.mimetype)); 
}
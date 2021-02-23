
const time = new Date();
const timestamp = time.getDate() +"-"+ (time.getMonth() + 1 ) +"-"+ time.getFullYear() +" "+ time.getHours() +":"+ time.getMinutes() +":"+ time.getSeconds()
 
/*
 * Logger - Console
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.console = (req, res, next) => {
    console.log(req.protocol+ '://'+ req.get('host')+req.originalUrl+" - "+ timestamp);
    next();
}
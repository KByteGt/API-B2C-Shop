
const moment = require('moment');
/**
 * Logger - Console
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.console = (req, res, next) => {
    console.log(req.protocol+ '://'+ req.get('host')+req.originalUrl+" - "+moment().format());
    next();
}
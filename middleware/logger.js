const config = require('../config');
const timestamp = new Date();

/*
 * Logger - Console
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

exports.console = (req, res, next) => {
    console.log(config.getDir + " - " + timestamp);
    //console.log(req.protocol+ '://'+ req.get('host')+req.originalUrl+" - "+ timestamp);
    next();
}
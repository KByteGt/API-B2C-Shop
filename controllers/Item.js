const db = require('../Items');

/**
 * GET
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * 
 * @returns JSON - list of items
 */

exports.getItems = (req, res, next) => {
    res.status(200).json({
        items: db
    })
}
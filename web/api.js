const express = require('express');

//Controllers
const itemController = require('../controllers/Item');

const route = express.Router();

/**
 * /api/item/items
 */

route.get('/item/items', itemController.getItems);

module.exports = api;
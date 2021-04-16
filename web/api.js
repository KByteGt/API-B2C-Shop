const express = require('express');

//Controllers
const itemController = require('../controllers/Item');

const api = express.Router();

/**
 * /api/item/items
 */

//api.get('/item/items', itemController.getItems);

api.post('/item', itemController.createItem);

module.exports = api;
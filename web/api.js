const express = require('express');

//Controllers
const itemController = require('../controllers/Item');

const api = express.Router();

/**
 * /api/item/
 */

api.post('/item', itemController.createItem);
api.get('/item/items', itemController.getItems);
api.get('/item/:id', itemController.readItem);
api.put('/item/:id', itemController.updateItem);
api.delete('/item/:id', itemController.deleteItem);
api.get('/item/price/:id', itemController.getPrice);

module.exports = api;
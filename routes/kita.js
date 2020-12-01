const express = require('express');
const kitaRouter = express.Router();
const kitaController = require('../controllers/kita');

kitaRouter.get('/filter', kitaController.getFiltered);
kitaRouter.get('/', kitaController.getAll);
kitaRouter.get('/:id', kitaController.getOne);

module.exports = kitaRouter;

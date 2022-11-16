//importar todos los router de manera modular
const express = require('express');
const productRouter = require('./products.router.js');
const usersRouter = require('./users.router.js');
const categoriesRouter = require('./categories.router.js');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1',router); //EndPoint para versionamiento
  router.use('/products', productRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;

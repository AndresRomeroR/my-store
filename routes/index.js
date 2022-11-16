//importar todos los router de manera modular
const express = require('express');
const productRouter = require('./products.router.js');
const usersRouter = require('./users.router.js');
const categoriesRouter = require('./categories.router.js');

function routerApi(app) {
  const router = express.router();
  app.use('/api/v1',router); //EndPoint para versionamiento
  app.use('/products', productRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;

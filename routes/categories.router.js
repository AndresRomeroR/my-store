//router especifico para las categorias

const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
})

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for(let index = 0; index < limit; index++) {
    products.push({
      name: faker.music.genre(),
    });
  }
  res.json(products);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'deleted',
    id
  });
})

module.exports = router;

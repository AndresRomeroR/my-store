const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send('Hola server desde Express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nuevo EndPoint');
})

app.get('/products', (req, res) => {
  res.json([{
    name: 'Producto 1',
    price: 1000
  },{
    name: 'Producto 2',
    price: 2000
  }]);
})

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 1',
    price: 1000
  });
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
})

app.listen(port, () => {
  console.log('Mi port ' + port)
});

const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send('Hola server desde Express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nuevo EndPoint');
})

app.get('/productos', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: 1000
  });
})

app.listen(port, () => {
  console.log('Mi port ' + port)
});

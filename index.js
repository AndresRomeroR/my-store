const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send('Hola server desde Express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nuevo EndPoint');
})

routerApi(app);

app.listen(port, () => {
  console.log('Mi port ' + port)
});

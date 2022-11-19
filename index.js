const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler')

const app = express();
const port = 3030;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola server desde Express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nuevo EndPoint');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port)
});

const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send('Hola server desde Express');
})

app.listen(port, () => {
  console.log('Mi port ' + port)
});

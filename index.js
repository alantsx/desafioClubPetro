const express = require('express');
const app = express();

app.use('/', require('./routes/routes'));

app.listen(8080, () => {
  console.log("👾Servidor iniciado👾")
});
const express = require('express');
const routes = require('./routes');
const app = express();

//Informando que só iremos receber dados em Json
app.use(express.json());
app.use(routes);


app.listen(3333);

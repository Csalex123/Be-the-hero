const express = require('express');
const routes = require('./routes');

//cors é uma depedência de segurança que determina quem que vai poder acessar essa api
const cors = require('cors');

const app = express();


/*
    Esse formato permite que todas aplicações front-end possam acessar
    mas caso eu quiser bloquear apenas para uma ficaria assim: app.use(cors(origin: 'http://meusite.com'))
*/ 
app.use(cors());



//Informando que só iremos receber dados em Json
app.use(express.json());
app.use(routes);


app.listen(3333);

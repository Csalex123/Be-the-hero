const express = require('express');

const OngController = require('./controllers/OngController');
const CaseController = require('./controllers/CaseController');

const routes = express.Router();

/*Rota para listar retornar todas as ongs*/
routes.get('/ongs', OngController.index);

/* Rota que cria uma ong */
routes.post('/ongs',  OngController.create);

/* Rota que cria um caso */
routes.post('/ongs', CaseController.create);



//Exportando as routas para os outros arquivos verem
module.exports = routes;

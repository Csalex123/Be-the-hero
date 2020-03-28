const express = require('express');

const OngController = require('./controllers/OngController');
const CaseController = require('./controllers/CaseController');
const ProfileController = require('./controllers/ProfileController');
const SesssionController = require('./controllers/SessionController');


const routes = express.Router();

/*Rota para listar retornar todas as ongs*/
routes.get('/ongs', OngController.index);
/* Rota que cria uma ong */
routes.post('/ongs',  OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/cases', CaseController.create);
routes.get('/cases', CaseController.index);
routes.delete('/cases/:id', CaseController.delete);


//Rota para efetuar login
routes.post('/sessions', SesssionController.create); 



//Exportando as routas para os outros arquivos verem
module.exports = routes;

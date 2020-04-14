const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json()); /**necessario para podermos passar o body da requisicao seja post, put... como json */
app.use(routes);
app.use(errors());/**melhorando a exibicao do erro quando algo vindo do front para o back esta invalido! */

module.exports = app;
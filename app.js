const express = require('express');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// SECURITY: Disable X-Powered-By header to prevent technology fingerprinting
app.disable('x-powered-by');

app.use(express.json());

app.use('/escola', routes);


app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
});
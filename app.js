const express = require('express');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// Security enhancement: disable X-Powered-By header to prevent technology fingerprinting
app.disable('x-powered-by');

// Security enhancement: add a payload size limit to prevent DoS attacks
app.use(express.json({ limit: '10kb' }));

app.use('/escola', routes);


app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
});
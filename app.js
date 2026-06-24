const express = require('express');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// Disable X-Powered-By header to prevent fingerprinting
app.disable('x-powered-by');

// Use express.json with a limit to prevent large payload DoS attacks
app.use(express.json({ limit: '10kb' }));

app.use('/escola', routes);


app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
});
const express = require('express');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

app.disable('x-powered-by'); // Security enhancement: technology fingerprinting protection
app.use(express.json({ limit: '10kb' })); // Security enhancement: DoS protection

app.use('/escola', routes);


app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
});
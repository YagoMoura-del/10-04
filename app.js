const express = require('express');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// SECURITY: Limiting payload size to 10kb as a defense-in-depth measure against DoS attacks.
app.use(express.json({ limit: '10kb' }));

app.use('/escola', routes);


app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
});
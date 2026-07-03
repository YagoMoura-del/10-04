const express = require('express');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// SECURITY: Disable 'x-powered-by' header to prevent technology fingerprinting.
app.disable('x-powered-by');

// SECURITY: Set a limit on the JSON payload to protect against large-payload Denial of Service (DoS) attacks.
app.use(express.json({ limit: '10kb' }));

app.use('/escola', routes);


app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
});
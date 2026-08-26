const express = require('express');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();

// SECURITY: Disable X-Powered-By header to prevent technology stack fingerprinting
app.disable('x-powered-by');

// SECURITY: Enforce payload size limit to prevent Denial of Service (DoS) attacks
app.use(express.json({ limit: '10kb' }));

app.use('/escola', routes);


app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
});
const express = require('express');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();

// SECURITY: Disable 'X-Powered-By' header to avoid exposing server technologies to attackers
app.disable('x-powered-by');

// SECURITY: Limit JSON payload size to 10kb to mitigate Denial of Service (DoS) via huge payload payloads
app.use(express.json({ limit: '10kb' }));

app.use('/escola', routes);

app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
});

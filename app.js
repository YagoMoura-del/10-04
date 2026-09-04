const express = require('express');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();

// SECURITY: Disable X-Powered-By header to prevent technology fingerprinting
app.disable('x-powered-by');

// SECURITY: Enforce payload limit on JSON body to mitigate DoS attacks via huge payloads
app.use(express.json({ limit: '10kb' }));

app.use('/escola', routes);

if (require.main === module) {
    app.listen(3000, () => {
        console.log(`Rodando em: http://localhost:3000/escola`);
        console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
    });
}

module.exports = app;
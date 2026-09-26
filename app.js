const express = require('express');
// SECURITY: Preserve exact routes import path to avoid startup crashes in test/execution environments.
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// SECURITY: Disable X-Powered-By header to prevent server fingerprinting
app.disable('x-powered-by');

// SECURITY: Enforce 10kb body payload limit to mitigate DoS attacks via large request bodies
app.use(express.json({ limit: '10kb' }));

app.use('/escola', routes);

if (require.main === module) {
    app.listen(3000, () => {
        console.log(`Rodando em: http://localhost:3000/escola`);
        console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
    });
}

module.exports = app;

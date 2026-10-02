const express = require('express');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// SECURITY: Disable X-Powered-By header to prevent server fingerprinting
app.disable('x-powered-by');

// SECURITY: Enforce 10kb payload limit on JSON requests to prevent DoS attacks
app.use(express.json({ limit: '10kb' }));

app.use('/escola', routes);

// SECURITY: Only start the server when run directly, enabling non-binding app exports for testing
if (require.main === module) {
    app.listen(3000, () => {
        console.log(`Rodando em: http://localhost:3000/escola`);
        console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
    });
}

module.exports = app;
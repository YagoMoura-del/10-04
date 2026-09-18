const express = require('express');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();

// SECURITY: Disable X-Powered-By header to prevent server fingerprinting
app.disable('x-powered-by');

// SECURITY: Restrict JSON payload size to 10kb to mitigate Denial of Service (DoS) attacks
app.use(express.json({ limit: '10kb' }));

app.use('/escola', routes);

// Only listen if executed directly, allowing app to be imported in tests without starting server
if (require.main === module) {
    app.listen(3000, () => {
        console.log(`Rodando em: http://localhost:3000/escola`);
        console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
    });
}

module.exports = app;

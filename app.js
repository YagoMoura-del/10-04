const express = require('express');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// SECURITY: Disable X-Powered-By header to prevent Express technology fingerprinting
app.disable('x-powered-by');

// SECURITY: Set defensive security headers on all responses
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    next();
});

app.use(express.json());

app.use('/escola', routes);

if (require.main === module) {
    app.listen(3000, () => {
        console.log(`Rodando em: http://localhost:3000/escola`);
        console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
    });
}

module.exports = app;

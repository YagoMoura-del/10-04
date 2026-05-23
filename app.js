const express = require('express');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// Security hardening
app.disable('x-powered-by');
app.use(express.json({ limit: '10kb' })); // Prevent large payload DoS

// Basic security headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    next();
});

app.use('/escola', routes);

app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
});
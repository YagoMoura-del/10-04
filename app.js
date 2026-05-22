const express = require('express');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();

// Security: Disable X-Powered-By header to mitigate fingerprinting
app.disable('x-powered-by');

// Security: Set basic security headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    next();
});

// Security: Limit JSON payload size to prevent DoS attacks
app.use(express.json({ limit: '10kb' }));

app.use('/escola', routes);


app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
});

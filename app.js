const express = require('express');
const helmet = require('helmet');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// Security Hardening
app.use(helmet());
app.use(express.json({ limit: '10kb' })); // Limit JSON payload size to prevent DoS

app.use('/escola', routes);

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Rodando em: http://localhost:${PORT}/escola`);
        console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
    });
}

module.exports = app;

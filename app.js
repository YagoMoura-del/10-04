const express = require('express');
const helmet = require('helmet');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// Security hardening
app.use(helmet()); // Sets various security headers, including disabling x-powered-by
app.use(express.json({ limit: '10kb' })); // Mitigates large-payload DoS

app.use('/escola', routes);

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Rodando em: http://localhost:${PORT}/escola`);
        console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
    });
}

module.exports = app;

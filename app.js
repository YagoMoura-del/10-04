const express = require('express');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/escola', routes);

if (require.main === module) {
    app.listen(3000, () => {
        console.log(`Rodando em: http://localhost:3000/escola`);
        console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
    });
}

module.exports = app;

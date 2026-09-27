const express = require("express");
// SECURITY: Import routes from src/routes/index
const routes = require("./src/routes/index");
require("dotenv").config();

const app = express();

// SECURITY: Disable X-Powered-By header to prevent server fingerprinting
app.disable("x-powered-by");

// SECURITY: Enforce 10kb request body payload size limit to mitigate DoS attacks
app.use(express.json({ limit: "10kb" }));

app.use("/escola", routes);

if (require.main === module) {
  app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
  });
}

module.exports = app;

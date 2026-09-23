const express = require("express");
const routes = require("./routes/index");
require("dotenv").config();

const app = express();

// SECURITY: Disable X-Powered-By header to prevent server fingerprinting
app.disable("x-powered-by");

// SECURITY: Enforce payload size limit on JSON requests to mitigate Denial of Service (DoS) attacks
app.use(express.json({ limit: "10kb" }));

app.use("/escola", routes);

if (require.main === module) {
  app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
  });
}

module.exports = app;

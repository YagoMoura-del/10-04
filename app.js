const express = require("express");
const routes = require("./src/routes/index");
require("dotenv").config();

const app = express();

// SECURITY: Disable X-Powered-By header to prevent server fingerprinting
app.disable("x-powered-by");

// SECURITY: Defensive HTTP security headers to protect against MIME-sniffing, clickjacking, and referrer leakage
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  next();
});

// SECURITY: Enforce payload size limit to prevent Denial of Service (DoS) attacks via oversized request bodies
app.use(express.json({ limit: "100kb" }));

app.use("/escola", routes);

if (require.main === module) {
  app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
  });
}

module.exports = app;

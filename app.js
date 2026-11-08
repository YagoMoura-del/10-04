const express = require("express");
const routes = require("./src/routes/index");
require("dotenv").config();

const app = express();

// SECURITY: Disable X-Powered-By header to avoid framework fingerprinting
app.disable("x-powered-by");

// SECURITY: Set defensive security headers to mitigate clickjacking, MIME sniffing, and ensure HTTPS
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains",
  );
  next();
});

// SECURITY: Limit request body size to 100kb to mitigate Denial of Service (DoS) attacks
app.use(express.json({ limit: "100kb" }));

app.use("/escola", routes);

if (require.main === module) {
  app.listen(3000, () => {
    console.log(`Rodando em: http://localhost:3000/escola`);
    console.log(`Rotas disponíveis: /cursos, /turmas, /alunos`);
  });
}

module.exports = app;

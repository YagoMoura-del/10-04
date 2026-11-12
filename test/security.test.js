const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const express = require("express");
const app = require("../app");

test("Security configurations on Express app", async (t) => {
  // Add a lightweight ping route on the existing app router for header testing without DB dependency
  app.get("/ping", (req, res) => res.send("pong"));

  let server;
  let port;

  await new Promise((resolve) => {
    server = http.createServer(app);
    server.listen(0, () => {
      port = server.address().port;
      resolve();
    });
  });

  t.after(() => {
    server.close();
  });

  await t.test(
    "X-Powered-By header is removed and security headers are present",
    async () => {
      const res = await fetch(`http://localhost:${port}/ping`);
      assert.strictEqual(res.headers.get("x-powered-by"), null);
      assert.strictEqual(res.headers.get("x-content-type-options"), "nosniff");
      assert.strictEqual(res.headers.get("x-frame-options"), "DENY");
    },
  );

  await t.test(
    "Payload size limit rejects payloads exceeding 100kb with 413",
    async () => {
      const largeData = "a".repeat(101 * 1024);
      const res = await fetch(`http://localhost:${port}/escola/cursos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome_curso: largeData }),
      });
      assert.strictEqual(res.status, 413);
    },
  );
});

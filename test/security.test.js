const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const app = require("../app");

test("Security configurations on Express app", async (t) => {
  let server;
  let baseUrl;

  await t.before(() => {
    return new Promise((resolve) => {
      server = http.createServer(app);
      server.listen(0, () => {
        const port = server.address().port;
        baseUrl = `http://127.0.0.1:${port}`;
        resolve();
      });
    });
  });

  await t.after(() => {
    return new Promise((resolve) => {
      server.close(resolve);
    });
  });

  await t.test(
    "Defensive security headers are set and X-Powered-By is disabled",
    async () => {
      const res = await fetch(`${baseUrl}/escola/cursos`);
      assert.strictEqual(res.headers.get("x-content-type-options"), "nosniff");
      assert.strictEqual(res.headers.get("x-frame-options"), "DENY");
      assert.strictEqual(res.headers.get("x-powered-by"), null);
    },
  );

  await t.test(
    "Large payloads exceeding 100kb limit are rejected with 413 Payload Too Large",
    async () => {
      const largeString = "a".repeat(101 * 1024);
      const res = await fetch(`${baseUrl}/escola/cursos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome_curso: largeString }),
      });
      assert.strictEqual(res.status, 413);
    },
  );
});

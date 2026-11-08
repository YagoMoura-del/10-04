const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const app = require("../app");

test("Security configurations on Express application", async (t) => {
  let server;
  let baseUrl;

  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const port = server.address().port;
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });

  t.after(() => {
    server.close();
  });

  await t.test("does not expose X-Powered-By header", async () => {
    const res = await fetch(`${baseUrl}/escola/cursos`);
    assert.strictEqual(res.headers.get("x-powered-by"), null);
  });

  await t.test("includes defensive security headers", async () => {
    const res = await fetch(`${baseUrl}/escola/cursos`);
    assert.strictEqual(res.headers.get("x-content-type-options"), "nosniff");
    assert.strictEqual(res.headers.get("x-frame-options"), "DENY");
    assert.ok(res.headers.get("strict-transport-security"));
  });

  await t.test(
    "rejects payload exceeding 100kb with 413 Payload Too Large",
    async () => {
      const largeData = "a".repeat(105 * 1024);
      const res = await fetch(`${baseUrl}/escola/cursos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome_curso: largeData }),
      });
      assert.strictEqual(res.status, 413);
    },
  );
});

const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const app = require("../app");

test("Security configurations on Express app", async (t) => {
  let server;
  let baseUrl;

  await t.test("setup server", async () => {
    await new Promise((resolve) => {
      server = http.createServer(app);
      server.listen(0, () => {
        const port = server.address().port;
        baseUrl = `http://127.0.0.1:${port}`;
        resolve();
      });
    });
  });

  await t.test(
    "should set defensive security headers and remove X-Powered-By",
    async () => {
      const res = await fetch(`${baseUrl}/escola/nonexistent`);
      assert.strictEqual(res.headers.get("x-powered-by"), null);
      assert.strictEqual(res.headers.get("x-content-type-options"), "nosniff");
      assert.strictEqual(res.headers.get("x-frame-options"), "DENY");
      assert.strictEqual(
        res.headers.get("content-security-policy"),
        "default-src 'none'",
      );
      assert.strictEqual(
        res.headers.get("strict-transport-security"),
        "max-age=31536000; includeSubDomains",
      );
    },
  );

  await t.test("should reject JSON payload exceeding 100kb limit", async () => {
    const largePayload = JSON.stringify({ data: "a".repeat(1024 * 110) });
    const res = await fetch(`${baseUrl}/escola/cursos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: largePayload,
    });
    assert.strictEqual(res.status, 413);
  });

  await t.test("teardown server", async () => {
    await new Promise((resolve) => {
      server.close(resolve);
    });
  });
});

const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const app = require("../app");

test("Security Headers and Body Limit Tests", async (t) => {
  let server;
  let baseUrl;

  await new Promise((resolve) => {
    // Add a dummy test endpoint to test middleware without triggering database connection
    app.get("/test-ping", (req, res) => res.json({ ok: true }));
    server = http.createServer(app);
    server.listen(0, "127.0.0.1", () => {
      const port = server.address().port;
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });

  t.after(() => {
    if (server) {
      server.close();
    }
  });

  await t.test("disables X-Powered-By header", async () => {
    const res = await fetch(`${baseUrl}/test-ping`);
    assert.equal(res.headers.get("x-powered-by"), null);
  });

  await t.test("sets defensive security headers", async () => {
    const res = await fetch(`${baseUrl}/test-ping`);
    assert.equal(res.headers.get("x-content-type-options"), "nosniff");
    assert.equal(res.headers.get("x-frame-options"), "DENY");
  });

  await t.test(
    "rejects JSON request bodies larger than 100kb with 413 Payload Too Large",
    async () => {
      const largePayload = { data: "a".repeat(105 * 1024) };
      const res = await fetch(`${baseUrl}/test-ping`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(largePayload),
      });
      assert.equal(res.status, 413);
    },
  );
});

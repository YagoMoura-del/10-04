const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const app = require("../app");

test("Security configurations: X-Powered-By is disabled", () => {
  assert.strictEqual(app.get("x-powered-by"), false);
});

test("Security middleware: defensive HTTP headers are sent", async () => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;

  try {
    const response = await fetch(`http://localhost:${port}/escola/cursos`);
    assert.strictEqual(response.headers.get("x-powered-by"), null);
    assert.strictEqual(
      response.headers.get("x-content-type-options"),
      "nosniff",
    );
    assert.strictEqual(response.headers.get("x-frame-options"), "DENY");
    assert.strictEqual(response.headers.get("referrer-policy"), "no-referrer");
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

test("Security configurations: payload size limit is enforced", async () => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;

  try {
    const oversizedBody = JSON.stringify({ data: "a".repeat(101 * 1024) });
    const response = await fetch(`http://localhost:${port}/escola/cursos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: oversizedBody,
    });
    assert.strictEqual(response.status, 413);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

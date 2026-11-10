const { test } = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const app = require("../app");

test("Security: X-Powered-By header is disabled", async () => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;

  try {
    const res = await fetch(`http://127.0.0.1:${port}/escola/nonexistent`);
    assert.strictEqual(res.headers.get("x-powered-by"), null);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

test("Security: Request payload size limit (100kb) is enforced", async () => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;

  try {
    // Create payload larger than 100kb
    const largePayload = JSON.stringify({ data: "a".repeat(105 * 1024) });
    const res = await fetch(`http://127.0.0.1:${port}/escola/cursos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: largePayload,
    });

    assert.strictEqual(res.status, 413);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

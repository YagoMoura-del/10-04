const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const app = require("../app");

test("Security Headers: X-Powered-By header is disabled", async (t) => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;

  try {
    const res = await fetch(`http://localhost:${port}/escola/cursos`);
    assert.strictEqual(
      res.headers.get("x-powered-by"),
      null,
      "X-Powered-By header should not be present in response",
    );
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

test("DoS Mitigation: Enforces 100kb payload size limit on JSON bodies", async (t) => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;

  try {
    // Create payload larger than 100kb
    const largePayload = JSON.stringify({
      data: "a".repeat(105 * 1024),
    });

    const res = await fetch(`http://localhost:${port}/escola/cursos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: largePayload,
    });

    assert.strictEqual(
      res.status,
      413,
      "Should return 413 Payload Too Large for bodies over 100kb",
    );
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

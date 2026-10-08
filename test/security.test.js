const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('Security headers are present in HTTP responses and X-Powered-By is disabled', async (t) => {
    const server = app.listen(0);
    t.after(() => server.close());

    const address = server.address();
    const url = `http://localhost:${address.port}/escola/cursos`;

    // Make a request to the app
    const response = await fetch(url);

    // Verify security headers
    assert.strictEqual(response.headers.get('x-content-type-options'), 'nosniff');
    assert.strictEqual(response.headers.get('x-frame-options'), 'DENY');
    assert.strictEqual(response.headers.get('strict-transport-security'), 'max-age=31536000; includeSubDomains');
    assert.strictEqual(response.headers.get('content-security-policy'), "default-src 'self'");
    assert.strictEqual(response.headers.get('referrer-policy'), 'no-referrer');

    // Verify X-Powered-By is omitted
    assert.strictEqual(response.headers.get('x-powered-by'), null);
});

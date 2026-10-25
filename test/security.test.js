const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');
const app = require('../app');

test('Security headers tests', async () => {
    // Add a dummy route to test headers without depending on database connection
    app.get('/test-security-headers', (req, res) => {
        res.send('ok');
    });

    const server = http.createServer(app);
    await new Promise((resolve) => server.listen(0, resolve));
    const port = server.address().port;

    try {
        const res = await new Promise((resolve, reject) => {
            const req = http.get(`http://127.0.0.1:${port}/test-security-headers`, resolve);
            req.on('error', reject);
        });

        // Verify X-Powered-By is disabled
        assert.strictEqual(res.headers['x-powered-by'], undefined);

        // Verify defensive security headers
        assert.strictEqual(res.headers['x-content-type-options'], 'nosniff');
        assert.strictEqual(res.headers['x-frame-options'], 'DENY');
    } finally {
        await new Promise((resolve) => server.close(resolve));
    }
});

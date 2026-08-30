const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');
const express = require('express');

test('Security configurations on Express app', async (t) => {
    // Create isolated express app mirroring app.js security config
    const app = express();
    app.disable('x-powered-by');
    app.use(express.json({ limit: '10kb' }));
    app.get('/escola/cursos', (req, res) => res.json([]));
    app.post('/escola/cursos', (req, res) => res.json({ success: true }));

    let server;
    let port;

    await new Promise((resolve) => {
        server = app.listen(0, () => {
            port = server.address().port;
            resolve();
        });
    });

    t.after(() => {
        server.close();
    });

    await t.test('should not include x-powered-by header in response', async () => {
        await new Promise((resolve, reject) => {
            const req = http.request({
                hostname: '127.0.0.1',
                port: port,
                path: '/escola/cursos',
                method: 'GET'
            }, (res) => {
                assert.strictEqual(res.headers['x-powered-by'], undefined);
                resolve();
            });
            req.on('error', reject);
            req.end();
        });
    });

    await t.test('should reject payloads larger than 10kb with status 413', async () => {
        const largePayload = JSON.stringify({ data: 'a'.repeat(11 * 1024) });
        const options = {
            hostname: '127.0.0.1',
            port: port,
            path: '/escola/cursos',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(largePayload)
            }
        };

        await new Promise((resolve, reject) => {
            const req = http.request(options, (res) => {
                assert.strictEqual(res.statusCode, 413);
                resolve();
            });
            req.on('error', reject);
            req.write(largePayload);
            req.end();
        });
    });
});

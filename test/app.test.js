const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../app');

test('app.js exports Express application instance', () => {
    assert.strictEqual(typeof app, 'function');
    assert.strictEqual(typeof app.use, 'function');
});

test('app.js has disabled x-powered-by header', () => {
    assert.strictEqual(app.disabled('x-powered-by'), true);
});

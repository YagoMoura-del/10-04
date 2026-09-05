const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('Express app disabled x-powered-by header setting', () => {
    assert.strictEqual(app.get('x-powered-by'), false);
});

test('Express app exports valid express application instance', () => {
    assert.strictEqual(typeof app, 'function');
    assert.strictEqual(typeof app.use, 'function');
});

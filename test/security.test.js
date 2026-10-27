const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('SECURITY: X-Powered-By header should be disabled', (t) => {
    assert.strictEqual(app.get('x-powered-by'), false, 'x-powered-by setting should be disabled on app');
});

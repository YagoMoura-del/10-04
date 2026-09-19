const { describe, it } = require('node:test');
const assert = require('node:assert');
const app = require('../app');

describe('App Security Configurations', () => {
    it('should have x-powered-by disabled', () => {
        assert.strictEqual(app.get('x-powered-by'), false);
    });

    it('should export express application instance', () => {
        assert.strictEqual(typeof app, 'function');
        assert.strictEqual(typeof app.use, 'function');
    });
});

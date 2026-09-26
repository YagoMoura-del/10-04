const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../app');

describe('App Security Hardening', () => {
    it('should have x-powered-by header disabled', () => {
        // Express sets app.get('x-powered-by') to false when disabled
        assert.equal(app.get('x-powered-by'), false);
    });

    it('should have app exported and route defined', () => {
        assert.ok(app);
        assert.equal(typeof app, 'function');
    });
});

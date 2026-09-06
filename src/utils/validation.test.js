const { describe, it } = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCpf } = require('./validation');

describe('Validation Helpers', () => {
    describe('isValidEmail', () => {
        it('should return true for valid emails', () => {
            assert.strictEqual(isValidEmail('user@example.com'), true);
            assert.strictEqual(isValidEmail('test.user+123@domain.co.uk'), true);
        });

        it('should return false for invalid emails', () => {
            assert.strictEqual(isValidEmail('invalid-email'), false);
            assert.strictEqual(isValidEmail('user@.com'), false);
            assert.strictEqual(isValidEmail('@example.com'), false);
            assert.strictEqual(isValidEmail(null), false);
            assert.strictEqual(isValidEmail(123), false);
        });
    });

    describe('isValidCpf', () => {
        it('should return true for valid formatted and unformatted CPFs', () => {
            assert.strictEqual(isValidCpf('12345678901'), true);
            assert.strictEqual(isValidCpf('123.456.789-01'), true);
        });

        it('should return false for invalid CPFs', () => {
            assert.strictEqual(isValidCpf('123456'), false);
            assert.strictEqual(isValidCpf('123.456.789-0'), false);
            assert.strictEqual(isValidCpf('abcdefghijk'), false);
            assert.strictEqual(isValidCpf(null), false);
            assert.strictEqual(isValidCpf(undefined), false);
        });
    });
});

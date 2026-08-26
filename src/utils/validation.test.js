const { describe, it } = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCpf } = require('./validation');

describe('validation utilities', () => {
    describe('isValidEmail', () => {
        it('should return true for valid email formats', () => {
            assert.strictEqual(isValidEmail('user@example.com'), true);
            assert.strictEqual(isValidEmail('test.user@domain.co.br'), true);
        });

        it('should return false for invalid email formats', () => {
            assert.strictEqual(isValidEmail('invalid-email'), false);
            assert.strictEqual(isValidEmail('user@.com'), false);
            assert.strictEqual(isValidEmail(''), false);
            assert.strictEqual(isValidEmail(null), false);
            assert.strictEqual(isValidEmail(123), false);
        });
    });

    describe('isValidCpf', () => {
        it('should return true for valid 11-digit or formatted CPF', () => {
            assert.strictEqual(isValidCpf('12345678901'), true);
            assert.strictEqual(isValidCpf('123.456.789-01'), true);
        });

        it('should return false for invalid CPF formats', () => {
            assert.strictEqual(isValidCpf('12345'), false);
            assert.strictEqual(isValidCpf('123.456.789-0'), false);
            assert.strictEqual(isValidCpf('abcdefghijk'), false);
            assert.strictEqual(isValidCpf(null), false);
        });
    });
});

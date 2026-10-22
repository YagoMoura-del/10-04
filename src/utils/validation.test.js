const { describe, it } = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCPF } = require('./validation');

describe('isValidEmail', () => {
    it('returns true for valid email addresses', () => {
        assert.strictEqual(isValidEmail('test@example.com'), true);
        assert.strictEqual(isValidEmail('user.name+tag@domain.co.uk'), true);
    });

    it('returns false for invalid email addresses', () => {
        assert.strictEqual(isValidEmail('invalid-email'), false);
        assert.strictEqual(isValidEmail('@domain.com'), false);
        assert.strictEqual(isValidEmail('user@'), false);
        assert.strictEqual(isValidEmail(''), false);
        assert.strictEqual(isValidEmail(null), false);
        assert.strictEqual(isValidEmail(123), false);
    });
});

describe('isValidCPF', () => {
    it('returns true for valid 11-digit or formatted CPF strings', () => {
        assert.strictEqual(isValidCPF('12345678901'), true);
        assert.strictEqual(isValidCPF('123.456.789-01'), true);
    });

    it('returns false for invalid CPF strings', () => {
        assert.strictEqual(isValidCPF('12345'), false);
        assert.strictEqual(isValidCPF('123.456.789-XX'), false);
        assert.strictEqual(isValidCPF('abc'), false);
        assert.strictEqual(isValidCPF(''), false);
        assert.strictEqual(isValidCPF(null), false);
        assert.strictEqual(isValidCPF(12345678901), false);
    });
});

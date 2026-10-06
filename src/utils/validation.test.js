const { describe, it } = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCPF } = require('./validation');

describe('Input Validation Security Utilities', () => {
    describe('isValidEmail', () => {
        it('should return true for valid email formats', () => {
            assert.strictEqual(isValidEmail('user@example.com'), true);
            assert.strictEqual(isValidEmail('aluno.teste@escola.edu.br'), true);
        });

        it('should return false for invalid email formats or non-strings', () => {
            assert.strictEqual(isValidEmail('invalid-email'), false);
            assert.strictEqual(isValidEmail('user@com'), false);
            assert.strictEqual(isValidEmail(''), false);
            assert.strictEqual(isValidEmail(null), false);
            assert.strictEqual(isValidEmail(12345), false);
        });
    });

    describe('isValidCPF', () => {
        it('should return true for valid 11-digit or formatted CPF strings', () => {
            assert.strictEqual(isValidCPF('12345678901'), true);
            assert.strictEqual(isValidCPF('123.456.789-01'), true);
        });

        it('should return false for invalid CPF formats or non-strings', () => {
            assert.strictEqual(isValidCPF('12345'), false);
            assert.strictEqual(isValidCPF('123.456.789-0'), false);
            assert.strictEqual(isValidCPF('abcdefghijk'), false);
            assert.strictEqual(isValidCPF(null), false);
            assert.strictEqual(isValidCPF(undefined), false);
        });
    });
});

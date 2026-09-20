const { test, describe } = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCPF } = require('./validation');

describe('Input Validation Security Tests', () => {
    describe('isValidEmail', () => {
        test('should return true for valid email formats', () => {
            assert.strictEqual(isValidEmail('user@example.com'), true);
            assert.strictEqual(isValidEmail('aluno.test@escola.edu.br'), true);
        });

        test('should return false for invalid email formats or non-strings', () => {
            assert.strictEqual(isValidEmail('invalid-email'), false);
            assert.strictEqual(isValidEmail('@domain.com'), false);
            assert.strictEqual(isValidEmail('user@.com'), false);
            assert.strictEqual(isValidEmail(12345), false);
            assert.strictEqual(isValidEmail(null), false);
        });
    });

    describe('isValidCPF', () => {
        test('should return true for valid CPF formats (formatted and unformatted digits)', () => {
            assert.strictEqual(isValidCPF('12345678901'), true);
            assert.strictEqual(isValidCPF('123.456.789-01'), true);
        });

        test('should return false for invalid CPF formats or non-strings', () => {
            assert.strictEqual(isValidCPF('12345'), false);
            assert.strictEqual(isValidCPF('123.456.789-999'), false);
            assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false);
            assert.strictEqual(isValidCPF(12345678901), false);
            assert.strictEqual(isValidCPF(null), false);
        });
    });
});

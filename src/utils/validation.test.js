const { test, describe } = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCPF } = require('./validation');

describe('Input Validation Utilities', () => {
    describe('isValidEmail', () => {
        test('should return true for valid emails', () => {
            assert.strictEqual(isValidEmail('user@example.com'), true);
            assert.strictEqual(isValidEmail('student.name@school.edu.br'), true);
        });

        test('should return false for invalid emails', () => {
            assert.strictEqual(isValidEmail('invalid-email'), false);
            assert.strictEqual(isValidEmail('@example.com'), false);
            assert.strictEqual(isValidEmail('user@.com'), false);
            assert.strictEqual(isValidEmail(null), false);
            assert.strictEqual(isValidEmail(12345), false);
        });
    });

    describe('isValidCPF', () => {
        test('should return true for valid CPF format (unformatted or formatted)', () => {
            assert.strictEqual(isValidCPF('12345678901'), true);
            assert.strictEqual(isValidCPF('123.456.789-01'), true);
        });

        test('should return false for invalid CPF format', () => {
            assert.strictEqual(isValidCPF('12345'), false);
            assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false);
            assert.strictEqual(isValidCPF(null), false);
            assert.strictEqual(isValidCPF(undefined), false);
        });
    });
});

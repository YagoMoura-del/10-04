const { test, describe } = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCPF } = require('./validation');

describe('Security Input Validation', () => {
    describe('isValidEmail', () => {
        test('valid email addresses', () => {
            assert.strictEqual(isValidEmail('user@example.com'), true);
            assert.strictEqual(isValidEmail('aluno.teste@escola.edu.br'), true);
        });

        test('invalid email addresses', () => {
            assert.strictEqual(isValidEmail('invalid-email'), false);
            assert.strictEqual(isValidEmail('user@'), false);
            assert.strictEqual(isValidEmail('@example.com'), false);
            assert.strictEqual(isValidEmail(12345), false);
            assert.strictEqual(isValidEmail(null), false);
        });
    });

    describe('isValidCPF', () => {
        test('valid CPF formats', () => {
            assert.strictEqual(isValidCPF('12345678901'), true);
            assert.strictEqual(isValidCPF('123.456.789-01'), true);
        });

        test('invalid CPF formats', () => {
            assert.strictEqual(isValidCPF('12345'), false);
            assert.strictEqual(isValidCPF('123.456.789-XX'), false);
            assert.strictEqual(isValidCPF('abc'), false);
            assert.strictEqual(isValidCPF(null), false);
        });
    });
});

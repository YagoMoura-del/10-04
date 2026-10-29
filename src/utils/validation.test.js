const { test, describe } = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCPF } = require('./validation');

describe('Security Validation Helpers', () => {
    describe('isValidEmail', () => {
        test('should return true for valid email addresses', () => {
            assert.strictEqual(isValidEmail('aluno@escola.com'), true);
            assert.strictEqual(isValidEmail('user.name@domain.co.br'), true);
        });

        test('should return false for invalid email addresses', () => {
            assert.strictEqual(isValidEmail('invalid-email'), false);
            assert.strictEqual(isValidEmail('aluno@'), false);
            assert.strictEqual(isValidEmail('@escola.com'), false);
            assert.strictEqual(isValidEmail('aluno@escola'), false);
            assert.strictEqual(isValidEmail(''), false);
            assert.strictEqual(isValidEmail(null), false);
            assert.strictEqual(isValidEmail(undefined), false);
            assert.strictEqual(isValidEmail(12345), false);
        });
    });

    describe('isValidCPF', () => {
        test('should return true for valid 11-digit or formatted CPF strings', () => {
            assert.strictEqual(isValidCPF('12345678901'), true);
            assert.strictEqual(isValidCPF('123.456.789-01'), true);
        });

        test('should return false for invalid CPF strings', () => {
            assert.strictEqual(isValidCPF('123456789'), false);
            assert.strictEqual(isValidCPF('123.456.789-001'), false);
            assert.strictEqual(isValidCPF('abcdefghijk'), false);
            assert.strictEqual(isValidCPF(''), false);
            assert.strictEqual(isValidCPF(null), false);
            assert.strictEqual(isValidCPF(undefined), false);
            assert.strictEqual(isValidCPF(12345678901), false);
        });
    });
});

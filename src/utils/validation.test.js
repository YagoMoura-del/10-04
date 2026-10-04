const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, isValidCpf } = require('./validation');

describe('isValidEmail', () => {
    test('should return true for valid email addresses', () => {
        assert.equal(isValidEmail('user@example.com'), true);
        assert.equal(isValidEmail('aluno.test@senai.br'), true);
    });

    test('should return false for invalid email addresses', () => {
        assert.equal(isValidEmail('invalid-email'), false);
        assert.equal(isValidEmail('user@com'), false);
        assert.equal(isValidEmail('@example.com'), false);
        assert.equal(isValidEmail(12345), false);
        assert.equal(isValidEmail(null), false);
    });
});

describe('isValidCpf', () => {
    test('should return true for valid 11-digit or formatted CPF', () => {
        assert.equal(isValidCpf('12345678901'), true);
        assert.equal(isValidCpf('123.456.789-01'), true);
    });

    test('should return false for invalid CPF format', () => {
        assert.equal(isValidCpf('12345'), false);
        assert.equal(isValidCpf('123.456.789-0A'), false);
        assert.equal(isValidCpf('abcdefghijk'), false);
        assert.equal(isValidCpf(null), false);
    });
});

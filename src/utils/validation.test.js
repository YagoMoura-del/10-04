const test = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCPF } = require('./validation');

test('isValidEmail accepts valid emails', () => {
    assert.strictEqual(isValidEmail('user@example.com'), true);
    assert.strictEqual(isValidEmail('aluno.test@escola.edu.br'), true);
});

test('isValidEmail rejects invalid emails', () => {
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('user@'), false);
    assert.strictEqual(isValidEmail('@example.com'), false);
    assert.strictEqual(isValidEmail('user@.com'), false);
    assert.strictEqual(isValidEmail(null), false);
    assert.strictEqual(isValidEmail(12345), false);
});

test('isValidCPF accepts valid CPF strings', () => {
    assert.strictEqual(isValidCPF('12345678900'), true);
    assert.strictEqual(isValidCPF('123.456.789-00'), true);
});

test('isValidCPF rejects invalid CPF strings', () => {
    assert.strictEqual(isValidCPF('12345'), false);
    assert.strictEqual(isValidCPF('123.456.789-000'), false);
    assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false);
    assert.strictEqual(isValidCPF(null), false);
    assert.strictEqual(isValidCPF(undefined), false);
});

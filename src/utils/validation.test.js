const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, isValidCPF } = require('./validation');

test('isValidEmail accepts valid email formats', () => {
    assert.strictEqual(isValidEmail('user@example.com'), true);
    assert.strictEqual(isValidEmail('aluno.teste@escola.edu.br'), true);
});

test('isValidEmail rejects invalid email formats', () => {
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('user@.com'), false);
    assert.strictEqual(isValidEmail('user@domain'), false);
    assert.strictEqual(isValidEmail(12345), false);
    assert.strictEqual(isValidEmail(null), false);
});

test('isValidCPF accepts valid CPF formats (unformatted and formatted)', () => {
    assert.strictEqual(isValidCPF('12345678901'), true);
    assert.strictEqual(isValidCPF('123.456.789-01'), true);
});

test('isValidCPF rejects invalid CPF formats', () => {
    assert.strictEqual(isValidCPF('123456789'), false);
    assert.strictEqual(isValidCPF('123.456.789-0'), false);
    assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false);
    assert.strictEqual(isValidCPF(12345678901), false);
    assert.strictEqual(isValidCPF(null), false);
});

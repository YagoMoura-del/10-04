const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, isValidCpf } = require('./validation');

test('isValidEmail returns true for valid emails', () => {
    assert.strictEqual(isValidEmail('user@example.com'), true);
    assert.strictEqual(isValidEmail('aluno.test@escola.edu.br'), true);
});

test('isValidEmail returns false for invalid emails', () => {
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('@example.com'), false);
    assert.strictEqual(isValidEmail('user@'), false);
    assert.strictEqual(isValidEmail(null), false);
    assert.strictEqual(isValidEmail(123), false);
});

test('isValidCpf returns true for valid CPFs', () => {
    assert.strictEqual(isValidCpf('12345678901'), true);
    assert.strictEqual(isValidCpf('123.456.789-01'), true);
});

test('isValidCpf returns false for invalid CPFs', () => {
    assert.strictEqual(isValidCpf('123456789'), false);
    assert.strictEqual(isValidCpf('abc.def.ghi-jk'), false);
    assert.strictEqual(isValidCpf(null), false);
    assert.strictEqual(isValidCpf(undefined), false);
});

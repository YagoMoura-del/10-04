const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, isValidCpf } = require('./validation');

test('isValidEmail accepts valid emails', () => {
    assert.strictEqual(isValidEmail('aluno@escola.edu.br'), true);
    assert.strictEqual(isValidEmail('user.name@domain.com'), true);
});

test('isValidEmail rejects invalid emails', () => {
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('@domain.com'), false);
    assert.strictEqual(isValidEmail('user@'), false);
    assert.strictEqual(isValidEmail(null), false);
    assert.strictEqual(isValidEmail(12345), false);
});

test('isValidCpf accepts valid CPFs', () => {
    assert.strictEqual(isValidCpf('12345678901'), true);
    assert.strictEqual(isValidCpf('123.456.789-01'), true);
});

test('isValidCpf rejects invalid CPFs', () => {
    assert.strictEqual(isValidCpf('12345'), false);
    assert.strictEqual(isValidCpf('123456789012'), false);
    assert.strictEqual(isValidCpf('abc.def.ghi-jkl'), false);
    assert.strictEqual(isValidCpf(null), false);
});

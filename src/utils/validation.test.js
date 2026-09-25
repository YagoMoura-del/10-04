const test = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCPF } = require('./validation');

test('isValidEmail - valid emails', () => {
    assert.strictEqual(isValidEmail('test@example.com'), true);
    assert.strictEqual(isValidEmail('user.name@domain.co.uk'), true);
    assert.strictEqual(isValidEmail('aluno@escola.br'), true);
});

test('isValidEmail - invalid emails', () => {
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('@example.com'), false);
    assert.strictEqual(isValidEmail('test@'), false);
    assert.strictEqual(isValidEmail(''), false);
    assert.strictEqual(isValidEmail(null), false);
    assert.strictEqual(isValidEmail(123), false);
});

test('isValidCPF - valid CPFs', () => {
    assert.strictEqual(isValidCPF('12345678901'), true);
    assert.strictEqual(isValidCPF('123.456.789-01'), true);
});

test('isValidCPF - invalid CPFs', () => {
    assert.strictEqual(isValidCPF('12345'), false);
    assert.strictEqual(isValidCPF('123.456.789-001'), false);
    assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false);
    assert.strictEqual(isValidCPF(''), false);
    assert.strictEqual(isValidCPF(null), false);
    assert.strictEqual(isValidCPF(12345678901), false);
});

const test = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCPF } = require('./validation');

test('isValidEmail validates email formats correctly', () => {
    assert.strictEqual(isValidEmail('test@example.com'), true);
    assert.strictEqual(isValidEmail('user.name@domain.co.br'), true);
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('user@'), false);
    assert.strictEqual(isValidEmail('@domain.com'), false);
    assert.strictEqual(isValidEmail(12345), false);
    assert.strictEqual(isValidEmail(null), false);
});

test('isValidCPF validates CPF formats correctly', () => {
    assert.strictEqual(isValidCPF('12345678901'), true);
    assert.strictEqual(isValidCPF('123.456.789-01'), true);
    assert.strictEqual(isValidCPF('123456789'), false);
    assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false);
    assert.strictEqual(isValidCPF(12345678901), false);
    assert.strictEqual(isValidCPF(null), false);
});

const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, isValidCPF } = require('./validation');

test('isValidEmail accepts valid email addresses', () => {
    assert.strictEqual(isValidEmail('user@example.com'), true);
    assert.strictEqual(isValidEmail('test.user@domain.co.br'), true);
});

test('isValidEmail rejects invalid email addresses', () => {
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('user@'), false);
    assert.strictEqual(isValidEmail('@domain.com'), false);
    assert.strictEqual(isValidEmail(12345), false);
    assert.strictEqual(isValidEmail(null), false);
});

test('isValidCPF accepts valid CPF formats', () => {
    assert.strictEqual(isValidCPF('12345678901'), true);
    assert.strictEqual(isValidCPF('123.456.789-01'), true);
});

test('isValidCPF rejects invalid CPF formats', () => {
    assert.strictEqual(isValidCPF('12345'), false);
    assert.strictEqual(isValidCPF('123.456.789-0'), false);
    assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false);
    assert.strictEqual(isValidCPF(null), false);
});

const test = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCPF } = require('./validation');

test('isValidEmail accepts valid email formats', () => {
    assert.strictEqual(isValidEmail('test@example.com'), true);
    assert.strictEqual(isValidEmail('user.name+tag@domain.co.uk'), true);
});

test('isValidEmail rejects invalid email formats', () => {
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('@example.com'), false);
    assert.strictEqual(isValidEmail('user@'), false);
    assert.strictEqual(isValidEmail(''), false);
    assert.strictEqual(isValidEmail(null), false);
    assert.strictEqual(isValidEmail(123), false);
});

test('isValidCPF accepts valid CPF formats', () => {
    assert.strictEqual(isValidCPF('12345678901'), true);
    assert.strictEqual(isValidCPF('123.456.789-01'), true);
});

test('isValidCPF rejects invalid CPF formats', () => {
    assert.strictEqual(isValidCPF('123456'), false);
    assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false);
    assert.strictEqual(isValidCPF(''), false);
    assert.strictEqual(isValidCPF(null), false);
    assert.strictEqual(isValidCPF(12345678901), false);
});

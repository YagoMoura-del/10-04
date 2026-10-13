const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, isValidCPF } = require('./validation');

test('isValidEmail accepts valid emails', () => {
    assert.strictEqual(isValidEmail('user@example.com'), true);
    assert.strictEqual(isValidEmail('test.user+1@domain.co.uk'), true);
});

test('isValidEmail rejects invalid emails', () => {
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('user@'), false);
    assert.strictEqual(isValidEmail('@example.com'), false);
    assert.strictEqual(isValidEmail(''), false);
    assert.strictEqual(isValidEmail(null), false);
    assert.strictEqual(isValidEmail(undefined), false);
});

test('isValidCPF accepts valid CPF formats', () => {
    assert.strictEqual(isValidCPF('12345678901'), true);
    assert.strictEqual(isValidCPF('123.456.789-01'), true);
});

test('isValidCPF rejects invalid CPF formats', () => {
    assert.strictEqual(isValidCPF('123'), false);
    assert.strictEqual(isValidCPF('123.456.789-0'), false);
    assert.strictEqual(isValidCPF('abcdefghijk'), false);
    assert.strictEqual(isValidCPF(''), false);
    assert.strictEqual(isValidCPF(null), false);
    assert.strictEqual(isValidCPF(undefined), false);
});

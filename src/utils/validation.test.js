const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, isValidCPF } = require('./validation');

test('isValidEmail accepts valid emails and rejects invalid ones', () => {
    assert.strictEqual(isValidEmail('test@example.com'), true);
    assert.strictEqual(isValidEmail('user.name@domain.co.uk'), true);
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('@domain.com'), false);
    assert.strictEqual(isValidEmail(12345), false);
});

test('isValidCPF accepts valid CPF formats and rejects invalid ones', () => {
    assert.strictEqual(isValidCPF('12345678901'), true);
    assert.strictEqual(isValidCPF('123.456.789-01'), true);
    assert.strictEqual(isValidCPF('12345'), false);
    assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false);
    assert.strictEqual(isValidCPF(null), false);
});

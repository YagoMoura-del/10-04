const test = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCpf } = require('./validation');

test('isValidEmail validates email formats correctly', () => {
    assert.strictEqual(isValidEmail('user@example.com'), true);
    assert.strictEqual(isValidEmail('user.name@domain.co.uk'), true);
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('@domain.com'), false);
    assert.strictEqual(isValidEmail('user@'), false);
    assert.strictEqual(isValidEmail(null), false);
    assert.strictEqual(isValidEmail(123), false);
});

test('isValidCpf validates CPF formats correctly', () => {
    assert.strictEqual(isValidCpf('12345678901'), true);
    assert.strictEqual(isValidCpf('123.456.789-01'), true);
    assert.strictEqual(isValidCpf('12345'), false);
    assert.strictEqual(isValidCpf('abc.def.ghi-jk'), false);
    assert.strictEqual(isValidCpf(null), false);
    assert.strictEqual(isValidCpf(undefined), false);
});

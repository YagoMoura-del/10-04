const test = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCpf } = require('./validation');

test('isValidEmail accepts valid emails', () => {
    assert.strictEqual(isValidEmail('student@example.com'), true);
    assert.strictEqual(isValidEmail('user.name@domain.co.br'), true);
});

test('isValidEmail rejects invalid emails', () => {
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('user@'), false);
    assert.strictEqual(isValidEmail('@domain.com'), false);
    assert.strictEqual(isValidEmail(12345), false);
    assert.strictEqual(isValidEmail(null), false);
});

test('isValidCpf accepts valid CPFs', () => {
    assert.strictEqual(isValidCpf('12345678901'), true);
    assert.strictEqual(isValidCpf('123.456.789-01'), true);
});

test('isValidCpf rejects invalid CPFs', () => {
    assert.strictEqual(isValidCpf('123456'), false);
    assert.strictEqual(isValidCpf('123.456.789-0'), false);
    assert.strictEqual(isValidCpf('abc.def.ghi-jk'), false);
    assert.strictEqual(isValidCpf(null), false);
});

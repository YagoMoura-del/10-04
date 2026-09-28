const test = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCpf } = require('./validation');

test('isValidEmail returns true for valid emails', () => {
    assert.strictEqual(isValidEmail('student@school.com'), true);
    assert.strictEqual(isValidEmail('user.name@domain.org'), true);
});

test('isValidEmail returns false for invalid emails', () => {
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('missing@domain'), false);
    assert.strictEqual(isValidEmail('@nodomain.com'), false);
    assert.strictEqual(isValidEmail(12345), false);
    assert.strictEqual(isValidEmail(null), false);
});

test('isValidCpf returns true for valid CPF strings', () => {
    assert.strictEqual(isValidCpf('12345678901'), true);
    assert.strictEqual(isValidCpf('123.456.789-01'), true);
});

test('isValidCpf returns false for invalid CPF strings', () => {
    assert.strictEqual(isValidCpf('123456789'), false);
    assert.strictEqual(isValidCpf('123.456.789-0'), false);
    assert.strictEqual(isValidCpf('abcdefghijk'), false);
    assert.strictEqual(isValidCpf(12345678901), false);
    assert.strictEqual(isValidCpf(null), false);
});

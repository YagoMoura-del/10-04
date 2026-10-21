const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, isValidCpf } = require('./validation');

test('isValidEmail validates email addresses correctly', () => {
    assert.equal(isValidEmail('user@example.com'), true);
    assert.equal(isValidEmail('student.123@escola.edu.br'), true);
    assert.equal(isValidEmail('invalid-email'), false);
    assert.equal(isValidEmail('user@'), false);
    assert.equal(isValidEmail('@domain.com'), false);
    assert.equal(isValidEmail(12345), false);
    assert.equal(isValidEmail(null), false);
});

test('isValidCpf validates CPF numbers correctly', () => {
    assert.equal(isValidCpf('12345678901'), true);
    assert.equal(isValidCpf('123.456.789-01'), true);
    assert.equal(isValidCpf('123456789'), false);
    assert.equal(isValidCpf('abc.def.ghi-jk'), false);
    assert.equal(isValidCpf(12345678901), false);
    assert.equal(isValidCpf(null), false);
});

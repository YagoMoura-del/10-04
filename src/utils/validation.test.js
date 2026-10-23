const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, isValidCPF } = require('./validation');

test('isValidEmail accepts valid email formats', () => {
    assert.equal(isValidEmail('user@example.com'), true);
    assert.equal(isValidEmail('student.test@school.org'), true);
    assert.equal(isValidEmail('  student@domain.com  '), true);
});

test('isValidEmail rejects invalid email formats', () => {
    assert.equal(isValidEmail('plainaddress'), false);
    assert.equal(isValidEmail('@missinguser.com'), false);
    assert.equal(isValidEmail('missingdomain@'), false);
    assert.equal(isValidEmail(null), false);
    assert.equal(isValidEmail(12345), false);
});

test('isValidCPF accepts valid CPF formats', () => {
    assert.equal(isValidCPF('12345678901'), true);
    assert.equal(isValidCPF('123.456.789-01'), true);
    assert.equal(isValidCPF('  123.456.789-01  '), true);
});

test('isValidCPF rejects invalid CPF formats', () => {
    assert.equal(isValidCPF('1234567890'), false); // 10 digits
    assert.equal(isValidCPF('123456789012'), false); // 12 digits
    assert.equal(isValidCPF('123-456-789-01'), false);
    assert.equal(isValidCPF('abc.def.ghi-jk'), false);
    assert.equal(isValidCPF(null), false);
});

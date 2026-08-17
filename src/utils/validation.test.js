const assert = require('assert');
const { isValidEmail, isValidCPF } = require('./validation');

// Test isValidEmail
assert.strictEqual(isValidEmail('test@example.com'), true, 'Valid email should pass');
assert.strictEqual(isValidEmail('invalid-email'), false, 'Invalid email should fail');
assert.strictEqual(isValidEmail(''), false, 'Empty string should fail');
assert.strictEqual(isValidEmail(null), false, 'Null should fail');
assert.strictEqual(isValidEmail(123), false, 'Number should fail');

// Test isValidCPF
assert.strictEqual(isValidCPF('12345678901'), true, '11 digit CPF should pass');
assert.strictEqual(isValidCPF('123.456.789-01'), true, 'Formatted CPF should pass');
assert.strictEqual(isValidCPF('1234567890'), false, '10 digit CPF should fail');
assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false, 'Alpha CPF should fail');
assert.strictEqual(isValidCPF(null), false, 'Null should fail');

console.log('All validation unit tests passed successfully!');

// SECURITY: Unit tests for security-related input validation helper methods are located in 'src/utils/validation.test.js'.

const assert = require('assert');
const { isValidEmail, isValidCPF } = require('./validation');

console.log('Running security-related input validation tests...');

// Test isValidEmail
assert.strictEqual(isValidEmail('test@example.com'), true, 'Valid email should pass');
assert.strictEqual(isValidEmail('a@b.c'), true, 'Minimal valid email should pass');
assert.strictEqual(isValidEmail('invalid-email'), false, 'Email missing @ should fail');
assert.strictEqual(isValidEmail('test@com'), false, 'Email missing top-level domain should fail');
assert.strictEqual(isValidEmail(null), false, 'Null email should fail');
assert.strictEqual(isValidEmail(123), false, 'Non-string email should fail');

// Test isValidCPF
assert.strictEqual(isValidCPF('12345678901'), true, 'Valid 11-digit CPF should pass');
assert.strictEqual(isValidCPF('123.456.789-01'), true, 'Valid formatted CPF should pass');
assert.strictEqual(isValidCPF('1234567890'), false, 'CPF with less than 11 digits should fail');
assert.strictEqual(isValidCPF('123456789012'), false, 'CPF with more than 11 digits should fail');
assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false, 'CPF with alphabet characters should fail');
assert.strictEqual(isValidCPF(null), false, 'Null CPF should fail');
assert.strictEqual(isValidCPF(12345678901), false, 'Non-string CPF should fail');

console.log('All validation tests passed successfully!');

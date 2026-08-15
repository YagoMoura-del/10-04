const assert = require('assert');
const { isValidEmail, isValidCPF } = require('./validation');

console.log('Running validation unit tests...');

// Email validation tests
assert.strictEqual(isValidEmail('test@example.com'), true, 'Valid email should pass');
assert.strictEqual(isValidEmail('user.name+tag@domain.co.uk'), true, 'Valid email with subdomains/tags should pass');
assert.strictEqual(isValidEmail('invalid-email'), false, 'Invalid email without @ should fail');
assert.strictEqual(isValidEmail('user@'), false, 'Invalid email without domain should fail');
assert.strictEqual(isValidEmail('@domain.com'), false, 'Invalid email without local part should fail');
assert.strictEqual(isValidEmail(12345), false, 'Non-string email input should fail');
assert.strictEqual(isValidEmail(null), false, 'Null email input should fail');

// CPF validation tests
assert.strictEqual(isValidCPF('12345678901'), true, '11 digit unformatted CPF should pass');
assert.strictEqual(isValidCPF('123.456.789-01'), true, 'Formatted CPF should pass');
assert.strictEqual(isValidCPF('1234567890'), false, 'CPF with less than 11 digits should fail');
assert.strictEqual(isValidCPF('123456789012'), false, 'CPF with more than 11 digits should fail');
assert.strictEqual(isValidCPF('123.456.789-AB'), false, 'CPF with non-numeric characters should fail');
assert.strictEqual(isValidCPF(12345678901), false, 'Non-string CPF input should fail');
assert.strictEqual(isValidCPF(null), false, 'Null CPF input should fail');

console.log('All validation unit tests passed successfully!');

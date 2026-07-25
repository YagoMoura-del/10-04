const assert = require('assert');
const { isValidEmail, isValidCpf } = require('./validation');

console.log('Running tests for input validation helper functions...');

// Test isValidEmail
assert.strictEqual(isValidEmail('test@example.com'), true);
assert.strictEqual(isValidEmail('a@b.c'), true);
assert.strictEqual(isValidEmail('test.email+alex@example.co.uk'), true);
assert.strictEqual(isValidEmail('invalid-email'), false);
assert.strictEqual(isValidEmail('@example.com'), false);
assert.strictEqual(isValidEmail('test@'), false);
assert.strictEqual(isValidEmail(null), false);
assert.strictEqual(isValidEmail(undefined), false);
assert.strictEqual(isValidEmail(123), false);

// Test isValidCpf
assert.strictEqual(isValidCpf('12345678901'), true);
assert.strictEqual(isValidCpf('123.456.789-01'), true);
assert.strictEqual(isValidCpf('1234567890'), false);
assert.strictEqual(isValidCpf('123456789012'), false);
assert.strictEqual(isValidCpf('abc.def.ghi-jk'), false);
assert.strictEqual(isValidCpf(null), false);
assert.strictEqual(isValidCpf(undefined), false);

console.log('All input validation helper tests passed!');

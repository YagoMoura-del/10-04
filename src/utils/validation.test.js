const assert = require('assert');
const { isValidEmail, isValidCpf } = require('./validation');

// Unit tests for isValidEmail
console.log('Running isValidEmail tests...');

// Valid emails
assert.strictEqual(isValidEmail('test@example.com'), true);
assert.strictEqual(isValidEmail('user.name+tag@domain.co.uk'), true);
assert.strictEqual(isValidEmail('abc@def.gh'), true);

// Invalid emails
assert.strictEqual(isValidEmail('invalid-email'), false);
assert.strictEqual(isValidEmail('@domain.com'), false);
assert.strictEqual(isValidEmail('user@'), false);
assert.strictEqual(isValidEmail('user @domain.com'), false);
assert.strictEqual(isValidEmail(null), false);
assert.strictEqual(isValidEmail(undefined), false);
assert.strictEqual(isValidEmail(123), false);

// Unit tests for isValidCpf
console.log('Running isValidCpf tests...');

// Valid CPFs
assert.strictEqual(isValidCpf('12345678901'), true);
assert.strictEqual(isValidCpf('123.456.789-01'), true);

// Invalid CPFs
assert.strictEqual(isValidCpf('1234567890'), false); // too short
assert.strictEqual(isValidCpf('123456789012'), false); // too long
assert.strictEqual(isValidCpf('123.456.789-0'), false); // malformed format
assert.strictEqual(isValidCpf('12a.456.789-01'), false); // contains letters
assert.strictEqual(isValidCpf(null), false);
assert.strictEqual(isValidCpf(undefined), false);
assert.strictEqual(isValidCpf({}), false);

console.log('All validation tests passed successfully!');

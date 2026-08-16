const assert = require('assert');
const { isValidEmail, isValidCPF } = require('./validation');

// Test isValidEmail
console.log('Testing isValidEmail...');
assert.strictEqual(isValidEmail('user@example.com'), true);
assert.strictEqual(isValidEmail('user.name@domain.co.uk'), true);
assert.strictEqual(isValidEmail('invalid-email'), false);
assert.strictEqual(isValidEmail('user@'), false);
assert.strictEqual(isValidEmail('@domain.com'), false);
assert.strictEqual(isValidEmail(12345), false);
assert.strictEqual(isValidEmail(null), false);

// Test isValidCPF
console.log('Testing isValidCPF...');
assert.strictEqual(isValidCPF('12345678901'), true);
assert.strictEqual(isValidCPF('123.456.789-01'), true);
assert.strictEqual(isValidCPF('12345'), false);
assert.strictEqual(isValidCPF('123.456.789-0'), false);
assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false);
assert.strictEqual(isValidCPF(null), false);

console.log('All validation unit tests passed successfully!');

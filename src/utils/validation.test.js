const assert = require('assert');
const { isValidEmail, isValidCPF } = require('./validation');

// Test email validation
assert.strictEqual(isValidEmail("test@example.com"), true);
assert.strictEqual(isValidEmail("test.name@domain.co.uk"), true);
assert.strictEqual(isValidEmail("test@domain"), false);
assert.strictEqual(isValidEmail("invalid-email"), false);
assert.strictEqual(isValidEmail(""), false);
assert.strictEqual(isValidEmail(null), false);
assert.strictEqual(isValidEmail(undefined), false);
assert.strictEqual(isValidEmail(123), false);

// Test CPF validation
assert.strictEqual(isValidCPF("12345678901"), true);
assert.strictEqual(isValidCPF("123.456.789-01"), true);
assert.strictEqual(isValidCPF("1234567890"), false); // too short
assert.strictEqual(isValidCPF("123456789012"), false); // too long
assert.strictEqual(isValidCPF("123.456.789-0"), false);
assert.strictEqual(isValidCPF(""), false);
assert.strictEqual(isValidCPF(null), false);
assert.strictEqual(isValidCPF(undefined), false);

console.log("All validation tests passed successfully!");

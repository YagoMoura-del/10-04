const assert = require("assert");
const { isValidEmail, isValidCpf } = require("./validation");

// Test isValidEmail
console.log("Running isValidEmail tests...");
assert.strictEqual(isValidEmail("test@example.com"), true);
assert.strictEqual(isValidEmail("a@b.co"), true);
assert.strictEqual(isValidEmail("user.name+tag@sub.domain.org"), true);

assert.strictEqual(isValidEmail("plainaddress"), false);
assert.strictEqual(isValidEmail("@missingusername.com"), false);
assert.strictEqual(isValidEmail("username@.com"), false);
assert.strictEqual(isValidEmail("username@domain."), false);
assert.strictEqual(isValidEmail(null), false);
assert.strictEqual(isValidEmail(undefined), false);
assert.strictEqual(isValidEmail(123), false);

// Test isValidCpf
console.log("Running isValidCpf tests...");
assert.strictEqual(isValidCpf("12345678901"), true);
assert.strictEqual(isValidCpf("123.456.789-01"), true);

assert.strictEqual(isValidCpf("1234567890"), false); // too short
assert.strictEqual(isValidCpf("123456789012"), false); // too long
assert.strictEqual(isValidCpf("abc.def.ghi-jk"), false); // non-digits
assert.strictEqual(isValidCpf(null), false);
assert.strictEqual(isValidCpf(undefined), false);

console.log("All tests passed successfully!");

const { isValidEmail, isValidCPF } = require("./validation");
const assert = require("assert");

// SECURITY: Run validation unit tests to verify security-related helper methods

// Test isValidEmail
try {
  assert.strictEqual(isValidEmail("test@example.com"), true);
  assert.strictEqual(isValidEmail("test.name@domain.co.uk"), true);
  assert.strictEqual(isValidEmail("invalid-email"), false);
  assert.strictEqual(isValidEmail("@domain.com"), false);
  assert.strictEqual(isValidEmail("test@"), false);
  console.log("✓ Email validation tests passed");
} catch (err) {
  console.error("✗ Email validation tests failed:", err);
  process.exit(1);
}

// Test isValidCPF
try {
  assert.strictEqual(isValidCPF("12345678901"), true);
  assert.strictEqual(isValidCPF("123.456.789-01"), true);
  assert.strictEqual(isValidCPF("1234567890"), false);
  assert.strictEqual(isValidCPF("123456789012"), false);
  assert.strictEqual(isValidCPF("abc.def.ghi-jk"), false);
  console.log("✓ CPF validation tests passed");
} catch (err) {
  console.error("✗ CPF validation tests failed:", err);
  process.exit(1);
}

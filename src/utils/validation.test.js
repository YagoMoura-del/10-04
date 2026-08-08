// SECURITY: Unit tests for security-related input validation helper methods
const assert = require("assert");
const { isValidEmail, isValidCPF } = require("./validation");

console.log("Starting validation tests...");

// 1. Email validation tests
try {
  // Valid emails
  assert.strictEqual(isValidEmail("test@example.com"), true);
  assert.strictEqual(isValidEmail("user.name+tag@sub.domain.co"), true);

  // Invalid emails
  assert.strictEqual(isValidEmail("invalid-email"), false);
  assert.strictEqual(isValidEmail("test@"), false);
  assert.strictEqual(isValidEmail("@example.com"), false);
  assert.strictEqual(isValidEmail("test@example"), false);
  assert.strictEqual(isValidEmail(""), false);
  assert.strictEqual(isValidEmail(null), false);
  assert.strictEqual(isValidEmail(123), false);

  console.log("✅ Email validation tests passed.");
} catch (err) {
  console.error("❌ Email validation tests failed:", err.message);
  process.exit(1);
}

// 2. CPF validation tests
try {
  // Valid CPFs
  assert.strictEqual(isValidCPF("12345678901"), true);
  assert.strictEqual(isValidCPF("123.456.789-01"), true);

  // Invalid CPFs
  assert.strictEqual(isValidCPF("1234567890"), false); // Too short
  assert.strictEqual(isValidCPF("123456789012"), false); // Too long
  assert.strictEqual(isValidCPF("abc45678901"), false); // Letters
  assert.strictEqual(isValidCPF("123.456.789-0"), false); // Formatted but too short
  assert.strictEqual(isValidCPF(""), false);
  assert.strictEqual(isValidCPF(null), false);
  assert.strictEqual(isValidCPF(123), false);

  console.log("✅ CPF validation tests passed.");
} catch (err) {
  console.error("❌ CPF validation tests failed:", err.message);
  process.exit(1);
}

console.log("🎉 All security validation tests passed successfully!");
process.exit(0);

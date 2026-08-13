const assert = require("assert");
const { isValidEmail, isValidCPF } = require("./validation");

console.log("Running validation helper tests...");

// Test Email validation
try {
  // Valid emails
  assert.strictEqual(isValidEmail("test@example.com"), true);
  assert.strictEqual(isValidEmail("user.name@domain.co.uk"), true);
  assert.strictEqual(isValidEmail("a@b.c"), true);

  // Invalid emails
  assert.strictEqual(isValidEmail("invalid-email"), false);
  assert.strictEqual(isValidEmail("test@"), false);
  assert.strictEqual(isValidEmail("@domain.com"), false);
  assert.strictEqual(isValidEmail("test@domain"), false);
  assert.strictEqual(isValidEmail(""), false);
  assert.strictEqual(isValidEmail(null), false);
  assert.strictEqual(isValidEmail(undefined), false);
  assert.strictEqual(isValidEmail(123), false);

  console.log("✓ Email validation tests passed.");
} catch (err) {
  console.error("✗ Email validation tests failed:", err.message);
  process.exit(1);
}

// Test CPF validation
try {
  // Valid CPFs (digits only or formatted)
  assert.strictEqual(isValidCPF("12345678901"), true);
  assert.strictEqual(isValidCPF("123.456.789-01"), true);

  // Invalid CPFs
  assert.strictEqual(isValidCPF("1234567890"), false); // too short
  assert.strictEqual(isValidCPF("123456789012"), false); // too long
  assert.strictEqual(isValidCPF("123.456.789-0"), false); // malformed format
  assert.strictEqual(isValidCPF("abc123def45"), false); // non-digits
  assert.strictEqual(isValidCPF(""), false);
  assert.strictEqual(isValidCPF(null), false);
  assert.strictEqual(isValidCPF(undefined), false);
  assert.strictEqual(isValidCPF(12345678901), false); // non-string

  console.log("✓ CPF validation tests passed.");
} catch (err) {
  console.error("✗ CPF validation tests failed:", err.message);
  process.exit(1);
}

console.log("All tests passed successfully!");

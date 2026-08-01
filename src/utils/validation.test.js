// SECURITY: Unit tests for security-related input validation helper methods to ensure robust defense-in-depth.
const assert = require("assert");
const { isValidEmail, isValidCPF } = require("./validation");

console.log("Running security validation tests...");

// Test Email Validation
try {
  assert.strictEqual(
    isValidEmail("test@example.com"),
    true,
    "Valid email failed validation",
  );
  assert.strictEqual(
    isValidEmail("test.name@domain.co.uk"),
    true,
    "Valid complex email failed validation",
  );
  assert.strictEqual(
    isValidEmail("invalid-email"),
    false,
    "Invalid email passed validation",
  );
  assert.strictEqual(
    isValidEmail("@example.com"),
    false,
    "Email with missing user passed validation",
  );
  assert.strictEqual(
    isValidEmail("test@"),
    false,
    "Email with missing domain passed validation",
  );
  assert.strictEqual(isValidEmail(null), false, "Null email passed validation");
  assert.strictEqual(
    isValidEmail(12345),
    false,
    "Non-string email passed validation",
  );
  console.log("✅ Email validation tests passed.");
} catch (err) {
  console.error("❌ Email validation tests failed:", err.message);
  process.exit(1);
}

// Test CPF Validation
try {
  assert.strictEqual(
    isValidCPF("12345678901"),
    true,
    "Valid 11-digit CPF failed validation",
  );
  assert.strictEqual(
    isValidCPF("123.456.789-01"),
    true,
    "Valid formatted CPF failed validation",
  );
  assert.strictEqual(
    isValidCPF("1234567890"),
    false,
    "Too short CPF passed validation",
  );
  assert.strictEqual(
    isValidCPF("123456789012"),
    false,
    "Too long CPF passed validation",
  );
  assert.strictEqual(
    isValidCPF("abc45678901"),
    false,
    "Non-numeric CPF passed validation",
  );
  assert.strictEqual(isValidCPF(null), false, "Null CPF passed validation");
  console.log("✅ CPF validation tests passed.");
} catch (err) {
  console.error("❌ CPF validation tests failed:", err.message);
  process.exit(1);
}

console.log("🎉 All security tests passed successfully!");
process.exit(0);

const assert = require("assert");
const { isValidEmail, isValidCPF } = require("./validation");

// Test Suite for Security Input Validation Helpers
console.log("Running security validation tests...");

// 1. Email validation tests
try {
  assert.strictEqual(
    isValidEmail("test@example.com"),
    true,
    "Valid email should pass",
  );
  assert.strictEqual(
    isValidEmail("user.name@domain.co.uk"),
    true,
    "Valid complex email should pass",
  );
  assert.strictEqual(
    isValidEmail("invalid-email"),
    false,
    "Email without @ should fail",
  );
  assert.strictEqual(
    isValidEmail("test@"),
    false,
    "Email without domain should fail",
  );
  assert.strictEqual(
    isValidEmail("@example.com"),
    false,
    "Email without username should fail",
  );
  assert.strictEqual(
    isValidEmail("test@example"),
    false,
    "Email without TLD should fail",
  );
  assert.strictEqual(isValidEmail(null), false, "Non-string email should fail");
  console.log("✅ Email validation tests passed.");
} catch (err) {
  console.error("❌ Email validation test failed:", err.message);
  process.exit(1);
}

// 2. CPF validation tests
try {
  assert.strictEqual(
    isValidCPF("12345678901"),
    true,
    "11 digits CPF should pass",
  );
  assert.strictEqual(
    isValidCPF("123.456.789-01"),
    true,
    "Formatted CPF should pass",
  );
  assert.strictEqual(isValidCPF("1234567890"), false, "Short CPF should fail");
  assert.strictEqual(isValidCPF("123456789012"), false, "Long CPF should fail");
  assert.strictEqual(
    isValidCPF("abc45678901"),
    false,
    "CPF with non-digits should fail",
  );
  assert.strictEqual(
    isValidCPF("123.456.789.01"),
    false,
    "Incorrectly formatted CPF should fail",
  );
  assert.strictEqual(
    isValidCPF(undefined),
    false,
    "Non-string CPF should fail",
  );
  console.log("✅ CPF validation tests passed.");
} catch (err) {
  console.error("❌ CPF validation test failed:", err.message);
  process.exit(1);
}

console.log("🎉 All security validation tests passed successfully!");

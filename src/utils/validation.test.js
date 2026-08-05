// SECURITY: Automated unit tests to ensure validation logic behaves correctly under various normal and malicious inputs.
const assert = require("assert");
const { isValidEmail, isValidCPF } = require("./validation");

console.log("Running security validation unit tests...");

// Test Email validation
try {
  assert.strictEqual(
    isValidEmail("test@example.com"),
    true,
    "Valid email should pass",
  );
  assert.strictEqual(
    isValidEmail("test.name@domain.co.uk"),
    true,
    "Valid complex email should pass",
  );
  assert.strictEqual(
    isValidEmail("invalid-email"),
    false,
    "Email without @ or domain should fail",
  );
  assert.strictEqual(
    isValidEmail("@domain.com"),
    false,
    "Email without local part should fail",
  );
  assert.strictEqual(
    isValidEmail("test@"),
    false,
    "Email without domain should fail",
  );
  assert.strictEqual(isValidEmail(null), false, "Non-string email should fail");
  assert.strictEqual(
    isValidEmail(undefined),
    false,
    "Undefined email should fail",
  );
  assert.strictEqual(isValidEmail(12345), false, "Number email should fail");
  console.log("✅ Email validation tests passed!");
} catch (error) {
  console.error("❌ Email validation tests failed:", error.message);
  process.exit(1);
}

// Test CPF validation
try {
  assert.strictEqual(
    isValidCPF("12345678901"),
    true,
    "Valid 11-digit CPF should pass",
  );
  assert.strictEqual(
    isValidCPF("123.456.789-01"),
    true,
    "Valid formatted CPF should pass",
  );
  assert.strictEqual(
    isValidCPF("1234567890"),
    false,
    "10-digit CPF should fail",
  );
  assert.strictEqual(
    isValidCPF("123456789012"),
    false,
    "12-digit CPF should fail",
  );
  assert.strictEqual(
    isValidCPF("123.456.789-012"),
    false,
    "Incorrectly formatted CPF should fail",
  );
  assert.strictEqual(
    isValidCPF("abc.def.ghi-jk"),
    false,
    "Alphanumeric CPF should fail",
  );
  assert.strictEqual(isValidCPF(null), false, "Non-string CPF should fail");
  assert.strictEqual(isValidCPF(12345678901), false, "Numeric CPF should fail");
  console.log("✅ CPF validation tests passed!");
} catch (error) {
  console.error("❌ CPF validation tests failed:", error.message);
  process.exit(1);
}

console.log("🎉 All security validation tests passed successfully!");

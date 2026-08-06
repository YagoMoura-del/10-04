const assert = require("assert");
const { isValidEmail, isValidCPF } = require("./validation");

// SECURITY: Unit tests for validating input validation utility functions.

console.log("Running validation tests...");

try {
  // Test cases for Email
  // Valid emails
  assert.strictEqual(
    isValidEmail("test@example.com"),
    true,
    "Valid email failed",
  );
  assert.strictEqual(
    isValidEmail("user.name+tag@domain.co.uk"),
    true,
    "Valid complex email failed",
  );

  // Invalid emails
  assert.strictEqual(
    isValidEmail("invalid-email"),
    false,
    "Invalid email without @ passed",
  );
  assert.strictEqual(
    isValidEmail("test@"),
    false,
    "Invalid email without domain passed",
  );
  assert.strictEqual(
    isValidEmail("@domain.com"),
    false,
    "Invalid email without username passed",
  );
  assert.strictEqual(isValidEmail(null), false, "Null email passed");
  assert.strictEqual(isValidEmail(undefined), false, "Undefined email passed");
  assert.strictEqual(isValidEmail(12345), false, "Numeric email passed");

  // Test cases for CPF
  // Valid CPFs (11 digits or formatted)
  assert.strictEqual(
    isValidCPF("12345678901"),
    true,
    "Valid 11-digit CPF failed",
  );
  assert.strictEqual(
    isValidCPF("123.456.789-01"),
    true,
    "Valid formatted CPF failed",
  );

  // Invalid CPFs
  assert.strictEqual(isValidCPF("1234567890"), false, "Too short CPF passed");
  assert.strictEqual(isValidCPF("123456789012"), false, "Too long CPF passed");
  assert.strictEqual(
    isValidCPF("123.456.789-0"),
    false,
    "Malformed formatted CPF passed",
  );
  assert.strictEqual(
    isValidCPF("abc.def.ghi-jk"),
    false,
    "Non-numeric CPF passed",
  );
  assert.strictEqual(isValidCPF(null), false, "Null CPF passed");
  assert.strictEqual(isValidCPF(undefined), false, "Undefined CPF passed");

  console.log("All tests passed successfully!");
} catch (error) {
  console.error("Test failed:", error.message);
  process.exit(1);
}

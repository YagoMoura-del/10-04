const assert = require("assert");
const { isValidEmail, isValidCPF } = require("./validation");

// SECURITY: These unit tests verify the integrity of our security validation helpers
// to ensure no regressions bypass the input sanitization/validation layer.

console.log("Running validation utility tests...");

// Test cases for isValidEmail
try {
  // Valid emails
  assert.strictEqual(
    isValidEmail("test@example.com"),
    true,
    "Valid simple email failed",
  );
  assert.strictEqual(
    isValidEmail("user.name+tag@domain.co.uk"),
    true,
    "Valid complex email failed",
  );
  assert.strictEqual(isValidEmail("a@b.c"), true, "Valid minimal email failed");

  // Invalid emails
  assert.strictEqual(
    isValidEmail("plain-string"),
    false,
    "Plain string should not be valid email",
  );
  assert.strictEqual(
    isValidEmail("@domain.com"),
    false,
    "Missing username should not be valid",
  );
  assert.strictEqual(
    isValidEmail("user@"),
    false,
    "Missing domain should not be valid",
  );
  assert.strictEqual(
    isValidEmail("user@domain"),
    false,
    "Missing TLD should not be valid",
  );
  assert.strictEqual(
    isValidEmail("user @domain.com"),
    false,
    "Whitespace in email should not be valid",
  );
  assert.strictEqual(isValidEmail(null), false, "Null should not be valid");
  assert.strictEqual(
    isValidEmail(undefined),
    false,
    "Undefined should not be valid",
  );
  assert.strictEqual(isValidEmail(123), false, "Number should not be valid");

  console.log("✅ isValidEmail tests passed successfully.");
} catch (error) {
  console.error("❌ isValidEmail tests failed:");
  console.error(error);
  process.exit(1);
}

// Test cases for isValidCPF
try {
  // Valid CPFs
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
  assert.strictEqual(
    isValidCPF("1234567890"),
    false,
    "CPF with 10 digits should be invalid",
  );
  assert.strictEqual(
    isValidCPF("123456789012"),
    false,
    "CPF with 12 digits should be invalid",
  );
  assert.strictEqual(
    isValidCPF("123.456.789-0"),
    false,
    "Formatted CPF with too few digits should be invalid",
  );
  assert.strictEqual(
    isValidCPF("123-456-789-01"),
    false,
    "Wrong formatting symbols should be invalid",
  );
  assert.strictEqual(
    isValidCPF("abc.def.ghi-jk"),
    false,
    "Non-digits formatted CPF should be invalid",
  );
  assert.strictEqual(
    isValidCPF("abcdefghijk"),
    false,
    "Non-digits unformatted CPF should be invalid",
  );
  assert.strictEqual(isValidCPF(null), false, "Null CPF should be invalid");
  assert.strictEqual(
    isValidCPF(undefined),
    false,
    "Undefined CPF should be invalid",
  );

  console.log("✅ isValidCPF tests passed successfully.");
} catch (error) {
  console.error("❌ isValidCPF tests failed:");
  console.error(error);
  process.exit(1);
}

console.log("🎉 All security-related validation tests passed!");
process.exit(0);

// SECURITY: Unit tests for security-related input validation helper methods.
const assert = require("assert");
const { isValidEmail, isValidCPF } = require("./validation");

console.log("Starting validation tests...");

// 1. Email validation tests
try {
  // Valid emails
  assert.strictEqual(
    isValidEmail("test@example.com"),
    true,
    "Should accept standard email",
  );
  assert.strictEqual(
    isValidEmail("user.name+tag@domain.co.uk"),
    true,
    "Should accept complex email",
  );
  assert.strictEqual(isValidEmail("a@b.c"), true, "Should accept short email");

  // Invalid emails
  assert.strictEqual(
    isValidEmail("invalid-email"),
    false,
    "Should reject email without @",
  );
  assert.strictEqual(
    isValidEmail("invalid@domain"),
    false,
    "Should reject email without TLD",
  );
  assert.strictEqual(
    isValidEmail("@domain.com"),
    false,
    "Should reject email without username",
  );
  assert.strictEqual(
    isValidEmail("test@.com"),
    false,
    "Should reject email with dot right after @",
  );
  assert.strictEqual(isValidEmail(""), false, "Should reject empty email");
  assert.strictEqual(isValidEmail(null), false, "Should reject null email");
  assert.strictEqual(
    isValidEmail(undefined),
    false,
    "Should reject undefined email",
  );

  console.log("✅ Email validation tests passed!");
} catch (err) {
  console.error("❌ Email validation tests failed:", err.message);
  process.exit(1);
}

// 2. CPF validation tests
try {
  // Valid CPFs
  assert.strictEqual(
    isValidCPF("12345678901"),
    true,
    "Should accept 11 digit CPF string",
  );
  assert.strictEqual(
    isValidCPF("123.456.789-01"),
    true,
    "Should accept formatted CPF string",
  );

  // Invalid CPFs
  assert.strictEqual(
    isValidCPF("1234567890"),
    false,
    "Should reject 10 digit CPF",
  );
  assert.strictEqual(
    isValidCPF("123456789012"),
    false,
    "Should reject 12 digit CPF",
  );
  assert.strictEqual(
    isValidCPF("123.456.789-0"),
    false,
    "Should reject malformatted CPF",
  );
  assert.strictEqual(
    isValidCPF("abc.def.ghi-jk"),
    false,
    "Should reject alphabetic CPF",
  );
  assert.strictEqual(isValidCPF(""), false, "Should reject empty CPF");
  assert.strictEqual(isValidCPF(null), false, "Should reject null CPF");
  assert.strictEqual(
    isValidCPF(undefined),
    false,
    "Should reject undefined CPF",
  );

  console.log("✅ CPF validation tests passed!");
} catch (err) {
  console.error("❌ CPF validation tests failed:", err.message);
  process.exit(1);
}

console.log("🎉 All tests completed successfully!");

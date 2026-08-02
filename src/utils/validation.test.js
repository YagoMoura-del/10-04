// SECURITY: Testing security validation rules is critical to ensure no bypass options remain for malformed input.
const assert = require("assert");
const { isValidEmail, isValidCpf } = require("./validation");

function runTests() {
  console.log("Running tests for validation.js...");

  // Email Validation Tests
  assert.strictEqual(
    isValidEmail("test@example.com"),
    true,
    "Valid email should pass",
  );
  assert.strictEqual(
    isValidEmail("a@b.c"),
    true,
    "Valid short email should pass",
  );
  assert.strictEqual(
    isValidEmail("invalid-email"),
    false,
    "Email without @ or domain should fail",
  );
  assert.strictEqual(
    isValidEmail("test@com"),
    false,
    "Email without TLD should fail",
  );
  assert.strictEqual(
    isValidEmail("@example.com"),
    false,
    "Email without prefix should fail",
  );
  assert.strictEqual(isValidEmail(null), false, "Non-string email should fail");
  assert.strictEqual(
    isValidEmail(undefined),
    false,
    "Undefined email should fail",
  );

  // CPF Validation Tests
  assert.strictEqual(
    isValidCpf("12345678901"),
    true,
    "Valid numeric CPF should pass",
  );
  assert.strictEqual(
    isValidCpf("123.456.789-01"),
    true,
    "Valid formatted CPF should pass",
  );
  assert.strictEqual(
    isValidCpf("1234567890"),
    false,
    "Too short CPF should fail",
  );
  assert.strictEqual(
    isValidCpf("123456789012"),
    false,
    "Too long CPF should fail",
  );
  assert.strictEqual(
    isValidCpf("123.456.789-0"),
    false,
    "Invalid formatted CPF structure should fail",
  );
  assert.strictEqual(
    isValidCpf("abc.def.ghi-jk"),
    false,
    "Non-numeric CPF should fail",
  );
  assert.strictEqual(isValidCpf(null), false, "Non-string CPF should fail");

  console.log("All validation tests passed successfully!");
}

runTests();

// SECURITY: Unit tests for validation helpers to ensure correct format enforcement.
const { isValidEmail, isValidCpf } = require("./validation");

function assert(condition, message) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

function runTests() {
  console.log("Running validation tests...");

  // Email Validation Tests
  assert(isValidEmail("test@example.com"), "Should accept standard email");
  assert(isValidEmail("a@b.co"), "Should accept short email");
  assert(!isValidEmail("invalid-email"), "Should reject email without @");
  assert(!isValidEmail("test@"), "Should reject email without domain");
  assert(!isValidEmail("@example.com"), "Should reject email without user");
  assert(
    !isValidEmail("test@example"),
    "Should reject email without top-level domain",
  );
  assert(!isValidEmail(""), "Should reject empty email");
  assert(!isValidEmail(null), "Should reject null email");
  assert(!isValidEmail(undefined), "Should reject undefined email");

  // CPF Validation Tests
  assert(isValidCpf("12345678901"), "Should accept 11 digit CPF");
  assert(isValidCpf("123.456.789-01"), "Should accept formatted CPF");
  assert(!isValidCpf("1234567890"), "Should reject 10 digit CPF");
  assert(!isValidCpf("123456789012"), "Should reject 12 digit CPF");
  assert(!isValidCpf("1234567890a"), "Should reject non-numeric characters");
  assert(!isValidCpf(""), "Should reject empty CPF");
  assert(!isValidCpf(null), "Should reject null CPF");
  assert(!isValidCpf(undefined), "Should reject undefined CPF");

  console.log("All validation tests passed successfully!");
}

runTests();

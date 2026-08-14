// SECURITY: Test suite to verify accuracy of the security input validation helper methods.
const { isValidEmail, isValidCpf } = require("./validation");

let failures = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ Test failed: ${message}`);
    failures++;
  } else {
    console.log(`✅ Test passed: ${message}`);
  }
}

console.log("Running security validation tests...");

// Test Email Validation
assert(isValidEmail("test@example.com") === true, "Standard email validation");
assert(
  isValidEmail("test.name@domain.co.uk") === true,
  "Email with dots validation",
);
assert(isValidEmail("test@domain") === false, "Email without TLD validation");
assert(isValidEmail("testdomain.com") === false, "Email without @ validation");
assert(isValidEmail(null) === false, "Null email validation");
assert(isValidEmail(undefined) === false, "Undefined email validation");
assert(isValidEmail(12345) === false, "Non-string email validation");

// Test CPF Validation
assert(isValidCpf("12345678901") === true, "Raw 11 digit CPF validation");
assert(isValidCpf("123.456.789-01") === true, "Formatted CPF validation");
assert(isValidCpf("1234567890") === false, "Too short raw CPF validation");
assert(isValidCpf("123456789012") === false, "Too long raw CPF validation");
assert(
  isValidCpf("123.456.789-0") === false,
  "Invalid formatted CPF validation",
);
assert(isValidCpf(null) === false, "Null CPF validation");
assert(isValidCpf(undefined) === false, "Undefined CPF validation");

if (failures > 0) {
  console.error(`\nTests completed with ${failures} failure(s).`);
  process.exit(1);
} else {
  console.log("\nAll security validation tests passed successfully!");
  process.exit(0);
}

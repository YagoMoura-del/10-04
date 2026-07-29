const assert = require("assert");
const { isValidEmail, isValidCpf } = require("./validation");

console.log("Running security-related input validation helper unit tests...");

// Test Email Validation
try {
  assert.strictEqual(
    isValidEmail("test@example.com"),
    true,
    "Valid email test@example.com failed",
  );
  assert.strictEqual(
    isValidEmail("user.name+tag@domain.co.uk"),
    true,
    "Valid email with subdomains/tags failed",
  );
  assert.strictEqual(
    isValidEmail("plainaddress"),
    false,
    "Invalid plain email address was accepted",
  );
  assert.strictEqual(
    isValidEmail("@no-local-part.com"),
    false,
    "Email with missing local part was accepted",
  );
  assert.strictEqual(
    isValidEmail("username@.com"),
    false,
    "Email with missing domain name was accepted",
  );
  assert.strictEqual(
    isValidEmail(""),
    false,
    "Empty email string was accepted",
  );
  assert.strictEqual(isValidEmail(null), false, "Null email was accepted");
  assert.strictEqual(
    isValidEmail(undefined),
    false,
    "Undefined email was accepted",
  );
  assert.strictEqual(isValidEmail(12345), false, "Numeric email was accepted");
  console.log("✅ Email validation tests passed.");
} catch (err) {
  console.error("❌ Email validation tests failed:");
  console.error(err.message);
  process.exit(1);
}

// Test CPF Validation
try {
  assert.strictEqual(
    isValidCpf("12345678901"),
    true,
    "Valid unformatted CPF 12345678901 failed",
  );
  assert.strictEqual(
    isValidCpf("123.456.789-01"),
    true,
    "Valid formatted CPF 123.456.789-01 failed",
  );
  assert.strictEqual(
    isValidCpf("1234567890"),
    false,
    "Short unformatted CPF was accepted",
  );
  assert.strictEqual(
    isValidCpf("123456789012"),
    false,
    "Long unformatted CPF was accepted",
  );
  assert.strictEqual(
    isValidCpf("123.456.789-0"),
    false,
    "Short formatted CPF was accepted",
  );
  assert.strictEqual(
    isValidCpf("12.345.6789-01"),
    false,
    "Improperly formatted CPF was accepted",
  );
  assert.strictEqual(
    isValidCpf("abc.def.ghi-jk"),
    false,
    "Non-numeric formatted CPF was accepted",
  );
  assert.strictEqual(isValidCpf(""), false, "Empty CPF string was accepted");
  assert.strictEqual(isValidCpf(null), false, "Null CPF was accepted");
  assert.strictEqual(
    isValidCpf(undefined),
    false,
    "Undefined CPF was accepted",
  );
  assert.strictEqual(
    isValidCpf(12345678901),
    false,
    "Numeric CPF was accepted",
  );
  console.log("✅ CPF validation tests passed.");
} catch (err) {
  console.error("❌ CPF validation tests failed:");
  console.error(err.message);
  process.exit(1);
}

console.log("🎉 All input validation tests passed successfully!");

// SECURITY: Unit tests for validating security helper functions (email and CPF format validators).
const { isValidEmail, isValidCpf } = require("./validation");

function testEmailValidation() {
  console.log("Running Email Validation Tests...");

  const validEmails = [
    "test@test.com",
    "user.name@domain.co.uk",
    "someone123@sub.domain.org",
  ];

  const invalidEmails = [
    "plain_text",
    "@missing-local.com",
    "missing-domain@",
    "space in@email.com",
    null,
    undefined,
    12345,
  ];

  for (const email of validEmails) {
    if (!isValidEmail(email)) {
      throw new Error(`Failed: "${email}" should be a valid email`);
    }
  }

  for (const email of invalidEmails) {
    if (isValidEmail(email)) {
      throw new Error(`Failed: "${email}" should be an invalid email`);
    }
  }

  console.log("✅ Email Validation Tests Passed!");
}

function testCpfValidation() {
  console.log("Running CPF Validation Tests...");

  const validCpfs = ["12345678901", "123.456.789-01"];

  const invalidCpfs = [
    "123",
    "123456789012",
    "123.456.789-012",
    "abc.def.ghi-jk",
    null,
    undefined,
    12345,
  ];

  for (const cpf of validCpfs) {
    if (!isValidCpf(cpf)) {
      throw new Error(`Failed: "${cpf}" should be a valid CPF`);
    }
  }

  for (const cpf of invalidCpfs) {
    if (isValidCpf(cpf)) {
      throw new Error(`Failed: "${cpf}" should be an invalid CPF`);
    }
  }

  console.log("✅ CPF Validation Tests Passed!");
}

try {
  testEmailValidation();
  testCpfValidation();
  console.log("🎉 All Security Validation Tests Passed Successfully!");
  process.exit(0);
} catch (error) {
  console.error("❌ Test failed:", error.message);
  process.exit(1);
}

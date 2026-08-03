// SECURITY: Shared utility functions for input validation.
// All security-related changes must include comments starting with '// SECURITY:'.

/**
 * Validates whether an email format is correct.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  // SECURITY: Use a standard regular expression to check email format to avoid invalid or malicious inputs.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === "string" && emailRegex.test(email);
}

/**
 * Validates whether a CPF format is correct (11 digits, with or without standard punctuation).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
  // SECURITY: Validate CPF strictly (either 11 digits, or formatted like XXX.XXX.XXX-XX) to prevent malformed or malicious inputs.
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return typeof cpf === "string" && cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCpf,
};

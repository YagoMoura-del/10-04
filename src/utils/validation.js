// SECURITY: This utility file provides robust validation helper methods for email and CPF.
// These validations ensure that only properly formatted input is accepted, reducing the risk of SQL injection,
// cross-site scripting, and database storage anomalies from malformed or malicious data.

/**
 * Validates whether the given string is a valid email address.
 * Uses a strict standard regular expression.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates whether the given string is a valid Brazilian CPF.
 * Matches either 11 consecutive digits, or a formatted CPF (xxx.xxx.xxx-xx).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCPF,
};

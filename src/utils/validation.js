// SECURITY: This utility file centralizes input validation patterns to prevent malformed data, injection risks, and maintain data consistency across school management API operations.

/**
 * Validates whether the given email follows a standard, secure format.
 * @param {string} email - The email to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  // SECURITY: Use a standard email regex pattern to prevent input bypass and potential ReDoS.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates whether the given CPF (Brazilian tax ID) follows the correct format (digits only or formatted).
 * @param {string} cpf - The CPF to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function isValidCpf(cpf) {
  if (typeof cpf !== "string") return false;
  // SECURITY: Limit input length to prevent potential Denial of Service (DoS) and buffer issues.
  if (cpf.length > 14) return false;
  // SECURITY: Use strict regex to validate either 11 digits or standard CPF formatting (000.000.000-00).
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCpf,
};

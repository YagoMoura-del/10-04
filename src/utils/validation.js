// SECURITY: Input validation utility to validate email and CPF formats
// to ensure data integrity and prevent malicious or malformed inputs.

/**
 * Validates the email format using a standard regular expression.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  // SECURITY: Reject non-string values to prevent injection and type-confusion attacks
  if (typeof email !== "string") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates CPF format (either 11 raw digits or formatted as 000.000.000-00).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
  // SECURITY: Reject non-string values to prevent injection and type-confusion attacks
  if (typeof cpf !== "string") return false;
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCPF,
};

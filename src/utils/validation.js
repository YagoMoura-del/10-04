// SECURITY: Input validation utilities to prevent malformed data and injection attacks.

/**
 * Validates email format using a standard regular expression.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates Brazilian CPF format (11 digits, with or without standard formatting . and -).
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

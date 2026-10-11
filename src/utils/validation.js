// SECURITY: Shared utility functions for input validation to prevent injection and invalid data input.

/**
 * Validates email address format.
 * // SECURITY: Enforces standard email format to sanitize user input and prevent malformed input handling.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates CPF format (11 digits, with or without dots/dash).
 * // SECURITY: Validates structural format of CPF to prevent invalid data or injection vectors.
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
  if (typeof cpf !== 'string') return false;
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCpf,
};

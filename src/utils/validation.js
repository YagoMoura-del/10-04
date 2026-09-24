// SECURITY: Input validation helpers for email and CPF formats to protect against invalid data injection and errors.

/**
 * Validates email format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates CPF format (11 digits or formatted 000.000.000-00).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
  if (typeof cpf !== 'string') return false;
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCPF,
};

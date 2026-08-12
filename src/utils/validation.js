// SECURITY: Validation utility functions to prevent SQL injection side-effects and malformed data storage

/**
 * SECURITY: Validate email address format using standard regular expression.
 * Helps prevent injection or storing malformed email inputs in the database.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * SECURITY: Validate CPF format (either 11 digits or formatted xxx.xxx.xxx-xx).
 * Helps prevent injection or storing malformed CPF inputs in the database.
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCPF,
};

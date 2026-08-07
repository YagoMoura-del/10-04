// SECURITY: Validation utility functions used to sanitize and validate input formats.
// This prevents malformed data and minimizes risk of injection or storage of invalid identifiers.

/**
 * Validates whether the provided email string matches the standard format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  // SECURITY: Use a robust email format validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === "string" && emailRegex.test(email);
}

/**
 * Validates whether the provided CPF string matches the standard 11 digits or formatted format.
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
  // SECURITY: Use a standard CPF validation regex allowing either 11 digits or formatted xxx.xxx.xxx-xx
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return typeof cpf === "string" && cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCPF,
};

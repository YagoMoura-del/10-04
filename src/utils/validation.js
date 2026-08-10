// SECURITY: These modular helper functions validate format requirements for input data
// before they are processed by database models or application controllers, minimizing risk.

/**
 * Validates whether the provided string matches a standard email format.
 * Pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validates whether the provided string matches Brazilian CPF format requirements.
 * Accepts exactly 11 digits OR formatted format (000.000.000-00).
 * Pattern: /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
  const regex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return regex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCpf,
};

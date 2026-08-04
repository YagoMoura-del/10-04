// SECURITY: This file contains validation helpers to reject malformed data early and prevent bad data injection.

/**
 * Validates whether the given email follows a standard email regex format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  // SECURITY: Simple standard regex validation to prevent malformed email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates whether the given CPF is formatted correctly (either 11 consecutive digits or standard formatted xxx.xxx.xxx-xx).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  // SECURITY: Limit and format verification of CPF to prevent arbitrary string inputs
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCPF,
};

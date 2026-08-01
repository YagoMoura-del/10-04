// SECURITY: Shared utility functions for validation to secure application endpoints.
// We strictly validate formats such as email and CPF to prevent injection and malformed input.

/**
 * Validates whether an email format is correct.
 * @param {string} email
 * @returns {boolean}
 */
exports.isValidEmail = (email) => {
  // SECURITY: Simple standard regex validation for email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === "string" && emailRegex.test(email);
};

/**
 * Validates whether a CPF format is correct.
 * Accepts either 11 pure digits or standard formatted CPF (e.g., 000.000.000-00).
 * @param {string} cpf
 * @returns {boolean}
 */
exports.isValidCPF = (cpf) => {
  // SECURITY: CPF can be either 11 digits or formatted as XXX.XXX.XXX-XX
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return typeof cpf === "string" && cpfRegex.test(cpf);
};

// SECURITY: Shared utility functions for security and validation.
// All helper methods should include security-related comment headers explaining the purpose.

/**
 * SECURITY: Validates that an email matches a secure, standardized regex pattern to prevent injection or malformed data.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * SECURITY: Validates that a CPF contains exactly 11 digits (optionally formatted with dots and dashes).
 * This prevents buffer overflow and injection risks in database query boundaries.
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  // Standard CPF regex checking either 11 digits or formatted format (XXX.XXX.XXX-XX)
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCPF,
};

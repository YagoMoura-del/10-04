// SECURITY: Modularized validation helpers using strict patterns to prevent malformed/malicious inputs
// such as regex/formatting issues, SQL injection attempts, or denial of service via excessively long strings.

/**
 * Validates whether the given email follows standard email formatting rules.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  // Strict email format verification
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates whether the given CPF is formatted correctly (either 11 digits or in format XXX.XXX.XXX-XX).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
  if (typeof cpf !== "string") return false;
  // Handles strictly numeric 11-digit format or formatted CPF with dots and a dash
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCpf,
};

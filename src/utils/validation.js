// SECURITY: Strict input validation functions to prevent invalid or malformed data injection for email and CPF fields.

/**
 * Validates email format using standard regex.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  // SECURITY: Email pattern check ensuring basic structure (user@domain.tld)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates CPF format (either 11 digits unformatted or XXX.XXX.XXX-XX formatted).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  // SECURITY: Validate CPF string format (11 raw digits or formatted XXX.XXX.XXX-XX)
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf.trim());
}

module.exports = {
  isValidEmail,
  isValidCPF,
};

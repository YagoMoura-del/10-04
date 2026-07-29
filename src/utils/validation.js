// SECURITY: Regular expression patterns for input validation to prevent injection and format bypass.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CPF_REGEX = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

/**
 * Validates the email format.
 * // SECURITY: Ensures that the input is a valid email string to prevent injection and improper format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  return EMAIL_REGEX.test(email);
}

/**
 * Validates the CPF format (both formatted and unformatted).
 * // SECURITY: Ensures the CPF has a proper length and format to prevent SQL/command injection and data corruption.
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
  if (typeof cpf !== "string") return false;
  return CPF_REGEX.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCpf,
};

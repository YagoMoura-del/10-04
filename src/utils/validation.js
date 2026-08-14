// SECURITY: Modularized input validation regex patterns to protect the database and application logic.
// Using explicit regular expression checks for standard format patterns.

/**
 * Validates whether the given email follows standard format rules.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  // SECURITY: Simple yet robust email validation regex to avoid basic DoS/ReDoS patterns while capturing typical email formats.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates whether the given CPF (Cadastro de Pessoas Físicas) is of valid length and format.
 * Matches either 11 digits straight (e.g. 12345678901) or standard formatted CPF (e.g. 123.456.789-01).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
  if (typeof cpf !== "string") return false;
  // SECURITY: Restrict validation to 11 raw digits or formatted 'xxx.xxx.xxx-xx' to prevent malicious inputs.
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCpf,
};

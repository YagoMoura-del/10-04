// SECURITY: Using safe regular expressions and type checking to prevent injection or ReDoS (Regular Expression Denial of Service).

/**
 * Validates whether the input is a valid email format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  // SECURITY: Simple and safe regex pattern to avoid ReDoS vulnerability
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates whether the input is a valid CPF format (digits-only or formatted).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  // SECURITY: Match 11 digits or formatted 'XXX.XXX.XXX-XX' without backtracking risks
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCPF,
};

// SECURITY: Helper functions to validate input formats for security and data integrity.

function isValidEmail(email) {
  if (typeof email !== "string") return false;
  // SECURITY: Validate email format to prevent malicious input and data corruption
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  // SECURITY: Validate CPF as 11 numeric digits or standard formatted 000.000.000-00
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
}

module.exports = {
  isValidEmail,
  isValidCPF,
};

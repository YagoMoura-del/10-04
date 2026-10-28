// SECURITY: Input validation helper functions to sanitize and validate input formats (email and CPF)
// before passing data to database models, mitigating invalid data and injection risks.

function isValidEmail(email) {
  if (typeof email !== "string") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf.trim());
}

module.exports = {
  isValidEmail,
  isValidCPF,
};

// SECURITY: Always include comments starting with '// SECURITY:' to explain the rationale for security-related code changes.

// SECURITY: Email validation pattern checking for standard email address syntax to avoid injection or malformed entries.
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return typeof email === 'string' && emailRegex.test(email);
}

// SECURITY: CPF validation pattern checking for Brazilian Tax ID format (either 11 continuous digits or formatted like xxx.xxx.xxx-xx) to restrict input structure.
function isValidCPF(cpf) {
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return typeof cpf === 'string' && cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCPF
};

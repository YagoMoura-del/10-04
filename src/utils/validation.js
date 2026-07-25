// SECURITY: Input validation helper methods to ensure proper and safe formats for sensitive student information
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    // SECURITY: Standard email validation regex to ensure correct email format and prevent injection attempts
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidCpf(cpf) {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Validate CPF structure (must be exactly 11 digits, or formatted with dots and hyphen)
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCpf
};

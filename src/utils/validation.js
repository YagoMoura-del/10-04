// SECURITY: Input validation functions to prevent malformed data entry, injection attacks, and invalid user input.

function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    // Supports 11 digits unformatted or formatted (000.000.000-00)
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf.trim());
}

module.exports = {
    isValidEmail,
    isValidCPF
};

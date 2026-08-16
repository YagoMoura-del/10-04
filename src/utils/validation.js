// SECURITY: Modularized input validation helpers for email and CPF formats to prevent malformed or malicious user input.

function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    // SECURITY: Validate email structure using standard pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Validate CPF format (11 digits unformatted or 000.000.000-00 formatted)
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCPF
};

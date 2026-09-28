// SECURITY: Input validation functions to ensure data integrity and prevent injection or ill-formed input attacks.

function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    // SECURITY: Standard email pattern matching to prevent malformed email strings
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidCpf(cpf) {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Validate CPF string format (11 digits or formatted 000.000.000-00)
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCpf
};

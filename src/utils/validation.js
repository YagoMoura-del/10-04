// SECURITY: Input validation helper functions to ensure data integrity and prevent malformed or malicious inputs.

const isValidEmail = (email) => {
    if (typeof email !== 'string') return false;
    // SECURITY: Validate basic RFC-compliant email structure to prevent unexpected payload injection
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidCPF = (cpf) => {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Validate CPF format (11 digits unformatted or standard XXX.XXX.XXX-XX format)
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
};

module.exports = {
    isValidEmail,
    isValidCPF
};

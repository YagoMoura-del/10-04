// SECURITY: Helper functions to validate user inputs (email and CPF formats) to prevent invalid or malicious data insertion.

function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidCpf(cpf) {
    if (typeof cpf !== 'string') return false;
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCpf,
};

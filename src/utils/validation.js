// SECURITY: Centralized input validation helpers to prevent malformed data and injection vectors.

function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCPF
};

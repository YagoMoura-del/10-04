// SECURITY: Input validation utilities to enforce data integrity and prevent injection/malformed data attacks.

/**
 * Validates email format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Validates CPF format (11 digits or formatted 000.000.000-00).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
    if (typeof cpf !== 'string') return false;
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf.trim());
}

module.exports = {
    isValidEmail,
    isValidCpf
};

// SECURITY: Input validation functions to prevent malformed data injection and ensure data integrity.

/**
 * Validates email format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    // SECURITY: Ensure email matches standard user@domain.tld pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Validates CPF format (11 digits or standard format XXX.XXX.XXX-XX).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Ensure CPF matches 11 consecutive digits or formatted XXX.XXX.XXX-XX
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf.trim());
}

module.exports = {
    isValidEmail,
    isValidCPF,
};

// SECURITY: Utility functions for input validation and sanitization to prevent malformed or malicious data injection.

/**
 * Validates whether the given string is a valid email address format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    // SECURITY: Use regex to enforce basic email structure and avoid processing invalid formats
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Validates whether the given string is a valid CPF format (digits or formatted XXX.XXX.XXX-XX).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Validate CPF against numeric 11 digits or standard formatted pattern
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf.trim());
}

module.exports = {
    isValidEmail,
    isValidCPF
};

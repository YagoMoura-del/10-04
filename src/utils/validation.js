// SECURITY: Input validation functions to prevent injection, corrupted data, and unintended input handling.

/**
 * Validates whether a string matches standard email format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    // SECURITY: Simple regex check to validate email format before DB insertion or processing.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Validates whether a string matches CPF format (11 digits or formatted 000.000.000-00).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Strict regex check to prevent malformed or malicious string values in CPF field.
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf.trim());
}

module.exports = {
    isValidEmail,
    isValidCpf
};

// SECURITY: Shared utility functions for input validation to prevent invalid or malicious payload inputs.

/**
 * Validates email format using regex.
 * // SECURITY: Enforces strict format for email inputs to prevent malformed data and injection risks.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Validates CPF format (either 11 digits or formatted XXX.XXX.XXX-XX).
 * // SECURITY: Validates Brazilian CPF format to ensure valid length and structure.
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
    isValidCpf,
};

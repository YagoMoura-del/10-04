// SECURITY: Input validation helpers to prevent malformed or malicious data injection.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CPF_REGEX = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

/**
 * Validates if string is a valid email address format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    return EMAIL_REGEX.test(email.trim());
}

/**
 * Validates if string is a valid CPF format (11 digits or formatted 000.000.000-00).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    return CPF_REGEX.test(cpf.trim());
}

module.exports = {
    isValidEmail,
    isValidCPF
};

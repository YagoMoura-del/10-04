// SECURITY: Validation utility functions used to sanitize and validate input formats.
// Using explicit regular expression patterns prevents malformed or malicious payload injections.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CPF_REGEX = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

/**
 * Validates whether the provided email string matches the standard email format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    // SECURITY: Null/Undefined check and type check to prevent TypeError bypass.
    if (typeof email !== 'string') return false;
    return EMAIL_REGEX.test(email);
}

/**
 * Validates whether the provided CPF string matches a standard CPF format (either 11 digits or formatted).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
    // SECURITY: Null/Undefined check and type check to prevent TypeError bypass.
    if (typeof cpf !== 'string') return false;
    return CPF_REGEX.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCPF
};

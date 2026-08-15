// SECURITY: Validation helper functions to sanitize and validate student inputs (email and CPF)
// before passing them to the database, mitigating invalid data entry and basic injection/malformed input risks.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CPF_REGEX = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

/**
 * Validates whether the provided string is a valid email format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    return EMAIL_REGEX.test(email.trim());
}

/**
 * Validates whether the provided string matches a standard Brazilian CPF format (11 digits or formatted 000.000.000-00).
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

// SECURITY: Standard input validation rules to prevent malformed or malicious email inputs and CPF inputs.
// This limits exposure to potential logical bypasses or database corruptions due to improper formats.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CPF_REGEX = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

/**
 * Validates whether an email matches a secure format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    return EMAIL_REGEX.test(email);
}

/**
 * Validates whether a CPF matches standard Brazilian formatting rules (11 digits, with or without dots and dash).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    return CPF_REGEX.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCPF
};

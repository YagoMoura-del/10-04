// SECURITY: Standard regex-based input validation functions for school management API to prevent malformed or malicious email/CPF entries.

/**
 * Validates whether the provided email string matches a secure email structure.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    // SECURITY: Use a standard validated email pattern to enforce strict email structures
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates whether the provided CPF string matches 11 digits format or standardized formatted representation.
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Validate CPF structure strictly to prevent injection or malformed data
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCpf
};

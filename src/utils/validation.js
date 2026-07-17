// SECURITY: Helper functions to validate user input fields to prevent injection or invalid data formats.

/**
 * Validates the email format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    // SECURITY: Use strict standard regex pattern for email format verification
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return typeof email === 'string' && emailRegex.test(email);
}

/**
 * Validates the CPF format.
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
    // SECURITY: Validate CPF against standard 11 digits format or dotted/hyphenated format
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return typeof cpf === 'string' && cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCPF
};

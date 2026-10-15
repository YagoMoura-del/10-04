// SECURITY: Centralized input validation helpers to prevent malformed data and injection attacks.

/**
 * Validates email format using standard regex pattern.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    // SECURITY: Ensures email matches basic structure user@domain.tld
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Validates CPF format (either 11 digits or formatted 000.000.000-00).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Restricts CPF to 11 numerical digits or formatted XXX.XXX.XXX-XX to prevent unexpected payload patterns
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf.trim());
}

module.exports = {
    isValidEmail,
    isValidCPF,
};

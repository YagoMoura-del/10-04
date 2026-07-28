// SECURITY: Standardizing input validation across the application to prevent invalid/unsafe payloads.
// These functions validate student-related data formats to ensure standard compliance (CPF and Email).

/**
 * Validates whether an email matches standard email formats.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    // SECURITY: Use a robust email validation regular expression to avoid malformed inputs.
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates whether a CPF matches standard format (either exactly 11 digits or formatted as XXX.XXX.XXX-XX).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
    // SECURITY: Validate CPF structure strictly to prevent arbitrary/malicious inputs.
    if (typeof cpf !== 'string') return false;
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCpf
};

// SECURITY: Modularized input validation utilities to ensure strict sanitization and prevent malformed or malicious user input (e.g., header injection, invalid format data).

/**
 * Validates if a string is a valid email format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    // SECURITY: Enforce basic RFC-compliant structure to prevent injection and invalid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Validates if a string is a valid Brazilian CPF format (formatted XXX.XXX.XXX-XX or 11 digits).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Ensure CPF contains only numbers or standard formatted CPF pattern
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf.trim());
}

module.exports = {
    isValidEmail,
    isValidCPF
};

// SECURITY: Input validation helper module for email and CPF formats to prevent invalid or malicious payload submission.

/**
 * Validates whether an email address matches standard email pattern.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    // SECURITY: Simple regex to enforce reasonable email structure without catastrophic backtracking
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Validates whether a CPF matches standard 11 digits or formatted digits (XXX.XXX.XXX-XX).
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Enforce CPF format (11 digits unformatted or formatted XXX.XXX.XXX-XX)
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf.trim());
}

module.exports = {
    isValidEmail,
    isValidCpf
};

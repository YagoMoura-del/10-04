/**
 * Validates an email address.
 * @param {string} email
 * @returns {boolean}
 */
exports.isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates a CPF (Brazilian taxpayer ID).
 * Simple format check: 11 digits or XXX.XXX.XXX-XX
 * @param {string} cpf
 * @returns {boolean}
 */
exports.isValidCpf = (cpf) => {
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
};

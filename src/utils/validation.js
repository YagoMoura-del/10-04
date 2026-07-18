/**
 * Validates whether an email format is correct.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates whether a CPF format is correct.
 * Supports 11 digits or formatted XXX.XXX.XXX-XX.
 * @param {string} cpf
 * @returns {boolean}
 */
function isValidCpf(cpf) {
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCpf
};

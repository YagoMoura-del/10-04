/**
 * Validates email format.
 * @param {string} email
 * @returns {boolean}
 */
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates CPF format (11 digits or formatted).
 * @param {string} cpf
 * @returns {boolean}
 */
const isValidCPF = (cpf) => {
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
};

module.exports = {
    isValidEmail,
    isValidCPF
};

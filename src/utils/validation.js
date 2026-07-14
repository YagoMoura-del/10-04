/**
 * Validates if the provided email is in a valid format.
 * @param {string} email
 * @returns {boolean}
 */
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates if the provided CPF is in a valid format (11 digits, with or without dots and dash).
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

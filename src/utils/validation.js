/**
 * Validates if the provided string is a valid email format.
 * @param {string} email
 * @returns {boolean}
 */
exports.isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates if the provided string is a valid CPF format (XXX.XXX.XXX-XX or XXXXXXXXXXX).
 * @param {string} cpf
 * @returns {boolean}
 */
exports.isValidCPF = (cpf) => {
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
};

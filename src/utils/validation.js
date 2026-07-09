/**
 * Validates an email address.
 * @param {string} email
 * @returns {boolean}
 */
exports.validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates a Brazilian CPF.
 * @param {string|number} cpf
 * @returns {boolean}
 */
exports.validateCPF = (cpf) => {
    const cpfStr = String(cpf);
    return cpfStr.length === 11 && !isNaN(cpfStr);
};

/**
 * Validates the format of an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is in a valid format, false otherwise.
 */
exports.validateEmail = (email) => {
    // SECURITY: Use a standard regex to validate email format and prevent malformed data.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates the format of a CPF (Brazilian tax ID).
 * Supports both formatted (000.000.000-00) and unformatted (00000000000) strings.
 * @param {string} cpf - The CPF string to validate.
 * @returns {boolean} - Returns true if the CPF is in a valid format, false otherwise.
 */
exports.validateCPF = (cpf) => {
    // SECURITY: Validate CPF format to ensure only digits and standard separators are used.
    // This handles both 11 digits or the standard format 000.000.000-00.
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
};

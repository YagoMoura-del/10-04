// SECURITY: Shared utility functions for security and validation.
// Centralizes the validation logic to ensure consistent enforcement across controllers.

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return typeof email === 'string' && emailRegex.test(email);
}

function isValidCPF(cpf) {
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return typeof cpf === 'string' && cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCPF
};

// SECURITY: Implementing validation rules for email and CPF format to sanitize user input before queries are executed.

function validateEmail(email) {
    if (typeof email !== 'string') return false;
    // SECURITY: Simple standard regex validation for email addresses.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateCpf(cpf) {
    if (typeof cpf !== 'string') return false;
    // SECURITY: Standard CPF validation supporting either 11 digits or formatted CPF: XXX.XXX.XXX-XX.
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

module.exports = {
    validateEmail,
    validateCpf
};

// SECURITY: Helper functions to validate user input formats to prevent injection and malformed data

const isValidEmail = (email) => {
    if (typeof email !== 'string') return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidCPF = (cpf) => {
    if (typeof cpf !== 'string') return false;
    return /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
};

module.exports = {
    isValidEmail,
    isValidCPF,
};

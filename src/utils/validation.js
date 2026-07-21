// SECURITY: Centralized utility function to validate email address format to prevent injection and bad data.
const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// SECURITY: Centralized utility function to validate CPF format (11 digits or standard formatted CPF) to enforce strict input patterns.
const validateCpf = (cpf) => {
    return /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
};

module.exports = {
    validateEmail,
    validateCpf
};
